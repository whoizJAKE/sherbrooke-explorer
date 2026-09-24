import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { eaveHeight } from './roadmath.mjs';

const UP = new THREE.Vector3(0, 1, 0);
// yaw 0 looks north, which is world -Z. right = cross(forward, up).
// At forward (0,0,-1), right is (1,0,0). Checked against camera.getWorldDirection below.

const GROUP_PLAYER = 1;
const GROUP_CAR = 2;
const GROUP_BUILDING = 4;

function dampAngle(current, target, amount) {
  let d = target - current;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  return current + d * Math.min(1, amount);
}

export class Player {
  constructor(camera, world, physics) {
    this.camera = camera;
    this.world = world;
    this.physics = physics;
    this.mesh = buildPerson();
    this.radius = 0.36;
    this.half = 0.6;
    this.orbitYaw = 0.55;
    this.pitch = -0.28;
    this.distance = 6.4;
    this.shoulder = 0.72;
    this.firstPerson = false;
    this.grounded = false;
    this.eye = 1.62;
    this.selfTestMode = false;
    this.onFoot = true;
    this._colliders = new Map();
    this._syncAt = 0;
    this._tmp = new THREE.Vector3();
    this._fwd = new THREE.Vector3();
    this._right = new THREE.Vector3();
    this._look = new THREE.Vector3();
    this._wish = new THREE.Vector3();
    this._target = new THREE.Vector3();
    this._cam = new THREE.Vector3();

    const shape = new CANNON.Cylinder(this.radius, this.radius, this.half * 2, 8);
    this.body = new CANNON.Body({
      mass: 70,
      fixedRotation: true,
      linearDamping: 0,
      angularDamping: 1,
      material: new CANNON.Material('player'),
      collisionFilterGroup: GROUP_PLAYER,
      collisionFilterMask: GROUP_BUILDING | GROUP_CAR,
      allowSleep: false,
    });
    this.body.addShape(shape);
    physics.addBody(this.body);
    this.buildingMat = new CANNON.Material('building');
  }

  get active() {
    return this.onFoot;
  }

  place(x, z) {
    const y = this.world.surfaceAt(x, z) + this.half + 0.08;
    this.body.position.set(x, y, z);
    this.body.velocity.set(0, 0, 0);
    this.mesh.position.set(x, y, z);
    this.syncBuildings(true);
  }

  setOnFoot(on) {
    this.onFoot = on;
    this.mesh.visible = on && !this.firstPerson;
    if (on) {
      this.body.collisionFilterMask = GROUP_BUILDING | GROUP_CAR;
      this.body.type = CANNON.Body.DYNAMIC;
      this.body.mass = 70;
      this.body.updateMassProperties();
      this.body.wakeUp();
    } else {
      this.body.collisionFilterMask = 0;
      this.body.velocity.set(0, 0, 0);
      this.body.type = CANNON.Body.KINEMATIC;
    }
  }

  // Camera placement is the only place orbit yaw becomes a direction.
  // Movement reads that direction back from the camera, it does not recompute it.
  placeCamera(target) {
    const dist = this.firstPerson ? 0.12 : this.distance;
    const shoulder = this.firstPerson ? 0 : this.shoulder;
    const pitch = this.pitch;
    const cp = Math.cos(pitch);
    const sp = Math.sin(pitch);
    const hx = -Math.sin(this.orbitYaw);
    const hz = -Math.cos(this.orbitYaw);
    this._look.set(hx * cp, sp, hz * cp);
    if (this._look.lengthSq() < 1e-6) this._look.set(0, 0, -1);
    this._right.set(-hz, 0, hx);
    this._cam.copy(target).addScaledVector(this._look, -dist).addScaledVector(this._right, shoulder);
    this.camera.position.copy(this._cam);
    this.camera.up.copy(UP);
    this.camera.lookAt(target);
  }

  cameraBasis() {
    this.camera.getWorldDirection(this._fwd);
    this._fwd.y = 0;
    if (this._fwd.lengthSq() < 1e-8) this._fwd.set(0, 0, -1);
    else this._fwd.normalize();
    this._right.crossVectors(this._fwd, UP);
    return { forward: this._fwd, right: this._right };
  }

