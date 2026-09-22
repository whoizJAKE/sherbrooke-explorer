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
    const y = this.world.surfaceAt(x, z) + 0.72;
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
        car.body.position.y = this.world.surfaceAt(car.mesh.position.x, car.mesh.position.z) + 0.72;
        car.mesh.position.y = car.body.position.y;
        continue;
      }
      const drive = input.forward;
      const steer = input.strafe;
      const handbrake = input.jumpHeld;
      if (handbrake) car.speed *= Math.max(0, 1 - dt * 3.2);
      else if (drive > 0) car.speed += dt * 16;
      else if (drive < 0) car.speed -= dt * 11;
      else car.speed *= Math.max(0, 1 - dt * 0.55);
      car.speed = Math.max(-8, Math.min(32, car.speed));
      const turnScale = 1.35 * Math.min(1, Math.max(0.2, Math.abs(car.speed) / 7));
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
    const y = this.world.surfaceAt(car.body.position.x, car.body.position.z) + 0.72;
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

function buildCarMesh(color) {
  const root = new THREE.Group();
  const paint = new THREE.MeshStandardMaterial({ color, roughness: 0.45, metalness: 0.25 });
  const dark = new THREE.MeshStandardMaterial({ color: '#1b1e22', roughness: 0.5, metalness: 0.4 });
  const glass = new THREE.MeshStandardMaterial({ color: '#9fd0dd', roughness: 0.15, metalness: 0.1, transparent: true, opacity: 0.75 });
  const body = new THREE.Mesh(new THREE.BoxGeometry(1.75, 0.55, 4.2), paint);
  body.position.y = 0.15;
  const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.55, 0.55, 2.0), paint);
  cabin.position.set(0, 0.62, 0.15);
  const wind = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.42, 0.08), glass);
  wind.position.set(0, 0.66, -0.82);
  wind.rotation.x = 0.35;
  const lightMat = new THREE.MeshStandardMaterial({ color: '#fff6d8', emissive: '#fff1c4', emissiveIntensity: 0.6 });
  const lampL = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.12, 0.08), lightMat);
  lampL.position.set(-0.55, 0.18, -2.08);
  const lampR = lampL.clone();
  lampR.position.x = 0.55;
  root.add(body, cabin, wind, lampL, lampR);
  const wheels = [];
  const front = [];
  const spots = [[-0.82, -1.25], [0.82, -1.25], [-0.82, 1.25], [0.82, 1.25]];
  for (const [x, z] of spots) {
    const pivot = new THREE.Group();
    pivot.position.set(x, -0.05, z);
    const spin = new THREE.Group();
    const tire = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.22, 10), dark);
    tire.rotation.z = Math.PI / 2;
    spin.add(tire);
    pivot.add(spin);
    root.add(pivot);
    wheels.push(spin);
    if (z < 0) front.push(pivot);
  }
  root.userData.wheels = wheels;
  root.userData.front = front;
  return root;
}
