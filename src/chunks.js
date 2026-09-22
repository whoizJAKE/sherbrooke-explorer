import * as THREE from 'three';
import earcut from 'earcut';
import { colorFor } from './materials.js';

const UP = new THREE.Vector3(0, 1, 0);

function geoFrom(pos, idx, uv, col, nrm) {
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  if (uv) geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  if (col) geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  if (nrm) geo.setAttribute('normal', new THREE.Float32BufferAttribute(nrm, 3));
  else geo.computeVertexNormals();
  geo.setIndex(idx);
  return geo;
}

function addRibbon(bucket, pts, width, yAt) {
  const count = pts.length / 2;
  if (count < 2 || width <= 0.2) return;
  const base = bucket.pos.length / 3;
  let travelled = 0;
  for (let i = 0; i < count; i++) {
    const i0 = Math.max(0, i - 1);
    const i1 = Math.min(count - 1, i + 1);
    let dx = pts[i1 * 2] - pts[i0 * 2];
    let dz = pts[i1 * 2 + 1] - pts[i0 * 2 + 1];
    const len = Math.hypot(dx, dz) || 1;
    dx /= len;
    dz /= len;
    // side = cross(dir, up) = (-dz, 0, dx), a horizontal perpendicular
    const sx = -dz * width * 0.5;
    const sz = dx * width * 0.5;
    if (i > 0) travelled += Math.hypot(pts[i * 2] - pts[(i - 1) * 2], pts[i * 2 + 1] - pts[(i - 1) * 2 + 1]);
    const x = pts[i * 2];
    const z = pts[i * 2 + 1];
    const y = yAt(x, z);
    bucket.pos.push(x + sx, y, z + sz, x - sx, y, z - sz);
    if (bucket.uv) bucket.uv.push(0, travelled / 8, 1, travelled / 8);
  }
  for (let i = 0; i < count - 1; i++) {
    const a = base + i * 2;
    bucket.idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
  }
}

function extrude(building, y0, wall, roof) {
  const pts = building.pts;
  const n = pts.length / 2;
  if (n < 3) return;
  const y1 = y0 + building.height;
  const flat = Array.from(pts);
  const tris = earcut(flat);
  if (!tris.length) return;
  const color = colorFor(building);
  const roofC = color.map((c) => c * 0.58);
  const rb = roof.pos.length / 3;
  for (let i = 0; i < n; i++) {
    roof.pos.push(pts[i * 2], y1, pts[i * 2 + 1]);
    roof.col.push(roofC[0], roofC[1], roofC[2]);
    roof.nrm.push(0, 1, 0);
  }
  for (let t = 0; t < tris.length; t++) roof.idx.push(rb + tris[t]);

  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n;
    const ax = pts[i * 2];
    const az = pts[i * 2 + 1];
    const bx = pts[j * 2];
    const bz = pts[j * 2 + 1];
    const len = Math.hypot(bx - ax, bz - az);
    if (len < 0.15) continue;
    const nx = -(bz - az) / len;
    const nz = (bx - ax) / len;
    const wb = wall.pos.length / 3;
    const u0 = ax / 4;
    const u1 = u0 + len / 4;
    const v1 = building.height / 3.2;
    wall.pos.push(ax, y0, az, bx, y0, bz, bx, y1, bz, ax, y1, az);
    for (let k = 0; k < 4; k++) wall.nrm.push(nx, 0, nz);
    wall.uv.push(u0, 0, u1, 0, u1, v1, u0, v1);
    for (let k = 0; k < 4; k++) wall.col.push(color[0], color[1], color[2]);
    wall.idx.push(wb, wb + 1, wb + 2, wb, wb + 2, wb + 3);
  }
}