  prePhysics(dt, input) {
    if (!this.active) return;
    if (!this.selfTestMode) {
      this.orbitYaw -= input.lookX * 0.0022;
      this.pitch = Math.max(-0.85, Math.min(0.7, this.pitch - input.lookY * 0.0018));
    }
    const feet = this.body.position.y - this.half;
    const lookH = this.firstPerson ? this.eye - (input.crouch ? 0.45 : 0) : 1.28;
    this._target.set(this.body.position.x, feet + lookH, this.body.position.z);
    this.placeCamera(this._target);
    const basis = this.cameraBasis();
    this._wish.set(0, 0, 0);
    if (input.forward || input.strafe) {
      this._wish.addScaledVector(basis.forward, input.forward);
      this._wish.addScaledVector(basis.right, input.strafe);
    }
    const moving = this._wish.lengthSq() > 0.0001;
    if (moving) this._wish.normalize();
    const wading = this.world.maskAt(this.body.position.x, this.body.position.z) === 2
      && this.world.bridgeDeckAt(this.body.position.x, this.body.position.z) == null;
    let speed = input.crouch ? 1.7 : input.sprint ? 7.6 : 4.25;
    if (wading) speed *= 0.45;
    if (moving) {
      this.body.velocity.x = this._wish.x * speed;
      this.body.velocity.z = this._wish.z * speed;
      if (!this.firstPerson) this.mesh.rotation.y = Math.atan2(-this._wish.x, -this._wish.z);
    } else {
      this.body.velocity.x = 0;
      this.body.velocity.z = 0;
    }
    if (this.firstPerson) this.mesh.rotation.y = this.orbitYaw;
    else if (!this.selfTestMode && input.mouseIdle > 1.15 && moving) {
      this.orbitYaw = dampAngle(this.orbitYaw, this.mesh.rotation.y, dt * 1.6);
    }
    if (this.grounded && input.pendingJump) {
      this.body.velocity.y = input.crouch ? 4.4 : 6.5;
      this.grounded = false;
      input.pendingJump = false;
    }
    this.syncBuildings(false);
  }

  postPhysics() {
    if (!this.active) {
      this.mesh.visible = false;
      return;
    }
    const x = this.body.position.x;
    const z = this.body.position.z;
    if (!this.world.insideBounds(x, z, 20)) {
      const dem = this.world.dem;
      this.body.position.x = Math.min(dem.maxX - 21, Math.max(dem.minX + 21, x));
      this.body.position.z = Math.min(dem.maxZ - 21, Math.max(dem.minZ + 21, z));
      this.body.velocity.x = 0;
      this.body.velocity.z = 0;
    }
    const surface = this.world.surfaceAt(this.body.position.x, this.body.position.z);
    const feet = this.body.position.y - this.half;
    const gap = feet - surface;
    if (this.body.velocity.y <= 0.4 && gap < 0.35 && gap > -2.2) {
      this.body.position.y = surface + this.half;
      this.body.velocity.y = 0;
      this.grounded = true;
    } else if (gap > 0.45) {
      this.grounded = false;
    }
    // Mesh origin is the feet. The physics body origin is the capsule center.
    this.mesh.position.set(this.body.position.x, this.body.position.y - this.half, this.body.position.z);
    this.mesh.visible = !this.firstPerson;
    const feetY = this.body.position.y - this.half;
    const lookH = this.firstPerson ? this.eye : 1.28;
    this._target.set(this.body.position.x, feetY + lookH, this.body.position.z);
    this.placeCamera(this._target);
    this.resolveCamera(this._target);
  }

  resolveCamera(target) {
    if (this.firstPerson) return;
    const offset = this._cam.copy(this.camera.position).sub(target);
    const dist = offset.length();
    if (dist < 0.2) return;
    offset.multiplyScalar(1 / dist);
    this._ray = this._ray || new THREE.Raycaster();
    this._ray.set(target, offset);
    this._ray.far = dist;
    this._ray.camera = this.camera;
    const hits = this._ray.intersectObjects(this.occluders || [], false);
    if (hits.length && hits[0].distance < dist - 0.25) {
      const pull = Math.max(0.45, hits[0].distance - 0.35);
      this.camera.position.copy(target).addScaledVector(offset, pull);
    }
  }

