import * as THREE from 'three';
import earcut from 'earcut';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { facadeKey } from './materials.js';
import { pointInPoly } from './load.js';
import { eaveHeight } from './roadmath.mjs';

const UP = new THREE.Vector3(0, 1, 0);

function geoFrom(pos, idx, uv, col, nrm) {
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  if (uv) {
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    geo.setAttribute('uv2', geo.attributes.uv);
  }
  if (col) geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  if (nrm) geo.setAttribute('normal', new THREE.Float32BufferAttribute(nrm, 3));
  else geo.computeVertexNormals();
  geo.setIndex(idx);
  return geo;
}

function densify(pts, step) {
  const count = pts.length / 2;
  if (count < 2) return pts;
  const out = [];
  for (let i = 0; i < count - 1; i++) {
    const ax = pts[i * 2];
    const az = pts[i * 2 + 1];
    const bx = pts[(i + 1) * 2];
    const bz = pts[(i + 1) * 2 + 1];
    const len = Math.hypot(bx - ax, bz - az);
    const parts = Math.max(1, Math.ceil(len / step));
    for (let s = 0; s < parts; s++) {
      const t = s / parts;
      out.push(ax + (bx - ax) * t, az + (bz - az) * t);
    }
  }
  out.push(pts[(count - 1) * 2], pts[(count - 1) * 2 + 1]);
  return out;
}

function addRibbon(bucket, pts, width, yAt, uvLen = 12, offset = 0) {
  const count = pts.length / 2;
  if (count < 2 || width <= 0.05) return;
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
    const side = width * 0.5;
    const sx = -dz;
    const sz = dx;
    if (i > 0) travelled += Math.hypot(pts[i * 2] - pts[(i - 1) * 2], pts[i * 2 + 1] - pts[(i - 1) * 2 + 1]);
    const x = pts[i * 2] + sx * offset;
    const z = pts[i * 2 + 1] + sz * offset;
    const y = yAt(pts[i * 2], pts[i * 2 + 1], i);
    bucket.pos.push(x + sx * side, y, z + sz * side, x - sx * side, y, z - sz * side);
    if (bucket.uv) bucket.uv.push(0, travelled / uvLen, 1, travelled / uvLen);
    if (bucket.col) bucket.col.push(1, 1, 1, 1, 1, 1);
  }
  for (let i = 0; i < count - 1; i++) {
    const a = base + i * 2;
    bucket.idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
  }
}

function addDisc(bucket, x, y, z, radius) {
  const segs = 8;
  const c = bucket.pos.length / 3;
  bucket.pos.push(x, y, z);
  if (bucket.uv) bucket.uv.push(0.5, 0.5);
  for (let s = 0; s < segs; s++) {
    const a = (s / segs) * Math.PI * 2;
    bucket.pos.push(x + Math.cos(a) * radius, y, z + Math.sin(a) * radius);
    if (bucket.uv) bucket.uv.push(0.5 + Math.cos(a) * 0.5, 0.5 + Math.sin(a) * 0.5);
  }
  for (let s = 0; s < segs; s++) bucket.idx.push(c, c + 1 + s, c + 1 + ((s + 1) % segs));
}

function addParapets(bucket, pts, yAt, half) {
  const count = pts.length / 2;
  if (count < 2) return;
  for (const side of [-1, 1]) {
    const base = bucket.pos.length / 3;
    for (let i = 0; i < count; i++) {
      const i0 = Math.max(0, i - 1);
      const i1 = Math.min(count - 1, i + 1);
      let dx = pts[i1 * 2] - pts[i0 * 2];
      let dz = pts[i1 * 2 + 1] - pts[i0 * 2 + 1];
      const len = Math.hypot(dx, dz) || 1;
      dx /= len;
      dz /= len;
      const x = pts[i * 2] + -dz * half * side;
      const z = pts[i * 2 + 1] + dx * half * side;
      const y = yAt(pts[i * 2], pts[i * 2 + 1], i);
      bucket.pos.push(x, y + 0.08, z, x, y + 0.92, z);
      bucket.nrm.push(-dz * side, 0, dx * side, -dz * side, 0, dx * side);
    }
    for (let i = 0; i < count - 1; i++) {
      const a = base + i * 2;
      bucket.idx.push(a, a + 1, a + 3, a, a + 3, a + 2);
    }
  }
}

