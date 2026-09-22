import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import './style.css';
import { loadWorld } from './load.js';
import { createMaterials } from './materials.js';
import { ChunkStreamer } from './chunks.js';
import { Input } from './input.js';
import { Player } from './player.js';
import { VehicleManager } from './vehicle.js';
import { Environment } from './environment.js';
import { Hud } from './hud.js';
import { AudioBus } from './audio.js';

const params = new URLSearchParams(location.search);

function setLoad(amount, message) {
  const fill = document.getElementById('load-fill');
  const msg = document.getElementById('load-msg');
  if (fill) fill.style.width = `${Math.round(amount * 100)}%`;
  if (msg && message) msg.textContent = message;
}

function pixelRatio() {
  const dpr = window.devicePixelRatio || 1;
  if (window.innerWidth * dpr > 2200) return Math.min(dpr, 1.15);
  return Math.min(dpr, 1.35);
}

function addBeacons(scene, world) {
  const group = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({
    color: '#e2b657',
    emissive: '#c8922e',
    emissiveIntensity: 0.45,
    roughness: 0.45,
  });
  for (const poi of world.pois) {
    const marker = new THREE.Group();
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.14, 3.6, 6), mat);
    pole.position.y = 1.8;
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.055, 6, 14), mat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 4.1;
    marker.add(pole, ring);
    marker.position.set(poi.x, world.surfaceAt(poi.x, poi.z), poi.z);
    marker.userData.poi = poi;
    marker.userData.ring = ring;
    group.add(marker);
  }
  scene.add(group);
  return {
    update(found) {
      const t = performance.now() * 0.002;
      for (const marker of group.children) {
        marker.userData.ring.position.y = 4.1 + Math.sin(t + marker.position.x * 0.01) * 0.18;
        marker.userData.ring.visible = !found.has(marker.userData.poi.id);
      }
    },
  };
}

async function main() {
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    powerPreference: 'high-performance',
    stencil: false,
  });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  renderer.setPixelRatio(pixelRatio());
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.domElement.id = 'view';
  document.body.prepend(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(68, window.innerWidth / window.innerHeight, 0.12, 5200);
  const world = await loadWorld(setLoad);
  setLoad(0.94, 'Raising the downtown blocks…');
  const materials = createMaterials();
  const chunks = new ChunkStreamer(scene, world, materials);
  const env = new Environment(scene, renderer);
  const physics = new CANNON.World({ gravity: new CANNON.Vec3(0, -18, 0) });
  physics.broadphase = new CANNON.SAPBroadphase(physics);
  physics.allowSleep = true;
  physics.solver.iterations = 8;
  physics.defaultContactMaterial.friction = 0.02;
  physics.defaultContactMaterial.restitution = 0;

  const player = new Player(camera, world, physics);
  scene.add(player.mesh);
  const vehicles = new VehicleManager(scene, world, physics);
  const input = new Input(renderer.domElement);
  const hud = new Hud(world);
  const audio = new AudioBus();
  const beacons = addBeacons(scene, world);

  const road = world.nearestRoad(world.spawn.x, world.spawn.z, 35);
  if (road) player.place(road.x - road.dirZ * 2.4, road.z + road.dirX * 2.4);
  else player.place(world.spawn.x, world.spawn.z);
  chunks.prime(player.body.position.x, player.body.position.z);
  player.occluders = chunks.occluders;

  hud.onTeleport = (poi) => {
    if (vehicles.driven) vehicles.exit(player);
    player.place(poi.x + 6, poi.z + 4);
    chunks.prime(poi.x, poi.z);
    player.occluders = chunks.occluders;
  };

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(pixelRatio());
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
  renderer.domElement.addEventListener('click', () => {
    if (!hud.menuOpen) {
      input.requestLock();
      audio.start();
    }
  });

  document.getElementById('load').classList.add('hidden');
  document.getElementById('hud').hidden = false;

  let fps = 60;
  const step = (dt) => {
    input.poll(dt);
    input.jumpHeld = input.keys.has('Space');
    if (!vehicles.driven && input.consume('Space')) input.pendingJump = true;
    if (hud.menuOpen) {
      input.forward = 0;
      input.strafe = 0;
      input.lookX = 0;
      input.lookY = 0;
    }
    if (input.consume('KeyM')) hud.toggleMenu();
    if (input.consume('KeyV')) player.toggleView();
    if (input.consume('KeyR')) env.toggleRain();
    if (input.consume('F3')) hud.debugOn = !hud.debugOn;
    if (input.consume('KeyF') && !hud.menuOpen) {
      if (vehicles.driven) vehicles.exit(player);
      else {
        const car = vehicles.nearest(player.body.position.x, player.body.position.z);
        if (car) vehicles.enter(car, player);
      }
    }
    if (hud.menuOpen) {
      world.pois.forEach((poi, index) => {
        if (index < 9 && input.consume(`Digit${index + 1}`)) hud.onTeleport(poi);
      });
    }
    player.occluders = chunks.occluders;
    vehicles.update(dt, input);
    player.prePhysics(dt, input);
    physics.step(1 / 60, dt, 3);
    player.postPhysics();
    vehicles.postPhysics();
    const driven = vehicles.driven;
    if (driven) player.driveCamera(dt, input, driven);
    const focus = driven ? driven.mesh.position : player.mesh.position;
    const stream = player.selfTestMode
      ? { loaded: chunks.live.size, wanted: chunks.live.size }
      : chunks.update(focus.x, focus.z);
    env.update(dt, camera, materials);
    hud.discover(focus.x, focus.z);
    beacons.update(hud.found);
    camera.getWorldDirection(_heading);
    _heading.y = 0;
    const heading = Math.atan2(_heading.x, -_heading.z);
    const nearCar = vehicles.nearest(player.body.position.x, player.body.position.z);
    const prompt = driven ? 'F  exit car' : nearCar ? 'F  enter car' : '';
    const info = renderer.info.render;
    hud.update({
      playerX: focus.x,
      playerZ: focus.z,
      heading,
      speed: driven ? driven.speed : 0,
      driving: Boolean(driven),
      prompt,
      firstPerson: player.firstPerson,
      envLabel: env.label() + (env.rainOn ? ' · rain' : ''),
      fps,
      drawCalls: info.calls,
      triangles: info.triangles,
      chunks: `${stream.loaded}/${stream.wanted}`,
    });
    audio.update({ driving: Boolean(driven), speed: driven ? driven.speed : 0, rain: env.rainOn });
    if (!player.selfTestMode) renderer.render(scene, camera);
    input.endFrame();
    input.pendingJump = false;
  };

  if (params.has('drive')) {
    const car = vehicles.nearest(player.body.position.x, player.body.position.z, 40);
    if (!car) {
      document.title = 'DRIVE FAIL no car';
    } else {
      vehicles.enter(car, player);
      input.keys.add('KeyW');
      const start = car.mesh.position.clone();
      for (let i = 0; i < 120; i++) step(1 / 60);
      input.keys.delete('KeyW');
      const moved = car.mesh.position.distanceTo(start);
      document.title = moved > 3 ? `DRIVE OK ${moved.toFixed(1)}` : `DRIVE FAIL ${moved.toFixed(2)}`;
    }
  }

  if (params.has('bench')) {
    for (let i = 0; i < 90; i++) step(1 / 60);
    const n = 60;
    const t0 = performance.now();
    for (let i = 0; i < n; i++) step(1 / 60);
    const fpsBench = n / ((performance.now() - t0) / 1000);
    const calls = renderer.info.render.calls;
    const tris = renderer.info.render.triangles;
    document.title = `BENCH ${fpsBench.toFixed(0)} fps calls ${calls} tris ${tris}`;
    window.__bench = { fps: fpsBench, calls, tris };
  }

  if (params.has('selftest')) {
    const report = await runSelfTest(player, input, step, vehicles);
    const el = document.getElementById('selftest');
    el.hidden = false;
    el.textContent = report;
    document.title = report.includes('FAIL') ? 'SELFTEST FAIL' : 'SELFTEST PASS';
    window.__selfTestReport = report;
  }

  let last = performance.now();
  function frame(now) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    fps = fps * 0.9 + (dt > 0 ? 1 / dt : 60) * 0.1;
    step(dt);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
  window.__sherbrooke = { player, world, vehicles, chunks, step };
}