  syncBuildings(force) {
    const now = performance.now();
    if (!force && now - this._syncAt < 350) return;
    this._syncAt = now;
    const x = this.body.position.x;
    const z = this.body.position.z;
    const near = this.world.buildingsNear(x, z, 52);
    const keep = new Set();
    for (const b of near) {
      const key = `${b.minX.toFixed(1)}|${b.minZ.toFixed(1)}|${b.floors}|${b.maxX.toFixed(1)}`;
      keep.add(key);
      if (this._colliders.has(key)) continue;
      const grounds = [];
      for (let k = 0; k < b.pts.length; k += 2) grounds.push(this.world.terrainY(b.pts[k], b.pts[k + 1]));
      const { eave, min } = eaveHeight(grounds, b.height);
      const H = Math.max(2.7, eave - min);
      const hx = Math.max(0.45, (b.maxX - b.minX) / 2);
      const hz = Math.max(0.45, (b.maxZ - b.minZ) / 2);
      const halfY = H / 2;
      const body = new CANNON.Body({
        mass: 0,
        material: this.buildingMat,
        collisionFilterGroup: GROUP_BUILDING,
        collisionFilterMask: GROUP_PLAYER | GROUP_CAR,
      });
      body.addShape(new CANNON.Box(new CANNON.Vec3(hx, halfY, hz)));
      body.position.set((b.minX + b.maxX) / 2, min + halfY, (b.minZ + b.maxZ) / 2);
      this.physics.addBody(body);
      this._colliders.set(key, body);
    }
    for (const [key, body] of this._colliders) {
      if (!keep.has(key)) {
        this.physics.removeBody(body);
        this._colliders.delete(key);
      }
    }
  }

  driveCamera(dt, input, car) {
    if (!this.selfTestMode) {
      this.orbitYaw -= input.lookX * 0.0022;
      this.pitch = Math.max(-0.7, Math.min(0.55, this.pitch - input.lookY * 0.0018));
      if (input.mouseIdle > 0.55) this.orbitYaw = dampAngle(this.orbitYaw, car.yaw, dt * 2.8);
    }
    const prevD = this.distance;
    const prevS = this.shoulder;
    this.distance = this.firstPerson ? 0.15 : 7.2;
    this.shoulder = this.firstPerson ? 0 : 0.48;
    this._target.set(car.mesh.position.x, car.mesh.position.y + (this.firstPerson ? 0.85 : 1.15), car.mesh.position.z);
    this.placeCamera(this._target);
    this.resolveCamera(this._target);
    this.distance = prevD;
    this.shoulder = prevS;
  }

  toggleView() {
    this.firstPerson = !this.firstPerson;
    this.mesh.visible = !this.firstPerson;
  }
}

function buildPerson() {
  const group = new THREE.Group();
  const cloth = new THREE.MeshStandardMaterial({ color: '#2c4d73', roughness: 0.8 });
  const skin = new THREE.MeshStandardMaterial({ color: '#e0b394', roughness: 0.7 });
  const pants = new THREE.MeshStandardMaterial({ color: '#22262c', roughness: 0.9 });
  const chest = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.62, 0.26), cloth);
  chest.position.set(0, 1.18, 0);
  chest.name = 'chest';
  const head = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.3, 0.26), skin);
  head.position.set(0, 1.68, 0);
  const nose = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.1), skin);
  // Nose sits on local -Z, the character's forward. The self-test measures this mesh,
  // it does not reuse the constant forward vector the mount was authored with.
  nose.position.set(0, 1.66, -0.18);
  nose.name = 'nose';
  const legL = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.7, 0.18), pants);
  legL.position.set(-0.12, 0.4, 0);
  const legR = legL.clone();
  legR.position.x = 0.12;
  const armL = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.55, 0.14), cloth);
  armL.position.set(-0.32, 1.16, 0);
  const armR = armL.clone();
  armR.position.x = 0.32;
  const hair = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.12, 0.28), pants);
  hair.position.set(0, 1.84, 0);
  const shoeL = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.08, 0.26), pants);
  shoeL.position.set(-0.12, 0.04, -0.02);
  const shoeR = shoeL.clone();
  shoeR.position.x = 0.12;
  group.add(chest, head, nose, legL, legR, armL, armR, hair, shoeL, shoeR);
  group.traverse((obj) => {
    if (obj.isMesh) obj.castShadow = true;
  });
  return group;
}

export { GROUP_PLAYER, GROUP_CAR, GROUP_BUILDING, UP };