function addPier(bucket, x, y0, y1, z) {
  const hx = 0.55;
  const hz = 0.55;
  const yb = Math.min(y0, y1);
  const yt = Math.max(y0, y1);
  if (yt - yb < 0.4) return;
  const faces = [
    [0, 1, 0],
    [0, -1, 0],
    [1, 0, 0],
    [-1, 0, 0],
    [0, 0, 1],
    [0, 0, -1],
  ];
  for (const [nx, ny, nz] of faces) {
    const b = bucket.pos.length / 3;
    const corners = [
      [x - hx, yb, z - hz],
      [x + hx, yb, z - hz],
      [x + hx, yt, z - hz],
      [x - hx, yt, z - hz],
      [x - hx, yb, z + hz],
      [x + hx, yb, z + hz],
      [x + hx, yt, z + hz],
      [x - hx, yt, z + hz],
    ];
    let quad;
    if (ny === 1) quad = [3, 2, 6, 7];
    else if (ny === -1) quad = [0, 4, 5, 1];
    else if (nx === 1) quad = [1, 5, 6, 2];
    else if (nx === -1) quad = [4, 0, 3, 7];
    else if (nz === 1) quad = [5, 4, 7, 6];
    else quad = [0, 1, 2, 3];
    for (const k of quad) {
      bucket.pos.push(corners[k][0], corners[k][1], corners[k][2]);
      bucket.nrm.push(nx, ny, nz);
    }
    bucket.idx.push(b, b + 1, b + 2, b, b + 2, b + 3);
  }
}

function pushWall(bucket, ax, az, bx, bz, y0a, y0b, y1b, y1a, nx, nz, u0, u1, v0, v1, tint) {
  const wb = bucket.pos.length / 3;
  bucket.pos.push(ax, y0a, az, bx, y0b, bz, bx, y1b, bz, ax, y1a, az);
  for (let k = 0; k < 4; k++) bucket.nrm.push(nx, 0, nz);
  if (bucket.col) bucket.col.push(tint[0], tint[1], tint[2], tint[0], tint[1], tint[2], tint[0], tint[1], tint[2], tint[0], tint[1], tint[2]);
  bucket.uv.push(u0, v0, u1, v0, u1, v1, u0, v1);
  bucket.idx.push(wb, wb + 1, wb + 2, wb, wb + 2, wb + 3);
}

function facadeTint(building, key) {
  const h = Math.abs(Math.sin(building.minX * 0.021 + building.minZ * 0.017));
  if (key === 'glass') return [0.98 + h * 0.02, 0.99, 1];
  if (key === 'stone') return [0.97 + h * 0.03, 0.97 + h * 0.02, 0.96];
  return [0.98 + h * 0.02, 0.96 + h * 0.03, 0.94 + h * 0.02];
}

