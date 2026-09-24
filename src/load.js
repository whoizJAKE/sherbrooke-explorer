// World pack SHX1. Local frame: x east, z south (north is -z), y up, meters.
// Header is 76 bytes, then a float32 DEM, then a chunk index, then chunk blobs.

import { simplex2 } from './simplex.js';
import { chooseDeck, mixBridgeHeight } from './roadmath.mjs';

const HEADER = 76;
const CELL = 10;
const FLOOR_H = 3.15;

class Reader {
  constructor(buffer, offset = 0) {
    this.view = new DataView(buffer);
    this.o = offset;
  }
  u8() {
    const v = this.view.getUint8(this.o);
    this.o += 1;
    return v;
  }
  u16() {
    const v = this.view.getUint16(this.o, true);
    this.o += 2;
    return v;
  }
  i16() {
    const v = this.view.getInt16(this.o, true);
    this.o += 2;
    return v;
  }
  u32() {
    const v = this.view.getUint32(this.o, true);
    this.o += 4;
    return v;
  }
  f32() {
    const v = this.view.getFloat32(this.o, true);
    this.o += 4;
    return v;
  }
  f64() {
    const v = this.view.getFloat64(this.o, true);
    this.o += 8;
    return v;
  }
}

function distToSeg(px, pz, ax, az, bx, bz) {
  const abx = bx - ax;
  const abz = bz - az;
  const ab2 = abx * abx + abz * abz || 1;
  const t = Math.max(0, Math.min(1, ((px - ax) * abx + (pz - az) * abz) / ab2));
  const dx = px - (ax + abx * t);
  const dz = pz - (az + abz * t);
  return { d: Math.hypot(dx, dz), t, x: ax + abx * t, z: az + abz * t, dx: abx, dz: abz };
}

function pointInPoly(x, z, pts) {
  let inside = false;
  for (let i = 0, j = pts.length - 2; i < pts.length; i += 2) {
    const xi = pts[i];
    const zi = pts[i + 1];
    const xj = pts[j];
    const zj = pts[j + 1];
    const hit = zi > z !== zj > z && x < ((xj - xi) * (z - zi)) / (zj - zi || 1e-9) + xi;
    if (hit) inside = !inside;
    j = i;
  }
  return inside;
}

export function parseWorld(buffer, meta) {
  const root = new Reader(buffer);
  const magic = String.fromCharCode(root.u8(), root.u8(), root.u8(), root.u8());
  if (magic !== 'SHX1') throw new Error(`bad world pack ${magic}`);
  const version = root.u32();
  if (version !== 1) throw new Error(`world pack version ${version}`);
  const originLat = root.f64();
  const originLon = root.f64();
  const bounds = { minX: root.f32(), minZ: root.f32(), maxX: root.f32(), maxZ: root.f32() };
  const chunkSize = root.f32();
  const demW = root.u32();
  const demH = root.u32();
  const dem = {
    w: demW,
    h: demH,
    minX: root.f32(),
    minZ: root.f32(),
    maxX: root.f32(),
    maxZ: root.f32(),
    base: root.f32(),
  };
  const chunkCount = root.u32();
  if (root.o !== HEADER) throw new Error(`header ended at ${root.o}`);
  dem.stepX = (dem.maxX - dem.minX) / (dem.w - 1);
  dem.stepZ = (dem.maxZ - dem.minZ) / (dem.h - 1);
  dem.heights = new Float32Array(buffer, HEADER, demW * demH);

  const indexAt = HEADER + demW * demH * 4;
  const index = new Reader(buffer, indexAt);
  const entries = [];
  for (let i = 0; i < chunkCount; i++) {
    entries.push({
      cx: index.i16(),
      cz: index.i16(),
      offset: index.u32(),
      length: index.u32(),
    });
  }

  const chunks = new Map();
  const overviewRoads = [];
  const bridges = [];
  let decodedBuildings = 0;
  for (const entry of entries) {
    const chunk = decodeChunk(buffer, entry, chunkSize);
    chunks.set(`${entry.cx},${entry.cz}`, chunk);
    decodedBuildings += chunk.buildings.length;
    for (const road of chunk.roads) {
      if (road.cls <= 4) overviewRoads.push(road);
      if (road.flags & 1) bridges.push(road);
    }
  }

  const world = {
    meta,
    originLat,
    originLon,
    bounds,
    chunkSize,
    dem,
    chunks,
    overviewRoads,
    bridges,
    decodedBuildings,
    pois: meta.pois,
    spawn: meta.spawn,
    carSpawns: meta.carSpawns,
    counts: meta.counts,
  };
  buildWaterMask(world);
  buildRoadField(world);
  return world;
}