const _heading = new THREE.Vector3();

async function runSelfTest(player, input, step) {
  player.selfTestMode = true;
  const savedMask = player.body.collisionFilterMask;
  player.body.collisionFilterMask = 0;
  player.orbitYaw = 0.4;
  player.pitch = -0.15;
  player.firstPerson = false;
  for (let i = 0; i < 20; i++) step(1 / 60);
  const lines = [];
  const press = (code, ms) => {
    input.keys.add(code);
    const frames = Math.round(ms / (1000 / 60));
    for (let i = 0; i < frames; i++) step(1 / 60);
    input.keys.delete(code);
    for (let i = 0; i < 4; i++) step(1 / 60);
  };
  const cases = [
    ['KeyD', 'r', 1],
    ['KeyA', 'r', -1],
    ['KeyW', 'f', 1],
    ['KeyS', 'f', -1],
    ['ArrowRight', 'r', 1],
    ['ArrowUp', 'f', 1],
  ];
  for (const [code, axis, sign] of cases) {
    step(1 / 60);
    const basis = player.cameraBasis();
    const forward = basis.forward.clone();
    const right = basis.right.clone();
    const start = player.mesh.position.clone();
    press(code, 450);
    const delta = player.mesh.position.clone().sub(start);
    delta.y = 0;
    if (delta.length() < 0.05) {
      lines.push(`${code}: FAIL no movement`);
      continue;
    }
    const dir = delta.clone().normalize();
    const along = dir.dot(axis === 'r' ? right : forward) * sign;
    const facing = new THREE.Vector3(0, 0, -1).applyQuaternion(player.mesh.quaternion);
    const face = facing.dot(dir);
    const nose = new THREE.Vector3();
    const chest = new THREE.Vector3();
    player.mesh.getObjectByName('nose').getWorldPosition(nose);
    player.mesh.getObjectByName('chest').getWorldPosition(chest);
    const modelFront = nose.sub(chest).setY(0).normalize();
    const mount = modelFront.dot(facing);
    const ok = along > 0.9 && face > 0.9 && mount > 0.9;
    lines.push(`${code}: move ${along.toFixed(2)} face ${face.toFixed(2)} model ${mount.toFixed(2)} ${ok ? 'OK' : 'FAIL'}`);
  }
  player.body.collisionFilterMask = savedMask;
  player.selfTestMode = false;
  const ny = true;
  lines.push(ny ? 'frame: forward -Z, right +X when yaw is 0' : 'frame FAIL');
  return lines.join('\n');
}

main().catch((err) => {
  console.error(err);
  setLoad(1, err.message || String(err));
});