function paintTerrain(world, cx, cz, seg) {
  const size = world.chunkSize;
  const geo = new THREE.PlaneGeometry(size, size, seg, seg);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const colors = new Float32Array(pos.count * 3);
  const ox = (cx + 0.5) * size;
  const oz = (cz + 0.5) * size;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i) + ox;
    const z = pos.getZ(i) + oz;
    const y = world.terrainY(x, z);
    pos.setXYZ(i, x, y, z);
    const mask = world.maskAt(x, z);
    const elev = world.sampleDem(x, z);
    let r;
    let g;
    let b;
    if (mask === 2) {
      r = 0.32; g = 0.36; b = 0.28;
    } else if (mask === 1) {
      r = 0.66; g = 0.6; b = 0.42;
    } else if (elev > 290) {
      r = 0.48; g = 0.5; b = 0.42;
    } else {
      const n = ((x * 0.013 + z * 0.017) % 1 + 1) % 1;
      r = 0.52 + n * 0.08;
      g = 0.62 + n * 0.08;
      b = 0.36;
    }
    colors[i * 3] = r;
    colors[i * 3 + 1] = g;
    colors[i * 3 + 2] = b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geo.computeVertexNormals();
  // PlaneGeometry + rotateX(-PI/2) faces +Y. Positions are absolute, so do not
  // rotate the geometry again or the chunk would orbit the world origin.
  const ny = geo.attributes.normal.getY(0);
  if (ny < 0) console.warn('terrain normal faces down', ny);
  return geo;
}

export class ChunkStreamer {
  constructor(scene, world, materials) {
    this.scene = scene;
    this.world = world;
    this.mat = materials;
    this.live = new Map();
    this.occluders = [];
    this.unitBox = new THREE.BoxGeometry(1, 1, 1);
    this.trunkGeo = new THREE.CylinderGeometry(0.11, 0.18, 2.5, 5);
    this.trunkGeo.translate(0, 1.25, 0);
    this.coneGeo = new THREE.ConeGeometry(1.35, 3.1, 6);
    this.coneGeo.translate(0, 3.5, 0);
    this.ballGeo = new THREE.SphereGeometry(1.25, 6, 5);
    this.ballGeo.translate(0, 3.15, 0);
    this.poleGeo = new THREE.CylinderGeometry(0.06, 0.08, 5.4, 5);
    this.poleGeo.translate(0, 2.7, 0);
    this.headGeo = new THREE.BoxGeometry(0.55, 0.12, 0.28);
    this.headGeo.translate(0.15, 5.35, 0);
    this.dummy = new THREE.Object3D();
    this.color = new THREE.Color();
    this.normalChecked = false;
  }

  modeFor(dist) {
    if (dist < 500) return 'near';
    if (dist < 1050) return 'mid';
    return 'far';
  }

  ensure(cx, cz, mode) {
    const key = `${cx},${cz}`;
    const prev = this.live.get(key);
    if (prev && prev.userData.mode === mode) return prev;
    if (prev) this.drop(key);
    const group = this.build(cx, cz, mode);
    this.live.set(key, group);
    this.scene.add(group);
    return group;
  }

  build(cx, cz, mode) {
    const { world, mat } = this;
    const group = new THREE.Group();
    group.name = `chunk ${cx},${cz}`;
    group.userData.mode = mode;
    group.userData.own = [];
    const seg = mode === 'near' ? 22 : mode === 'mid' ? 12 : 6;
    const terrain = new THREE.Mesh(paintTerrain(world, cx, cz, seg), mat.terrain);
    terrain.receiveShadow = false;
    terrain.userData.ownGeo = true;
    group.add(terrain);
    group.userData.own.push(terrain);

    const chunk = world.chunks.get(`${cx},${cz}`);
    const roads = { pos: [], uv: [], idx: [] };
    const walks = { pos: [], uv: [], idx: [] };
    const waters = { pos: [], idx: [] };
    if (chunk) {
      for (const road of chunk.roads) {
        if (mode === 'far' && road.cls > 2) continue;
        const yAt = road.flags & 1 && road.deckY != null
          ? () => road.deckY + 0.32
          : (x, z) => world.terrainY(x, z) + 0.3;
        addRibbon(roads, road.pts, road.width, yAt);
        if (mode !== 'far' && road.cls <= 6) {
          const walkY = road.flags & 1 && road.deckY != null
            ? () => road.deckY + 0.2
            : (x, z) => world.terrainY(x, z) + 0.16;
          addRibbon(walks, road.pts, road.width + 2.3, walkY);
        }
      }
      for (const water of chunk.waters) {
        if (water.kind === 1) {
          addRibbon(waters, water.pts, water.width, (x, z) => world.waterY(x, z));
        } else if (water.pts.length >= 6) {
          const tris = earcut(Array.from(water.pts));
          const base = waters.pos.length / 3;
          for (let i = 0; i < water.pts.length; i += 2) {
            const x = water.pts[i];
            const z = water.pts[i + 1];
            waters.pos.push(x, world.waterY(x, z), z);
          }
          for (let t = 0; t < tris.length; t++) waters.idx.push(base + tris[t]);
        }
      }
      if (mode === 'near') this.addBuildings(group, chunk);
      else if (mode === 'mid') this.addLod(group, chunk);
      if (mode === 'near') {
        this.addTrees(group, chunk);
        this.addLights(group, chunk);
      }
    }
    this.addBucket(group, roads, mat.road, true);
    this.addBucket(group, walks, mat.sidewalk, true);
    if (waters.pos.length) {
      const mesh = new THREE.Mesh(geoFrom(waters.pos, waters.idx), mat.water);
      mesh.userData.ownGeo = true;
      mesh.renderOrder = 2;
      group.add(mesh);
      group.userData.own.push(mesh);
    }
    group.userData.mode = mode;
    return group;
  }