function extrude(building, world, walls, roof, doors) {
  const pts = building.pts;
  const n = pts.length / 2;
  if (n < 3) return;
  const grounds = new Array(n);
  for (let i = 0; i < n; i++) grounds[i] = world.terrainY(pts[i * 2], pts[i * 2 + 1]);
  const { eave } = eaveHeight(grounds, building.height);
  const flat = Array.from(pts);
  const tris = earcut(flat);
  if (!tris.length) return;
  const rb = roof.pos.length / 3;
  for (let i = 0; i < n; i++) {
    roof.pos.push(pts[i * 2], eave, pts[i * 2 + 1]);
    roof.uv.push(pts[i * 2] / 9, pts[i * 2 + 1] / 9);
    roof.nrm.push(0, 1, 0);
  }
  for (let t = 0; t < tris.length; t++) roof.idx.push(rb + tris[t]);

  const key = facadeKey(building);
  const tint = facadeTint(building, key);
  const uShift = Math.abs(Math.sin(building.minX * 0.07 + building.minZ * 0.05)) * 0.7;
  let longest = 0;
  let doorEdge = -1;
  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n;
    const len = Math.hypot(pts[j * 2] - pts[i * 2], pts[j * 2 + 1] - pts[i * 2 + 1]);
    if (len > longest) {
      longest = len;
      doorEdge = i;
    }
  }
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
    const y0a = grounds[i] - 0.45;
    const y0b = grounds[j] - 0.45;
    const span = eave - Math.max(grounds[i], grounds[j]);
    const split = building.type === 1 && span > 6.4 ? Math.max(grounds[i], grounds[j]) + 3.2 : 0;
    const u1 = uShift + len / 15;
    if (split && split < eave - 2.2) {
      const vSplit = 3.2 / 13;
      pushWall(walls.glass, ax, az, bx, bz, y0a, y0b, split, split, nx, nz, uShift, u1, 0, vSplit, [0.97, 0.98, 1]);
      pushWall(walls[key], ax, az, bx, bz, split, split, eave, eave, nx, nz, uShift, u1, vSplit, span / 13, tint);
    } else {
      pushWall(walls[key], ax, az, bx, bz, y0a, y0b, eave, eave, nx, nz, uShift, u1, 0, Math.max(0.2, span / 13), tint);
    }
    if (doors && i === doorEdge && longest > 4.5 && longest < 46 && doors.count < 40 && building.height < 26 && building.type !== 2) {
      const dx = (bx - ax) / len;
      const dz = (bz - az) / len;
      const mx = (ax + bx) * 0.5 + nx * 0.07;
      const mz = (az + bz) * 0.5 + nz * 0.07;
      const base = Math.min(grounds[i], grounds[j]);
      pushWall(
        doors,
        mx - dx * 0.52,
        mz - dz * 0.52,
        mx + dx * 0.52,
        mz + dz * 0.52,
        base,
        base,
        base + 2.2,
        base + 2.2,
        nx,
        nz,
        0,
        1,
        0,
        1,
        [1, 1, 1],
      );
      doors.count += 1;
    }
  }
}

function paintTerrain(world, cx, cz, seg) {
  const size = world.chunkSize;
  const geo = new THREE.PlaneGeometry(size, size, seg, seg);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const uv = geo.attributes.uv;
  const colors = new Float32Array(pos.count * 3);
  const ox = (cx + 0.5) * size;
  const oz = (cz + 0.5) * size;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i) + ox;
    const z = pos.getZ(i) + oz;
    const y = world.terrainY(x, z);
    pos.setXYZ(i, x, y, z);
    uv.setXY(i, x / 8, z / 8);
    const mask = world.maskAt(x, z);
    const n = (Math.sin(x * 0.013) * Math.cos(z * 0.011) + 1) * 0.5;
    let r;
    let g;
    let b;
    if (mask === 2) {
      r = 0.15;
      g = 0.2;
      b = 0.18;
    } else if (mask === 1) {
      r = 0.62 + n * 0.08;
      g = 0.56 + n * 0.06;
      b = 0.4;
    } else {
      r = 0.94 + n * 0.06;
      g = 0.96 + n * 0.04;
      b = 0.9 + n * 0.05;
    }
    colors[i * 3] = r;
    colors[i * 3 + 1] = g;
    colors[i * 3 + 2] = b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geo.computeVertexNormals();
  geo.setAttribute('uv2', geo.attributes.uv);
  addSkirt(geo, seg, 7);
  return geo;
}