function decodeChunk(buffer, entry, chunkSize) {
  const r = new Reader(buffer, entry.offset);
  const end = entry.offset + entry.length;
  const ox = entry.cx * chunkSize;
  const oz = entry.cz * chunkSize;
  const toWorld = (cx, cz) => [ox + cx / 100, oz + cz / 100];
  const buildings = [];
  const bCount = r.u16();
  for (let i = 0; i < bCount; i++) {
    const type = r.u8();
    const floors = r.u8();
    const flags = r.u8();
    const n = r.u8();
    const pts = new Float32Array(n * 2);
    let minX = Infinity;
    let minZ = Infinity;
    let maxX = -Infinity;
    let maxZ = -Infinity;
    for (let k = 0; k < n; k++) {
      const [x, z] = toWorld(r.i16(), r.i16());
      pts[k * 2] = x;
      pts[k * 2 + 1] = z;
      minX = Math.min(minX, x);
      minZ = Math.min(minZ, z);
      maxX = Math.max(maxX, x);
      maxZ = Math.max(maxZ, z);
    }
    buildings.push({ type, floors, flags, pts, minX, minZ, maxX, maxZ, height: Math.max(1, floors) * FLOOR_H });
  }
  const roads = [];
  const rCount = r.u16();
  for (let i = 0; i < rCount; i++) {
    const cls = r.u8();
    const width = r.u8() / 10;
    const flags = r.u8();
    const n = r.u8();
    const pts = new Float32Array(n * 2);
    for (let k = 0; k < n; k++) {
      const [x, z] = toWorld(r.i16(), r.i16());
      pts[k * 2] = x;
      pts[k * 2 + 1] = z;
    }
    roads.push({ cls, width, flags, pts, deckY: null });
  }
  const waters = [];
  const wCount = r.u16();
  for (let i = 0; i < wCount; i++) {
    const kind = r.u8();
    const width = r.u8();
    const n = r.u16();
    const pts = new Float32Array(n * 2);
    for (let k = 0; k < n; k++) {
      const [x, z] = toWorld(r.i16(), r.i16());
      pts[k * 2] = x;
      pts[k * 2 + 1] = z;
    }
    waters.push({ kind, width, pts });
  }
  const trees = [];
  const tCount = r.u16();
  for (let i = 0; i < tCount; i++) {
    const [x, z] = toWorld(r.i16(), r.i16());
    trees.push({ x, z, kind: r.u8() });
  }
  const lights = [];
  const lCount = r.u16();
  for (let i = 0; i < lCount; i++) {
    const [x, z] = toWorld(r.i16(), r.i16());
    lights.push({ x, z });
  }
  if (r.o !== end) {
    throw new Error(`chunk ${entry.cx},${entry.cz} decoded ${r.o - entry.offset} of ${entry.length}`);
  }
  return { cx: entry.cx, cz: entry.cz, buildings, roads, waters, trees, lights };
}

