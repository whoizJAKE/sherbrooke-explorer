import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { GROUP_CAR, GROUP_BUILDING, GROUP_PLAYER } from './player.js';

const COLORS = ['#c23b3b', '#f2f2f0', '#1f4e79', '#2f6b45'];

export class VehicleManager {
  constructor(scene, world, physics) {
    this.scene = scene;
    this.world = world;
    this.physics = physics;
    this.cars = [];
    this.driven = null;
    this.up = new CANNON.Vec3(0, 1, 0);
    world.carSpawns.forEach((spawn, i) => {
      const car = this.makeCar(spawn, COLORS[i % COLORS.length]);
      this.cars.push(car);
      scene.add(car.mesh);
      physics.addBody(car.body);
    });
  }

  makeCar(spawn, color) {
    const mesh = new THREE.Group();
    const visual = buildCarMesh(color);
    mesh.add(visual);
    let x = spawn.x;
    let z = spawn.z;
    let yaw = spawn.yaw || 0;
    const road = this.world.nearestRoad(x, z, 45);
    if (road) {
      x = road.x - road.dirZ * 1.7;
      z = road.z + road.dirX * 1.7;
      yaw = Math.atan2(-road.dirX, -road.dirZ);
    }
    const y = this.world.surfaceAt(x, z) + 0.02;
    mesh.position.set(x, y, z);
    mesh.rotation.y = yaw;
    const body = new CANNON.Body({
      mass: 0,
      type: CANNON.Body.STATIC,
      material: new CANNON.Material('car'),
      collisionFilterGroup: GROUP_CAR,
      collisionFilterMask: GROUP_BUILDING | GROUP_PLAYER,
      allowSleep: false,
    });
    body.addShape(new CANNON.Box(new CANNON.Vec3(0.9, 0.55, 2.15)));
    body.position.set(x, y, z);
    body.quaternion.setFromAxisAngle(this.up, yaw);
    return { mesh, visual, body, yaw, speed: 0, color, spawn, wheelSpin: 0 };
  }

  nearest(x, z, max = 3.5) {
    let best = null;
    let bestD = max;
    for (const car of this.cars) {
      if (car === this.driven) continue;
      const d = Math.hypot(car.mesh.position.x - x, car.mesh.position.z - z);
      if (d < bestD) {
        bestD = d;
        best = car;
      }
    }
    return best;
  }

  enter(car, player) {
    this.driven = car;
    car.body.type = CANNON.Body.DYNAMIC;
    car.body.mass = 900;
    car.body.updateMassProperties();
    car.body.wakeUp();
    car.body.collisionFilterMask = GROUP_BUILDING;
    player.setOnFoot(false);
    player.mesh.position.copy(car.mesh.position);
  }

  exit(player) {
    const car = this.driven;
    if (!car) return;
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(car.mesh.quaternion);
    const x = car.mesh.position.x + right.x * 2.4;
    const z = car.mesh.position.z + right.z * 2.4;
    car.speed = 0;
    car.body.velocity.set(0, 0, 0);
    car.body.angularVelocity.set(0, 0, 0);
    car.body.type = CANNON.Body.STATIC;
    car.body.mass = 0;
    car.body.updateMassProperties();
    car.body.collisionFilterMask = GROUP_BUILDING | GROUP_PLAYER;
    this.driven = null;
    player.setOnFoot(true);
    player.place(x, z);
    player.orbitYaw = car.yaw;
  }

  update(dt, input) {
    for (const car of this.cars) {
      if (car !== this.driven) {
        car.body.position.x = car.mesh.position.x;
        car.body.position.z = car.mesh.position.z;
        car.body.position.y = this.world.surfaceAt(car.mesh.position.x, car.mesh.position.z) + 0.02;
        car.mesh.position.y = car.body.position.y;
        continue;
      }
      const drive = input.forward;
      const steer = input.strafe;
      const handbrake = input.jumpHeld;
      const abs = Math.abs(car.speed);
      if (handbrake) car.speed *= Math.max(0, 1 - dt * 4.4);
      else if (drive > 0) car.speed += dt * (abs < 7 ? 12.5 : 8);
      else if (drive < 0) car.speed -= dt * 9;
      else car.speed *= Math.max(0, 1 - dt * 1.15);
      car.speed = Math.max(-7, Math.min(26, car.speed));
      const turnScale = 1.2 * (0.38 + 0.62 * (1 - Math.min(1, abs / 24)));
      const reverse = car.speed < -0.2 ? -1 : 1;
      car._steer = steer;
      car.yaw -= steer * dt * turnScale * reverse;
      car.mesh.rotation.y = car.yaw;
      const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(car.mesh.quaternion);
      fwd.y = 0;
      fwd.normalize();
      car.body.velocity.x = fwd.x * car.speed;
      car.body.velocity.z = fwd.z * car.speed;
      car.body.quaternion.setFromAxisAngle(this.up, car.yaw);
      car.body.angularVelocity.set(0, 0, 0);
      car._fwd = fwd;
    }
  }