function addSkirt(geo, seg, drop) {
  const pos = geo.attributes.position;
  const nrm = geo.attributes.normal;
  const uv = geo.attributes.uv;
  const col = geo.attributes.color;
  const n = seg + 1;
  const edge = [];
  for (let i = 0; i < n; i++) edge.push(i);
  for (let i = 1; i < n; i++) edge.push(i * n + (n - 1));
  for (let i = n - 2; i >= 0; i--) edge.push((n - 1) * n + i);
  for (let i = n - 2; i >= 1; i--) edge.push(i * n);
  const oldCount = pos.count;
  const add = edge.length;
  const newPos = new Float32Array((oldCount + add) * 3);
  const newNrm = new Float32Array((oldCount + add) * 3);
  const newUv = new Float32Array((oldCount + add) * 2);
  const newCol = new Float32Array((oldCount + add) * 3);
  newPos.set(pos.array);
  newNrm.set(nrm.array);
  newUv.set(uv.array);
  newCol.set(col.array);
  for (let k = 0; k < add; k++) {
    const i = edge[k];
    const o = (oldCount + k) * 3;
    newPos[o] = pos.getX(i);
    newPos[o + 1] = pos.getY(i) - drop;
    newPos[o + 2] = pos.getZ(i);
    newNrm[o] = 0;
    newNrm[o + 1] = 0;
    newNrm[o + 2] = 1;
    newUv[(oldCount + k) * 2] = uv.getX(i);
    newUv[(oldCount + k) * 2 + 1] = uv.getY(i);
    newCol[o] = col.getX(i) * 0.75;
    newCol[o + 1] = col.getY(i) * 0.75;
    newCol[o + 2] = col.getZ(i) * 0.75;
  }
  const oldIdx = geo.index.array;
  const newIdx = new Uint32Array(oldIdx.length + edge.length * 6);
  newIdx.set(oldIdx);
  let w = oldIdx.length;
  for (let k = 0; k < edge.length; k++) {
    const k2 = (k + 1) % edge.length;
    const a = edge[k];
    const b = edge[k2];
    const c = oldCount + k;
    const d = oldCount + k2;
    newIdx[w++] = a;
    newIdx[w++] = b;
    newIdx[w++] = d;
    newIdx[w++] = a;
    newIdx[w++] = d;
    newIdx[w++] = c;
  }
  geo.setAttribute('position', new THREE.BufferAttribute(newPos, 3));
  geo.setAttribute('normal', new THREE.BufferAttribute(newNrm, 3));
  geo.setAttribute('uv', new THREE.BufferAttribute(newUv, 2));
  geo.setAttribute('color', new THREE.BufferAttribute(newCol, 3));
  geo.setIndex(new THREE.BufferAttribute(newIdx, 1));
}

function emptyBucket(withColor = false) {
  return { pos: [], uv: [], idx: [], nrm: [], col: withColor ? [] : null };
}