function buildWaterMask(world) {
  const { dem } = world;
  const cols = Math.ceil((dem.maxX - dem.minX) / CELL) + 1;
  const rows = Math.ceil((dem.maxZ - dem.minZ) / CELL) + 1;
  const mask = new Uint8Array(cols * rows);
  const mark = (x, z, value) => {
    const c = Math.floor((x - dem.minX) / CELL);
    const r = Math.floor((z - dem.minZ) / CELL);
    if (c < 0 || r < 0 || c >= cols || r >= rows) return;
    const i = r * cols + c;
    if (mask[i] < value) mask[i] = value;
  };
  const markSpan = (x0, x1, z) => {
    if (x1 < x0) [x0, x1] = [x1, x0];
    for (let x = x0; x <= x1; x += CELL * 0.8) mark(x, z, 2);
  };
  for (const chunk of world.chunks.values()) {
    for (const water of chunk.waters) {
      if (water.kind === 0 && water.pts.length >= 6) fillPoly(water.pts, markSpan);
      else strokeRibbon(water.pts, Math.max(water.width || 8, 8), mark);
    }
  }
  // Banks are the ring of land cells touching water, two cells deep.
  const bank = mask.slice();
  for (let pass = 0; pass < 2; pass++) {
    const next = bank.slice();
    for (let r = 1; r < rows - 1; r++) {
      for (let c = 1; c < cols - 1; c++) {
        const i = r * cols + c;
        if (bank[i] === 2) continue;
        if (bank[i - 1] === 2 || bank[i + 1] === 2 || bank[i - cols] === 2 || bank[i + cols] === 2) next[i] = Math.max(next[i], 1);
      }
    }
    bank.set(next);
  }
  world.mask = bank;
  world.maskCols = cols;
  world.maskRows = rows;
}

function fillPoly(pts, markSpan) {
  let minZ = Infinity;
  let maxZ = -Infinity;
  for (let i = 1; i < pts.length; i += 2) {
    minZ = Math.min(minZ, pts[i]);
    maxZ = Math.max(maxZ, pts[i]);
  }
  for (let z = minZ; z <= maxZ; z += CELL) {
    const xs = [];
    for (let i = 0; i < pts.length; i += 2) {
      const ax = pts[i];
      const az = pts[i + 1];
      const j = (i + 2) % pts.length;
      const bx = pts[j];
      const bz = pts[j + 1];
      if (az === bz) continue;
      if ((z >= az && z < bz) || (z >= bz && z < az)) {
        const t = (z - az) / (bz - az);
        xs.push(ax + t * (bx - ax));
      }
    }
    xs.sort((a, b) => a - b);
    for (let k = 0; k + 1 < xs.length; k += 2) markSpan(xs[k], xs[k + 1], z);
  }
}

function strokeRibbon(pts, width, mark) {
  const rad = width * 0.5;
  for (let i = 0; i + 3 < pts.length; i += 2) {
    const ax = pts[i];
    const az = pts[i + 1];
    const bx = pts[i + 2];
    const bz = pts[i + 3];
    const len = Math.hypot(bx - ax, bz - az);
    const steps = Math.max(1, Math.ceil(len / 8));
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = ax + (bx - ax) * t;
      const z = az + (bz - az) * t;
      for (let dz = -rad; dz <= rad; dz += CELL) {
        for (let dx = -rad; dx <= rad; dx += CELL) {
          if (dx * dx + dz * dz <= rad * rad) mark(x + dx, z + dz, 2);
        }
      }
    }
  }
}

function buildRoadField(world) {
  const { dem } = world;
  const cell = 4;
  const cols = Math.ceil((dem.maxX - dem.minX) / cell) + 1;
  const rows = Math.ceil((dem.maxZ - dem.minZ) / cell) + 1;
  const field = new Uint8Array(cols * rows);
  const mark = (x, z, value) => {
    const c = Math.floor((x - dem.minX) / cell);
    const r = Math.floor((z - dem.minZ) / cell);
    if (c < 0 || r < 0 || c >= cols || r >= rows) return;
    const i = r * cols + c;
    if (field[i] < value) field[i] = value;
  };
  for (const chunk of world.chunks.values()) {
    for (const road of chunk.roads) {
      strokeRoad(road.pts, road.width * 0.5 + 1.2, (x, z) => mark(x, z, 2));
      strokeRoad(road.pts, road.width * 0.5 + 14, (x, z) => mark(x, z, 1));
    }
  }
  world.roadField = field;
  world.roadCols = cols;
  world.roadRows = rows;
  world.roadCell = cell;
}