  postPhysics() {
    const car = this.driven;
    if (!car) return;
    const actual = Math.hypot(car.body.velocity.x, car.body.velocity.z);
    if (actual + 0.35 < Math.abs(car.speed)) car.speed = Math.sign(car.speed || 1) * actual;
    const x = car.body.position.x;
    const z = car.body.position.z;
    const dem = this.world.dem;
    car.body.position.x = Math.min(dem.maxX - 21, Math.max(dem.minX + 21, x));
    car.body.position.z = Math.min(dem.maxZ - 21, Math.max(dem.minZ + 21, z));
    const y = this.world.surfaceAt(car.body.position.x, car.body.position.z) + 0.02;
    car.body.position.y = y;
    car.body.velocity.y = 0;
    car.mesh.position.set(car.body.position.x, y, car.body.position.z);
    car.mesh.rotation.y = car.yaw;
    const fwd = car._fwd || new THREE.Vector3(0, 0, -1).applyQuaternion(car.mesh.quaternion);
    const ahead = this.world.surfaceAt(car.mesh.position.x + fwd.x * 2.1, car.mesh.position.z + fwd.z * 2.1);
    const behind = this.world.surfaceAt(car.mesh.position.x - fwd.x * 2.1, car.mesh.position.z - fwd.z * 2.1);
    // Positive rotation.x lifts the nose (local -Z). See Rx(θ)·(0,0,-1) = (0, sinθ, -cosθ).
    car.visual.rotation.x = Math.atan2(ahead - behind, 4.2);
    car.wheelSpin += car.speed * 0.08;
    for (const wheel of car.visual.userData.wheels) wheel.rotation.x = car.wheelSpin;
    const steer = car.visual.userData.front;
    for (const wheel of steer) wheel.rotation.y = (car._steer || 0) * 0.04;
  }
}

const RUBBER = new THREE.MeshStandardMaterial({ color: '#17191c', roughness: 0.78, metalness: 0.04 });
const RIM = new THREE.MeshStandardMaterial({ color: '#c5c8cc', roughness: 0.35, metalness: 0.75 });
const GLASS = new THREE.MeshStandardMaterial({
  color: '#b7d0d8',
  roughness: 0.08,
  metalness: 0.15,
  transparent: true,
  opacity: 0.55,
  envMapIntensity: 1,
});
const LAMP = new THREE.MeshStandardMaterial({ color: '#fff6d8', emissive: '#fff1c4', emissiveIntensity: 0.7 });
const TAIL = new THREE.MeshStandardMaterial({ color: '#8a1d1d', emissive: '#ff2a2a', emissiveIntensity: 0.35 });
const TRIM = new THREE.MeshStandardMaterial({ color: '#2a2e33', roughness: 0.45, metalness: 0.5 });

function part(w, h, d, material, x, y, z, rx = 0) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  mesh.position.set(x, y, z);
  mesh.rotation.x = rx;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function buildCarMesh(color) {
  const root = new THREE.Group();
  const paint = new THREE.MeshPhysicalMaterial({
    color,
    roughness: 0.32,
    metalness: 0.62,
    clearcoat: 0.7,
    clearcoatRoughness: 0.18,
    envMapIntensity: 1,
  });
  root.add(part(1.78, 0.42, 4.2, paint, 0, 0.58, 0.02));
  root.add(part(1.68, 0.12, 1.35, paint, 0, 0.78, -1.05));
  root.add(part(1.58, 0.42, 1.7, paint, 0, 0.92, 0.18));
  root.add(part(1.72, 0.16, 0.28, TRIM, 0, 0.48, -2.02));
  root.add(part(1.72, 0.16, 0.22, TRIM, 0, 0.48, 2.05));
  root.add(part(1.42, 0.38, 0.06, GLASS, 0, 0.96, -0.64, 0.42));
  root.add(part(1.42, 0.32, 0.05, GLASS, 0, 0.98, 1.0, -0.35));
  root.add(part(0.05, 0.32, 1.15, GLASS, -0.8, 0.96, 0.18));
  root.add(part(0.05, 0.32, 1.15, GLASS, 0.8, 0.96, 0.18));
  const lampL = part(0.32, 0.12, 0.06, LAMP, -0.58, 0.62, -2.12);
  const lampR = part(0.32, 0.12, 0.06, LAMP, 0.58, 0.62, -2.12);
  root.add(lampL, lampR);
  root.add(part(0.28, 0.1, 0.05, TAIL, -0.58, 0.66, 2.12));
  root.add(part(0.28, 0.1, 0.05, TAIL, 0.58, 0.66, 2.12));
  root.add(part(0.16, 0.1, 0.22, paint, -0.96, 0.95, 0.15));
  root.add(part(0.16, 0.1, 0.22, paint, 0.96, 0.95, 0.15));
  const wheels = [];
  const front = [];
  const spots = [[-0.84, -1.32], [0.84, -1.32], [-0.84, 1.28], [0.84, 1.28]];
  for (const [x, z] of spots) {
    const pivot = new THREE.Group();
    pivot.position.set(x, 0.34, z);
    const spin = new THREE.Group();
    const tire = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.24, 14), RUBBER);
    tire.rotation.z = Math.PI / 2;
    tire.castShadow = true;
    const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.26, 10), RIM);
    rim.rotation.z = Math.PI / 2;
    spin.add(tire, rim);
    pivot.add(spin);
    root.add(pivot);
    wheels.push(spin);
    if (z < 0) front.push(pivot);
  }
  root.userData.wheels = wheels;
  root.userData.front = front;
  return root;
}