export class ChunkStreamer {
  constructor(scene, world, materials) {
    this.scene = scene;
    this.world = world;
    this.mat = materials;
    this.live = new Map();
    this.occluders = [];
    this.unitBox = new THREE.BoxGeometry(1, 1, 1);
    const card = new THREE.PlaneGeometry(1, 1);
    card.translate(0, 0.5, 0);
    const crossed = card.clone();
    crossed.rotateY(Math.PI / 2);
    this.treeGeo = mergeGeometries([card, crossed]);
    this.poleGeo = new THREE.CylinderGeometry(0.06, 0.08, 5.4, 6);
    this.poleGeo.translate(0, 2.7, 0);
    this.headGeo = new THREE.BoxGeometry(0.7, 0.1, 0.28);
    this.headGeo.translate(0.28, 5.35, 0);
    this.dummy = new THREE.Object3D();
    this.lodMat = {};
    for (const key of ['brick', 'stone', 'glass']) {
      this.lodMat[key] = materials[key].clone();
      this.lodMat[key].vertexColors = false;
    }
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

  roadY(road) {
    const { world } = this;
    if ((road.flags & 1) && road.deckY != null) return (x, z) => world.bridgeY(x, z, road);
    return (x, z) => world.terrainY(x, z) + 0.14;
  }

  build(cx, cz, mode) {
    const { world, mat } = this;
    const group = new THREE.Group();
    group.name = `chunk ${cx},${cz}`;
    group.userData.mode = mode;
    group.userData.own = [];
    const seg = mode === 'near' ? 32 : mode === 'mid' ? 16 : 8;
    const terrain = new THREE.Mesh(paintTerrain(world, cx, cz, seg), mat.terrain);
    terrain.receiveShadow = true;
    terrain.userData.ownGeo = true;
    group.add(terrain);
    group.userData.own.push(terrain);

    const chunk = world.chunks.get(`${cx},${cz}`);
    const roads = emptyBucket();
    const walks = emptyBucket();
    const yellowDash = emptyBucket();
    const yellowSolid = emptyBucket();
    const white = emptyBucket();
    const soffits = emptyBucket();
    const rails = { pos: [], idx: [], nrm: [] };
    const piers = { pos: [], idx: [], nrm: [] };
    const waters = { pos: [], idx: [] };
    if (chunk) {
      for (const road of chunk.roads) {
        if (mode === 'far' && road.cls > 2) continue;
        const yAt = this.roadY(road);
        const lifted = (road.flags & 1) && road.deckY != null;
        const pts = densify(road.pts, mode === 'near' ? 6 : mode === 'mid' ? 12 : 24);
        addRibbon(roads, pts, road.width, yAt, Math.max(road.width, 8));
        if (mode === 'near') {
          const count = pts.length / 2;
          const cap = (i) => addDisc(
            roads,
            pts[i * 2],
            yAt(pts[i * 2], pts[i * 2 + 1], i) + 0.01,
            pts[i * 2 + 1],
            Math.max(road.width * 0.62, 4.5),
          );
          cap(0);
          if (count > 1) cap(count - 1);
        }
        if (mode !== 'far' && road.cls <= 6) {
          const walkY = (x, z, i) => yAt(x, z, i) - 0.08;
          addRibbon(walks, pts, road.width + 2.6, walkY, 4.5);
        }
        if (mode === 'near' && road.cls <= 5 && road.width >= 5.6) {
          const markY = (x, z, i) => yAt(x, z, i) + 0.03;
          if (road.cls <= 2) {
            addRibbon(yellowSolid, pts, 0.12, markY, 40, 0.16);
            addRibbon(yellowSolid, pts, 0.12, markY, 40, -0.16);
          } else {
            addRibbon(yellowDash, pts, 0.14, markY, 8);
          }
          if (road.cls <= 4) {
            const edge = road.width * 0.5 - 0.32;
            addRibbon(white, pts, 0.1, markY, 20, edge);
            addRibbon(white, pts, 0.1, markY, 20, -edge);
          }
        }
        if (lifted && mode !== 'far') {
          const soffitY = (x, z, i) => yAt(x, z, i) - 0.65;
          addRibbon(soffits, pts, road.width + 2.4, soffitY, 8);
          addParapets(rails, pts, yAt, road.width * 0.5 + 1.15);
          if (mode === 'near') this.addPiers(piers, road, yAt);
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
    this.addBucket(group, yellowDash, mat.markDash, true);
    this.addBucket(group, yellowSolid, mat.markSolid, true);
    this.addBucket(group, white, mat.markWhite, true);
    this.addBucket(group, soffits, mat.barrier, true);
    if (rails.pos.length) {
      const mesh = new THREE.Mesh(geoFrom(rails.pos, rails.idx, null, null, rails.nrm), mat.barrier);
      mesh.userData.ownGeo = true;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);
      group.userData.own.push(mesh);
    }
    if (piers.pos.length) {
      const mesh = new THREE.Mesh(geoFrom(piers.pos, piers.idx, null, null, piers.nrm), mat.concrete);
      mesh.userData.ownGeo = true;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);
      group.userData.own.push(mesh);
    }
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

  addPiers(bucket, road, yAt) {
    const pts = road.pts;
    let travelled = 0;
    let next = 8;
    for (let i = 1; i < pts.length / 2; i++) {
      const ax = pts[(i - 1) * 2];
      const az = pts[(i - 1) * 2 + 1];
      const bx = pts[i * 2];
      const bz = pts[i * 2 + 1];
      const len = Math.hypot(bx - ax, bz - az);
      while (travelled + len >= next) {
        const t = (next - travelled) / (len || 1);
        const x = ax + (bx - ax) * t;
        const z = az + (bz - az) * t;
        next += 16;
        if (this.world.maskAt(x, z) !== 2) continue;
        const top = yAt(x, z, i);
        const bed = this.world.terrainY(x, z);
        addPier(bucket, x, bed, top - 0.15, z);
      }
      travelled += len;
    }
  }

  addBucket(group, bucket, material, own) {
    if (!bucket.pos || bucket.pos.length < 9) return;
    const mesh = new THREE.Mesh(geoFrom(bucket.pos, bucket.idx, bucket.uv, bucket.col, bucket.nrm && bucket.nrm.length ? bucket.nrm : null), material);
    mesh.userData.ownGeo = own;
    mesh.receiveShadow = true;
    group.add(mesh);
    group.userData.own.push(mesh);
  }

  addBuildings(group, chunk) {
    const walls = {
      brick: emptyBucket(true),
      stone: emptyBucket(true),
      glass: emptyBucket(true),
    };
    const roof = { pos: [], uv: [], idx: [], nrm: [] };
    const doors = emptyBucket();
    doors.count = 0;
    for (const building of chunk.buildings) extrude(building, this.world, walls, roof, doors);
    for (const key of ['brick', 'stone', 'glass']) {
      const wall = walls[key];
      if (!wall.pos.length) continue;
      const mesh = new THREE.Mesh(geoFrom(wall.pos, wall.idx, wall.uv, wall.col, wall.nrm), this.mat[key]);
      mesh.userData.ownGeo = true;
      mesh.userData.occluder = true;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);
      group.userData.own.push(mesh);
    }
    if (roof.pos.length) {
      const mesh = new THREE.Mesh(geoFrom(roof.pos, roof.idx, roof.uv, null, roof.nrm), this.mat.roof);
      mesh.userData.ownGeo = true;
      mesh.userData.occluder = true;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);
      group.userData.own.push(mesh);
    }
    if (doors.pos.length) {
      const mesh = new THREE.Mesh(geoFrom(doors.pos, doors.idx, doors.uv, null, doors.nrm), this.mat.door);
      mesh.userData.ownGeo = true;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);
      group.userData.own.push(mesh);
    }
  }