function strokeRoad(pts, rad, mark) {
  const step = 4;
  for (let i = 0; i + 3 < pts.length; i += 2) {
    const ax = pts[i];
    const az = pts[i + 1];
    const bx = pts[i + 2];
    const bz = pts[i + 3];
    const len = Math.hypot(bx - ax, bz - az);
    const steps = Math.max(1, Math.ceil(len / step));
    const reach = Math.max(1, Math.ceil(rad / step));
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = ax + (bx - ax) * t;
      const z = az + (bz - az) * t;
      for (let dz = -reach; dz <= reach; dz++) {
        for (let dx = -reach; dx <= reach; dx++) {
          if ((dx * dx + dz * dz) * step * step <= rad * rad) mark(x + dx * step, z + dz * step);
        }
      }
    }
  }
}

function assignBridgeDecks(world) {
  const segs = world.bridges;
  const parent = segs.map((_, i) => i);
  const find = (i) => {
    while (parent[i] !== i) {
      parent[i] = parent[parent[i]];
      i = parent[i];
    }
    return i;
  };
  const join = (a, b) => {
    const pa = find(a);
    const pb = find(b);
    if (pa !== pb) parent[pa] = pb;
  };
  const cell = 24;
  const buckets = new Map();
  const add = (x, z, index) => {
    const k = `${Math.floor(x / cell)},${Math.floor(z / cell)}`;
    let list = buckets.get(k);
    if (!list) {
      list = [];
      buckets.set(k, list);
    }
    list.push(index);
  };
  segs.forEach((seg, i) => {
    add(seg.pts[0], seg.pts[1], i);
    add(seg.pts[seg.pts.length - 2], seg.pts[seg.pts.length - 1], i);
  });
  const seen = new Set();
  for (const [k, list] of buckets) {
    const [cx, cz] = k.split(',').map(Number);
    const near = [];
    for (let dz = -1; dz <= 1; dz++) {
      for (let dx = -1; dx <= 1; dx++) {
        const extra = buckets.get(`${cx + dx},${cz + dz}`);
        if (extra) near.push(...extra);
      }
    }
    for (let a = 0; a < list.length; a++) {
      for (let b = 0; b < near.length; b++) {
        const i = list[a];
        const j = near[b];
        if (i >= j) continue;
        const key = `${i}:${j}`;
        if (seen.has(key)) continue;
        seen.add(key);
        const pa = segs[i].pts;
        const pb = segs[j].pts;
        const ends = [
          [pa[0], pa[1], pb[0], pb[1]],
          [pa[0], pa[1], pb[pb.length - 2], pb[pb.length - 1]],
          [pa[pa.length - 2], pa[pa.length - 1], pb[0], pb[1]],
          [pa[pa.length - 2], pa[pa.length - 1], pb[pb.length - 2], pb[pb.length - 1]],
        ];
        if (ends.some(([ax, az, bx, bz]) => (ax - bx) ** 2 + (az - bz) ** 2 < 20 * 20)) join(i, j);
      }
    }
  }
  const groups = new Map();
  segs.forEach((seg, i) => {
    const id = find(i);
    let list = groups.get(id);
    if (!list) {
      list = [];
      groups.set(id, list);
    }
    list.push(seg);
  });
  for (const group of groups.values()) {
    const ends = [];
    for (const seg of group) {
      const n = seg.pts.length;
      ends.push({ x: seg.pts[0], z: seg.pts[1] });
      ends.push({ x: seg.pts[n - 2], z: seg.pts[n - 1] });
    }
    const abutments = [];
    for (const end of ends) {
      let friends = 0;
      for (const other of ends) {
        if (other === end) continue;
        if ((end.x - other.x) ** 2 + (end.z - other.z) ** 2 < 12 * 12) friends += 1;
      }
      if (friends === 0) abutments.push(end);
    }
    let bankTop = -Infinity;
    let waterClear = -Infinity;
    let abutmentTop = -Infinity;
    let anyWet = false;
    for (const seg of group) {
      for (let i = 0; i < seg.pts.length; i += 2) {
        const x = seg.pts[i];
        const z = seg.pts[i + 1];
        const elev = world.sampleDem(x, z);
        if (world.maskAt(x, z) === 2) {
          anyWet = true;
          waterClear = Math.max(waterClear, elev - 0.42 + 3.6);
        } else {
          bankTop = Math.max(bankTop, elev);
        }
      }
    }
    for (const end of abutments) abutmentTop = Math.max(abutmentTop, world.sampleDem(end.x, end.z));
    let span = 0;
    for (let a = 0; a < abutments.length; a++) {
      for (let b = a + 1; b < abutments.length; b++) {
        span = Math.max(span, Math.hypot(abutments[a].x - abutments[b].x, abutments[a].z - abutments[b].z));
      }
    }
    if (span === 0) {
      for (const seg of group) {
        const n = seg.pts.length;
        span = Math.max(span, Math.hypot(seg.pts[0] - seg.pts[n - 2], seg.pts[1] - seg.pts[n - 1]));
      }
    }
    const deck = chooseDeck({
      bankTop,
      waterClear,
      overpass: !anyWet,
      abutmentTop: Number.isFinite(abutmentTop) ? abutmentTop : bankTop,
    });
    const approach = Math.min(52, Math.max(14, span * 0.38 || 28));
    for (const seg of group) {
      seg.deckY = deck;
      seg.abutments = abutments;
      seg.approach = approach;
    }
  }
}