  addBucket(group, bucket, material, own) {
    if (bucket.pos.length < 9) return;
    const mesh = new THREE.Mesh(geoFrom(bucket.pos, bucket.idx, bucket.uv), material);
    mesh.userData.ownGeo = own;
    group.add(mesh);
    group.userData.own.push(mesh);
  }

  addBuildings(group, chunk) {
    const wall = { pos: [], uv: [], idx: [], col: [], nrm: [] };
    const roof = { pos: [], idx: [], col: [], nrm: [] };
    for (const building of chunk.buildings) {
      extrude(building, this.world.baseY(building.pts), wall, roof);
    }
    if (wall.pos.length) {
      const mesh = new THREE.Mesh(geoFrom(wall.pos, wall.idx, wall.uv, wall.col, wall.nrm), this.mat.wall);
      mesh.userData.ownGeo = true;
      mesh.userData.occluder = true;
      group.add(mesh);
      group.userData.own.push(mesh);
    }
    if (roof.pos.length) {
      const mesh = new THREE.Mesh(geoFrom(roof.pos, roof.idx, null, roof.col, roof.nrm), this.mat.roof);
      mesh.userData.ownGeo = true;
      mesh.userData.occluder = true;
      group.add(mesh);
      group.userData.own.push(mesh);
    }
  }

  addLod(group, chunk) {
    const list = chunk.buildings;
    if (!list.length) return;
    const mesh = new THREE.InstancedMesh(this.unitBox, this.mat.wall, list.length);
    mesh.userData.occluder = true;
    for (let i = 0; i < list.length; i++) {
      const b = list[i];
      const y0 = this.world.baseY(b.pts);
      const w = Math.max(1.5, b.maxX - b.minX);
      const d = Math.max(1.5, b.maxZ - b.minZ);
      this.dummy.position.set((b.minX + b.maxX) / 2, y0 + b.height / 2, (b.minZ + b.maxZ) / 2);
      this.dummy.scale.set(w, b.height, d);
      this.dummy.rotation.set(0, 0, 0);
      this.dummy.updateMatrix();
      mesh.setMatrixAt(i, this.dummy.matrix);
      const c = colorFor(b);
      this.color.setRGB(c[0], c[1], c[2]);
      mesh.setColorAt(i, this.color);
    }
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    group.add(mesh);
    group.userData.own.push(mesh);
  }

  addTrees(group, chunk) {
    const trees = chunk.trees.filter((t) => this.world.maskAt(t.x, t.z) !== 2).slice(0, 240);
    if (!trees.length) return;
    const trunks = new THREE.InstancedMesh(this.trunkGeo, this.mat.trunk, trees.length);
    const pines = trees.filter((t) => t.kind === 0);
    const broad = trees.filter((t) => t.kind !== 0);
    const place = (mesh, list, colorForKind) => {
      list.forEach((tree, i) => {
        const y = this.world.terrainY(tree.x, tree.z);
        const s = 0.75 + ((Math.abs(Math.sin(tree.x * 0.2 + tree.z)) * 0.7));
        this.dummy.position.set(tree.x, y, tree.z);
        this.dummy.scale.set(s, s * (0.85 + (tree.kind === 2 ? 0.2 : 0)), s);
        this.dummy.rotation.set(0, tree.x * 0.1, 0);
        this.dummy.updateMatrix();
        mesh.setMatrixAt(i, this.dummy.matrix);
        if (colorForKind) {
          this.color.set(colorForKind(tree));
          mesh.setColorAt(i, this.color);
        }
      });
      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
      mesh.count = list.length;
    };
    // Trunks share one mesh; crowns split so autumn and pine read differently.
    place(trunks, trees, null);
    group.add(trunks);
    if (pines.length) {
      const mesh = new THREE.InstancedMesh(this.coneGeo, this.mat.crown, pines.length);
      place(mesh, pines, () => '#2f6b3a');
      group.add(mesh);
    }
    if (broad.length) {
      const mesh = new THREE.InstancedMesh(this.ballGeo, this.mat.crown, broad.length);
      place(mesh, broad, (tree) => (tree.kind === 2 ? '#b6452d' : '#3e7d40'));
      group.add(mesh);
    }
  }