  addLod(group, chunk) {
    const groups = { brick: [], stone: [], glass: [] };
    for (const building of chunk.buildings) groups[facadeKey(building)].push(building);
    for (const key of ['brick', 'stone', 'glass']) {
      const list = groups[key];
      if (!list.length) continue;
      const mesh = new THREE.InstancedMesh(this.unitBox, this.lodMat[key], list.length);
      mesh.userData.occluder = true;
      mesh.castShadow = false;
      mesh.receiveShadow = true;
      for (let i = 0; i < list.length; i++) {
        const b = list[i];
        const grounds = [];
        for (let k = 0; k < b.pts.length; k += 2) grounds.push(this.world.terrainY(b.pts[k], b.pts[k + 1]));
        const { eave, min } = eaveHeight(grounds, b.height);
        const h = Math.max(2.7, eave - min);
        const w = Math.max(1.5, b.maxX - b.minX);
        const d = Math.max(1.5, b.maxZ - b.minZ);
        this.dummy.position.set((b.minX + b.maxX) / 2, min + h / 2, (b.minZ + b.maxZ) / 2);
        this.dummy.scale.set(w, h, d);
        this.dummy.rotation.set(0, 0, 0);
        this.dummy.updateMatrix();
        mesh.setMatrixAt(i, this.dummy.matrix);
      }
      mesh.instanceMatrix.needsUpdate = true;
      group.add(mesh);
      group.userData.own.push(mesh);
    }
  }