export async function loadWorld(onProgress) {
  const base = import.meta.env.BASE_URL;
  onProgress?.(0.08, 'loading');
  const [metaRes, packRes] = await Promise.all([
    fetch(`${base}world-meta.json`),
    fetch(`${base}world.pack`),
  ]);
  if (!metaRes.ok || !packRes.ok) throw new Error('missing world data');
  onProgress?.(0.4, 'reading');
  const meta = await metaRes.json();
  const buffer = await packRes.arrayBuffer();
  onProgress?.(0.7, 'shaping');
  const world = parseWorld(buffer, meta);
  attachHeight(world);
  assignBridgeDecks(world);
  onProgress?.(0.9, 'placing');
  return world;
}

function attachHeight(world) {
  world.sampleDem = (x, z) => {
    const { dem } = world;
    const fx = (x - dem.minX) / dem.stepX;
    const fz = (z - dem.minZ) / dem.stepZ;
    const x0 = Math.max(0, Math.min(dem.w - 1, Math.floor(fx)));
    const z0 = Math.max(0, Math.min(dem.h - 1, Math.floor(fz)));
    const x1 = Math.min(dem.w - 1, x0 + 1);
    const z1 = Math.min(dem.h - 1, z0 + 1);
    const tx = Math.max(0, Math.min(1, fx - x0));
    const tz = Math.max(0, Math.min(1, fz - z0));
    const h = dem.heights;
    const a = h[z0 * dem.w + x0];
    const b = h[z0 * dem.w + x1];
    const c = h[z1 * dem.w + x0];
    const d = h[z1 * dem.w + x1];
    return a * (1 - tx) * (1 - tz) + b * tx * (1 - tz) + c * (1 - tx) * tz + d * tx * tz;
  };
  world.maskAt = (x, z) => {
    const c = Math.floor((x - world.dem.minX) / CELL);
    const r = Math.floor((z - world.dem.minZ) / CELL);
    if (c < 0 || r < 0 || c >= world.maskCols || r >= world.maskRows) return 0;
    return world.mask[r * world.maskCols + c];
  };
  world.detail = (x, z) => simplex2(x * 0.011, z * 0.011) * 0.9 + simplex2(x * 0.045, z * 0.045) * 0.28;
  world.roadValue = (x, z) => {
    if (!world.roadField) return 0;
    const c = Math.floor((x - world.dem.minX) / world.roadCell);
    const r = Math.floor((z - world.dem.minZ) / world.roadCell);
    if (c < 0 || r < 0 || c >= world.roadCols || r >= world.roadRows) return 0;
    return world.roadField[r * world.roadCols + c];
  };
  world.roadEase = (x, z) => {
    const v = world.roadValue(x, z);
    if (v >= 1) return 0;
    return 1;
  };
  world.onCarriage = (x, z) => world.roadValue(x, z) >= 2;
  world.terrainY = (x, z) => {
    const elev = world.sampleDem(x, z);
    const mask = world.maskAt(x, z);
    const ease = world.roadEase(x, z);
    if (mask === 2) return elev - 2.55;
    if (mask === 1) return elev - 0.55 + world.detail(x, z) * 0.15 * ease;
    return elev + world.detail(x, z) * ease;
  };
  world.waterY = (x, z) => world.sampleDem(x, z) - 0.42;
  world.bridgeY = (x, z, seg) => {
    let dist = 1e9;
    const abutments = seg.abutments || [];
    for (const end of abutments) dist = Math.min(dist, Math.hypot(x - end.x, z - end.z));
    if (!abutments.length) dist = seg.approach || 40;
    return mixBridgeHeight({
      ground: world.terrainY(x, z) + 0.14,
      deck: seg.deckY,
      distToAbutment: dist,
      approach: seg.approach || 36,
      waterY: world.waterY(x, z),
      wet: world.maskAt(x, z) === 2,
    });
  };
  world.bridgeDeckAt = (x, z) => {
    let best = null;
    let bestD = 8;
    for (const seg of world.bridges) {
      if (seg.deckY == null) continue;
      for (let i = 0; i + 3 < seg.pts.length; i += 2) {
        const hit = distToSeg(x, z, seg.pts[i], seg.pts[i + 1], seg.pts[i + 2], seg.pts[i + 3]);
        const limit = seg.width * 0.5 + 1.6;
        if (hit.d < limit && hit.d < bestD) {
          bestD = hit.d;
          best = world.bridgeY(hit.x, hit.z, seg);
        }
      }
    }
    return best;
  };
  world.surfaceAt = (x, z) => {
    const deck = world.bridgeDeckAt(x, z);
    if (deck != null) return deck;
    if (world.maskAt(x, z) === 2) return world.waterY(x, z);
    const y = world.terrainY(x, z);
    if (world.onCarriage(x, z)) return y + 0.14;
    return y;
  };
  world.chunkAt = (x, z) => world.chunks.get(`${Math.floor(x / world.chunkSize)},${Math.floor(z / world.chunkSize)}`) || null;
  world.buildingsNear = (x, z, radius) => {
    const cs = world.chunkSize;
    const x0 = Math.floor((x - radius) / cs);
    const x1 = Math.floor((x + radius) / cs);
    const z0 = Math.floor((z - radius) / cs);
    const z1 = Math.floor((z + radius) / cs);
    const found = [];
    for (let cz = z0; cz <= z1; cz++) {
      for (let cx = x0; cx <= x1; cx++) {
        const chunk = world.chunks.get(`${cx},${cz}`);
        if (!chunk) continue;
        for (const b of chunk.buildings) {
          if (b.maxX < x - radius || b.minX > x + radius || b.maxZ < z - radius || b.minZ > z + radius) continue;
          const cxb = (b.minX + b.maxX) * 0.5;
          const czb = (b.minZ + b.maxZ) * 0.5;
          const dx = cxb - x;
          const dz = czb - z;
          found.push({ b, d: dx * dx + dz * dz });
        }
      }
    }
    found.sort((a, c) => a.d - c.d);
    return found.slice(0, 90).map((entry) => entry.b);
  };
  world.nearestRoad = (x, z, maxDist = 50) => {
    let best = null;
    let bestD = maxDist;
    for (const road of world.overviewRoads) {
      const pts = road.pts;
      for (let i = 0; i + 3 < pts.length; i += 2) {
        const hit = distToSeg(x, z, pts[i], pts[i + 1], pts[i + 2], pts[i + 3]);
        if (hit.d < bestD) {
          bestD = hit.d;
          const len = Math.hypot(hit.dx, hit.dz) || 1;
          best = { x: hit.x, z: hit.z, dirX: hit.dx / len, dirZ: hit.dz / len, width: road.width };
        }
      }
    }
    return best;
  };
  world.baseY = (pts) => {
    let land = Infinity;
    let any = Infinity;
    for (let i = 0; i < pts.length; i += 2) {
      const y = world.terrainY(pts[i], pts[i + 1]);
      any = Math.min(any, y);
      if (world.maskAt(pts[i], pts[i + 1]) < 2) land = Math.min(land, y);
    }
    return (Number.isFinite(land) ? land : any) - 0.12;
  };
  world.insideBounds = (x, z, pad = 25) =>
    x > world.dem.minX + pad && x < world.dem.maxX - pad && z > world.dem.minZ + pad && z < world.dem.maxZ - pad;
}

export { FLOOR_H, pointInPoly, distToSeg };