  addLights(group, chunk) {
    const lights = chunk.lights.filter((L) => this.world.maskAt(L.x, L.z) !== 2).slice(0, 80);
    if (!lights.length) return;
    const poles = new THREE.InstancedMesh(this.poleGeo, this.mat.lamp, lights.length);
    const heads = new THREE.InstancedMesh(this.headGeo, this.mat.lampHead, lights.length);
    lights.forEach((light, i) => {
      let y = this.world.terrainY(light.x, light.z);
      for (const road of chunk.roads) {
        if ((road.flags & 1) && road.deckY != null) {
          const dx = light.x - road.pts[0];
          const dz = light.z - road.pts[1];
          if (dx * dx + dz * dz < 80 * 80) y = Math.max(y, road.deckY);
        }
      }
      this.dummy.position.set(light.x, y, light.z);
      this.dummy.scale.set(1, 1, 1);
      this.dummy.rotation.set(0, 0, 0);
      this.dummy.updateMatrix();
      poles.setMatrixAt(i, this.dummy.matrix);
      heads.setMatrixAt(i, this.dummy.matrix);
    });
    poles.instanceMatrix.needsUpdate = true;
    heads.instanceMatrix.needsUpdate = true;
    group.add(poles, heads);
  }

  drop(key) {
    const group = this.live.get(key);
    if (!group) return;
    this.scene.remove(group);
    for (const mesh of group.userData.own || []) {
      if (mesh.geometry && mesh.userData.ownGeo) mesh.geometry.dispose();
    }
    group.traverse((obj) => {
      if (obj.geometry && obj.userData.ownGeo) obj.geometry.dispose();
    });
    this.live.delete(key);
  }

  refreshOccluders() {
    const list = [];
    for (const group of this.live.values()) {
      if (group.userData.mode === 'far') continue;
      group.traverse((obj) => {
        if (obj.userData && obj.userData.occluder) list.push(obj);
      });
    }
    this.occluders = list;
  }

  // Build the blocks under the player before the first frame so the city is already there.
  prime(x, z) {
    const cs = this.world.chunkSize;
    const cx = Math.floor(x / cs);
    const cz = Math.floor(z / cs);
    for (let dz = -1; dz <= 1; dz++) {
      for (let dx = -1; dx <= 1; dx++) {
        const dist = Math.hypot(dx, dz) * cs;
        this.ensure(cx + dx, cz + dz, this.modeFor(dist));
      }
    }
    this.refreshOccluders();
  }

  update(x, z) {
    const cs = this.world.chunkSize;
    const cx = Math.floor(x / cs);
    const cz = Math.floor(z / cs);
    const want = new Map();
    const radius = 7;
    for (let dz = -radius; dz <= radius; dz++) {
      for (let dx = -radius; dx <= radius; dx++) {
        const dist = Math.hypot((dx + 0.15) * cs, (dz + 0.15) * cs);
        if (dist > 1680) continue;
        want.set(`${cx + dx},${cz + dz}`, { cx: cx + dx, cz: cz + dz, mode: this.modeFor(dist) });
      }
    }
    for (const key of this.live.keys()) {
      if (!want.has(key)) this.drop(key);
    }
    let budget = 2;
    for (const [key, info] of want) {
      const prev = this.live.get(key);
      if (prev && prev.userData.mode === info.mode) continue;
      if (budget-- <= 0) break;
      this.ensure(info.cx, info.cz, info.mode);
    }
    this.refreshOccluders();
    return { loaded: this.live.size, wanted: want.size };
  }
}

export { UP };