  addTrees(group, chunk) {
    const trees = chunk.trees.filter((t) => {
      if (this.world.maskAt(t.x, t.z) === 2) return false;
      if (this.world.onCarriage(t.x, t.z)) return false;
      for (const b of chunk.buildings) {
        if (t.x < b.minX - 0.4 || t.x > b.maxX + 0.4 || t.z < b.minZ - 0.4 || t.z > b.maxZ + 0.4) continue;
        if (pointInPoly(t.x, t.z, b.pts)) return false;
      }
      return true;
    }).slice(0, 90);
    if (!trees.length) return;
    const kinds = [
      [0, this.mat.trees.pine, 7.4, 16],
      [1, this.mat.trees.maple, 11, 13],
      [2, this.mat.trees.autumn, 10.5, 13],
    ];
    for (const [kind, material, width, height] of kinds) {
      const list = trees.filter((t) => (t.kind === 0 ? 0 : t.kind === 2 ? 2 : 1) === kind);
      if (!list.length) continue;
      const mesh = new THREE.InstancedMesh(this.treeGeo, material, list.length);
      mesh.castShadow = false;
      mesh.receiveShadow = true;
      list.forEach((tree, i) => {
        const y = this.world.terrainY(tree.x, tree.z);
        const s = 0.82 + Math.abs(Math.sin(tree.x * 0.17 + tree.z * 0.11)) * 0.36;
        this.dummy.position.set(tree.x, y, tree.z);
        this.dummy.scale.set(width * s, height * s, width * s);
        this.dummy.rotation.set(0, tree.x * 0.37 + tree.z * 0.21, 0);
        this.dummy.updateMatrix();
        mesh.setMatrixAt(i, this.dummy.matrix);
      });
      mesh.instanceMatrix.needsUpdate = true;
      mesh.userData.ownGeo = false;
      group.add(mesh);
      group.userData.own.push(mesh);
    }
  }

  addLights(group, chunk) {
    const lights = chunk.lights.filter((L) => {
      if (this.world.maskAt(L.x, L.z) === 2 && this.world.bridgeDeckAt(L.x, L.z) == null) return false;
      return true;
    }).slice(0, 80);
    if (!lights.length) return;
    const poles = new THREE.InstancedMesh(this.poleGeo, this.mat.lamp, lights.length);
    const heads = new THREE.InstancedMesh(this.headGeo, this.mat.lampHead, lights.length);
    poles.castShadow = false;
    heads.castShadow = false;
    lights.forEach((light, i) => {
      const y = this.world.surfaceAt(light.x, light.z);
      let yaw = 0;
      let best = 80 * 80;
      for (const road of chunk.roads) {
        const pts = road.pts;
        for (let k = 0; k < pts.length; k += 4) {
          const dx = pts[k] - light.x;
          const dz = pts[k + 1] - light.z;
          const d = dx * dx + dz * dz;
          if (d < best) {
            best = d;
            yaw = Math.atan2(-dz, dx);
          }
        }
      }
      this.dummy.position.set(light.x, y, light.z);
      this.dummy.scale.set(1, 1, 1);
      this.dummy.rotation.set(0, yaw, 0);
      this.dummy.updateMatrix();
      poles.setMatrixAt(i, this.dummy.matrix);
      heads.setMatrixAt(i, this.dummy.matrix);
    });
    poles.instanceMatrix.needsUpdate = true;
    heads.instanceMatrix.needsUpdate = true;
    group.add(poles, heads);
    group.userData.own.push(poles, heads);
  }

  drop(key) {
    const group = this.live.get(key);
    if (!group) return;
    this.scene.remove(group);
    group.traverse((obj) => {
      if (obj.isInstancedMesh) obj.dispose();
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
