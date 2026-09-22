// Fetch OpenStreetMap data for Sherbrooke and pack it into the runtime world.
// Local frame: x = east meters, z = south meters (north is -z), y = up.
// Origin is the bbox center. One game unit is one meter.

import { mkdir, readFile, writeFile, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { PNG } from 'pngjs';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const RAW = path.join(ROOT, 'data', 'raw');
const PUBLIC = path.join(ROOT, 'public');

const BBOX = { s: 45.36, n: 45.44, w: -71.95, e: -71.82 };
const ORIGIN = { lat: (BBOX.s + BBOX.n) / 2, lon: (BBOX.w + BBOX.e) / 2 };
const M_LAT = 111320;
const M_LON = 111320 * Math.cos((ORIGIN.lat * Math.PI) / 180);
const CHUNK = 250;

const ENDPOINTS = [
  'https://overpass.openstreetmap.fr/api/interpreter',
  'https://lz4.overpass-api.de/api/interpreter',
  'https://overpass.kumi.systems/api/interpreter',
];

const ROAD = {
  motorway: { cls: 0, w: 14 },
  motorway_link: { cls: 0, w: 8 },
  trunk: { cls: 1, w: 12 },
  trunk_link: { cls: 1, w: 8 },
  primary: { cls: 2, w: 11 },
  primary_link: { cls: 2, w: 7 },
  secondary: { cls: 3, w: 9 },
  secondary_link: { cls: 3, w: 6 },
  tertiary: { cls: 4, w: 7.5 },
  tertiary_link: { cls: 4, w: 5.5 },
  residential: { cls: 5, w: 6.2 },
  unclassified: { cls: 5, w: 6 },
  living_street: { cls: 6, w: 5.2 },
  pedestrian: { cls: 6, w: 5 },
  service: { cls: 7, w: 3.6 },
};

const TYPE_ID = {
  residential: 0,
  commercial: 1,
  office: 2,
  civic: 3,
  industrial: 4,
  campus: 5,
};

function log(msg) {
  const t = new Date().toISOString().slice(11, 19);
  console.log(`[${t}] ${msg}`);
}

function toLocal(lat, lon) {
  return {
    x: (lon - ORIGIN.lon) * M_LON,
    z: (ORIGIN.lat - lat) * M_LAT,
  };
}

function toLatLon(x, z) {
  return {
    lat: ORIGIN.lat - z / M_LAT,
    lon: ORIGIN.lon + x / M_LON,
  };
}

function clamp(v, a, b) {
  return Math.max(a, Math.min(b, v));
}

function hashStr(s) {
  let h = 2166136261;
  const str = String(s);
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function dist2(a, b) {
  const dx = a.x - b.x;
  const dz = a.z - b.z;
  return dx * dx + dz * dz;
}

function ringArea(poly) {
  let a = 0;
  for (let i = 0; i < poly.length; i++) {
    const p = poly[i];
    const q = poly[(i + 1) % poly.length];
    a += p.x * q.z - q.x * p.z;
  }
  return a / 2;
}

function centroid(poly) {
  let x = 0;
  let z = 0;
  for (const p of poly) {
    x += p.x;
    z += p.z;
  }
  const n = poly.length || 1;
  return { x: x / n, z: z / n };
}

function lengthOf(poly) {
  let L = 0;
  for (let i = 1; i < poly.length; i++) L += Math.hypot(poly[i].x - poly[i - 1].x, poly[i].z - poly[i - 1].z);
  return L;
}

function openRing(pts) {
  const out = [];
  for (const p of pts) {
    if (!out.length || dist2(out[out.length - 1], p) > 0.04) out.push({ x: p.x, z: p.z });
  }
  if (out.length > 2 && dist2(out[0], out[out.length - 1]) < 0.25) out.pop();
  return out;
}

function simplify(points, tol, closed) {
  if (points.length < (closed ? 4 : 3)) return points.slice();
  const sq = tol * tol;
  const keep = new Uint8Array(points.length);
  keep[0] = 1;
  keep[points.length - 1] = 1;
  const stack = [[0, points.length - 1]];
  while (stack.length) {
    const [a, b] = stack.pop();
    let maxD = 0;
    let idx = -1;
    const ax = points[a].x;
    const az = points[a].z;
    const bx = points[b].x;
    const bz = points[b].z;
    const abx = bx - ax;
    const abz = bz - az;
    const ab2 = abx * abx + abz * abz || 1;
    for (let i = a + 1; i < b; i++) {
      const px = points[i].x;
      const pz = points[i].z;
      const t = clamp(((px - ax) * abx + (pz - az) * abz) / ab2, 0, 1);
      const dx = px - (ax + abx * t);
      const dz = pz - (az + abz * t);
      const d = dx * dx + dz * dz;
      if (d > maxD) {
        maxD = d;
        idx = i;
      }
    }
    if (idx !== -1 && maxD > sq) {
      keep[idx] = 1;
      stack.push([a, idx], [idx, b]);
    }
  }
  const out = [];
  for (let i = 0; i < points.length; i++) if (keep[i]) out.push(points[i]);
  return out;
}

function wayLatLons(el) {
  if (Array.isArray(el.geometry)) {
    return el.geometry.map((p) => ({ lat: p.lat, lon: p.lon }));
  }
  return [];
}

function latLonsToLocal(ll) {
  // Drop vertices far outside the city so a river relation that continues
  // across Québec cannot bloat the mesh. Order is preserved.
  const out = [];
  for (const p of ll) {
    if (!inBbox(p.lat, p.lon, 0.012)) continue;
    out.push(toLocal(p.lat, p.lon));
  }
  return out;
}

async function overpass(query) {
  let last = 'no endpoint';
  for (const url of ENDPOINTS) {
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        const res = await fetch(url, {
          method: 'POST',
          headers: {
            Accept: 'application/json,*/*',
            'User-Agent': 'SherbrookeExplorer/1.0 (https://github.com/whoizJAKE/sherbrooke-explorer)',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          },
          body: 'data=' + encodeURIComponent(query),
        });
        const text = await res.text();
        if (!res.ok || text.trim().startsWith('<') || text.trim().startsWith('<!')) {
          last = `${url} HTTP ${res.status} ${text.slice(0, 160).replace(/\s+/g, ' ')}`;
          const wait = text.includes('too busy') || res.status === 429 || res.status === 504 ? 4000 : 1200;
          await sleep(wait * (attempt + 1));
          continue;
        }
        const json = JSON.parse(text);
        if (json.remark && /error|timed out|timeout/i.test(json.remark)) {
          last = `${url} ${json.remark}`;
          await sleep(1500 * (attempt + 1));
          continue;
        }
        return json.elements || [];
      } catch (err) {
        last = `${url} ${err.message}`;
        await sleep(1000 * (attempt + 1));
      }
    }
  }
  throw new Error(last);
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function fetchLayer(name, selectors) {
  const cachePath = path.join(RAW, `${name}.json`);
  if (existsSync(cachePath)) {
    const cached = JSON.parse(await readFile(cachePath, 'utf8'));
    log(`${name}: cached ${cached.length} elements`);
    return cached;
  }
  log(`${name}: querying Overpass`);
  const elements = await fetchSplit(name, selectors, BBOX, 0);
  const seen = new Set();
  const unique = [];
  for (const el of elements) {
    const key = `${el.type}/${el.id}`;
    if (seen.has(key)) continue;
    seen.add(key);
    unique.push(el);
  }
  await writeFile(cachePath, JSON.stringify(unique));
  log(`${name}: ${unique.length} elements`);
  return unique;
}

async function fetchSplit(name, selectors, bbox, depth) {
  const body = selectors.map((s) => `${s}(${bbox.s},${bbox.w},${bbox.n},${bbox.e});`).join('');
  const q = `[out:json][timeout:100];(${body});out geom;`;
  try {
    const els = await overpass(q);
    log(`  ${name} cell d${depth} ${bbox.s.toFixed(3)},${bbox.w.toFixed(3)} → ${els.length}`);
    return els;
  } catch (err) {
    if (depth >= 3) {
      log(`  ${name} giving up on cell after split: ${err.message}`);
      return [];
    }
    log(`  ${name} split d${depth}: ${err.message.slice(0, 140)}`);
    const midLat = (bbox.s + bbox.n) / 2;
    const midLon = (bbox.w + bbox.e) / 2;
    const cells = [
      { s: bbox.s, n: midLat, w: bbox.w, e: midLon },
      { s: bbox.s, n: midLat, w: midLon, e: bbox.e },
      { s: midLat, n: bbox.n, w: bbox.w, e: midLon },
      { s: midLat, n: bbox.n, w: midLon, e: bbox.e },
    ];
    const out = [];
    for (const cell of cells) {
      const part = await fetchSplit(name, selector, cell, depth + 1);
      out.push(...part);
      await sleep(250);
    }
    return out;
  }
}

function inBbox(lat, lon, pad = 0.004) {
  return lat >= BBOX.s - pad && lat <= BBOX.n + pad && lon >= BBOX.w - pad && lon <= BBOX.e + pad;
}

function inDowntown(lat, lon) {
  return lat >= 45.3965 && lat <= 45.4085 && lon >= -71.91 && lon <= -71.882;
}

function buildingType(tags) {
  const blob = `${tags.building || ''} ${tags.amenity || ''} ${tags.tourism || ''} ${tags.shop || ''} ${tags.office || ''} ${tags.landuse || ''}`;
  if (/university|college|school/.test(blob)) return 'campus';
  if (/cathedral|church|chapel|civic|public|hospital|train_station|place_of_worship|townhall|theatre|theater|library|museum/.test(blob)) return 'civic';
  if (/commercial|retail|supermarket|mall|marketplace|shop|restaurant|cafe|bank/.test(blob)) return 'commercial';
  if (/office|hotel|apartments/.test(blob) && /office|hotel/.test(blob)) return 'office';
  if (/industrial|warehouse|factory|garage|hangar/.test(blob)) return 'industrial';
  if (tags.building === 'commercial' || tags.shop) return 'commercial';
  if (tags.building === 'office' || tags.office) return 'office';
  return 'residential';
}

function floorsFor(tags, area, lat, lon) {
  const levelTag = parseFloat(tags['building:levels'] || '');
  const heightTag = parseFloat(tags.height || tags['building:height'] || '');
  let levels = 0;
  if (Number.isFinite(levelTag) && levelTag > 0) levels = Math.round(levelTag);
  else if (Number.isFinite(heightTag) && heightTag > 2) levels = Math.round(heightTag / 3.2);
  if (levels > 0) return { floors: clamp(levels, 1, 40), highrise: levels >= 12 };
  const type = buildingType(tags);
  const name = `${tags.name || ''} ${tags.official_name || ''}`;
  const namedTower = /tour|place |hôtel|hotel|complexe|belvedere|belvédère/i.test(name);
  const h = hashStr(`${tags.name || ''}|${lat.toFixed(5)}|${lon.toFixed(5)}|${Math.round(area)}`);
  if (inDowntown(lat, lon) && (namedTower || (area > 900 && (type === 'office' || type === 'commercial' || type === 'civic')))) {
    return { floors: 15 + (h % 11), highrise: true };
  }
  return { floors: 2 + (h % 7), highrise: false };
}

function relationOuters(el) {
  const rings = [];
  for (const m of el.members || []) {
    if (!m.geometry || !m.geometry.length) continue;
    if (m.role && m.role !== 'outer' && m.role !== '') continue;
    const local = openRing(latLonsToLocal(m.geometry));
    if (local.length >= 3) rings.push(local);
  }
  return rings;
}

function parseBuildings(elements) {
  const buildings = [];
  for (const el of elements) {
    const tags = el.tags || {};
    if (tags['building:part']) continue;
    if (tags.building === 'no') continue;
    const rings = el.type === 'relation' ? relationOuters(el) : [openRing(latLonsToLocal(wayLatLons(el)))];
    for (const ring0 of rings) {
      if (ring0.length < 3) continue;
      let ring = simplify(ring0, 0.85, true);
      if (ring.length > 48) ring = simplify(ring, 2.2, true);
      if (ring.length > 64) ring = ring.slice(0, 64);
      if (ring.length < 3) continue;
      const area = Math.abs(ringArea(ring));
      if (area < 22) continue;
      const c = centroid(ring);
      const ll = toLatLon(c.x, c.z);
      if (!inBbox(ll.lat, ll.lon, 0.002)) continue;
      const type = buildingType(tags);
      const fl = floorsFor(tags, area, ll.lat, ll.lon);
      buildings.push({
        id: el.id,
        poly: ring,
        area,
        type: TYPE_ID[type],
        floors: fl.floors,
        highrise: fl.highrise,
        name: tags.name || '',
      });
    }
  }
  return buildings;
}

function parseRoads(elements) {
  const roads = [];
  for (const el of elements) {
    const tags = el.tags || {};
    const spec = ROAD[tags.highway];
    if (!spec) continue;
    if (tags.service === 'driveway' || tags.service === 'parking_aisle' && spec.cls === 7) {
      if (tags.service === 'driveway') continue;
    }
    if (tags.tunnel === 'yes' || tags.tunnel === 'building_passage') continue;
    let pts = openRing(latLonsToLocal(wayLatLons(el)));
    // openRing strips a closed duplicate; roads are open. Restore if it was a loop.
    if (pts.length < 2) continue;
    pts = simplify(pts, spec.cls <= 2 ? 1.2 : 2.0, false);
    if (pts.length < 2) continue;
    const mid = pts[Math.floor(pts.length / 2)];
    const ll = toLatLon(mid.x, mid.z);
    if (!inBbox(ll.lat, ll.lon, 0.01) && !pts.some((p) => {
      const g = toLatLon(p.x, p.z);
      return inBbox(g.lat, g.lon, 0);
    })) continue;
    const lanes = parseFloat(tags.lanes || '');
    let width = spec.w;
    if (Number.isFinite(lanes) && lanes >= 2 && lanes <= 8) width = Math.max(width, lanes * 3.3);
    roads.push({
      id: el.id,
      pts,
      cls: spec.cls,
      width,
      bridge: tags.bridge === 'yes' || tags.bridge === 'viaduct' || tags.bridge === 'aqueduct',
      name: tags.name || '',
      highway: tags.highway,
    });
  }
  return roads;
}

function riverWidth(tags) {
  const name = `${tags.name || ''} ${tags['name:en'] || ''} ${tags['name:fr'] || ''}`.toLowerCase();
  if (/saint-fran|st-fran|st\. fran|rivière saint/.test(name)) return 130;
  if (name.includes('magog')) return 58;
  if (tags.waterway === 'stream') return 9;
  if (tags.waterway === 'canal') return 16;
  return tags.waterway === 'river' ? 46 : 0;
}

function parseWater(wayEls, relEls) {
  const polygons = [];
  const ribbons = [];
  const takePoly = (id, ring, name) => {
    if (ring.length < 3) return;
    let poly = simplify(ring, 2.5, true);
    if (poly.length > 180) poly = simplify(poly, 6, true);
    if (poly.length < 3) return;
    if (Math.abs(ringArea(poly)) < 80) return;
    polygons.push({ id, poly, name });
  };
  for (const el of wayEls) {
    const tags = el.tags || {};
    const pts = openRing(latLonsToLocal(wayLatLons(el)));
    if (pts.length < 2) continue;
    const isPoly = tags.natural === 'water' || tags.water || tags.waterway === 'riverbank';
    if (isPoly && pts.length >= 3 && dist2(pts[0], pts[pts.length - 1]) < 40) {
      takePoly(el.id, pts, tags.name || '');
      continue;
    }
    const width = riverWidth(tags);
    if (!width) continue;
    let line = simplify(pts, 3, false);
    if (line.length < 2) continue;
    ribbons.push({ id: el.id, pts: line, width, name: tags.name || '', waterway: tags.waterway || '' });
  }
  for (const el of relEls) {
    const tags = el.tags || {};
    for (const ring of relationOuters(el)) takePoly(el.id, ring, tags.name || '');
  }
  return { polygons, ribbons };
}

function parseParks(elements) {
  const parks = [];
  for (const el of elements) {
    const tags = el.tags || {};
    const rings = el.type === 'relation' ? relationOuters(el) : [openRing(latLonsToLocal(wayLatLons(el)))];
    let kind = 1;
    if (tags.landuse === 'forest' || tags.natural === 'wood') kind = 2;
    else if (tags.landuse === 'grass' || tags.landuse === 'meadow' || tags.leisure === 'garden') kind = 0;
    for (const ring0 of rings) {
      if (ring0.length < 3) continue;
      const poly = simplify(ring0, 3, true);
      if (poly.length < 3) continue;
      if (Math.abs(ringArea(poly)) < 400) continue;
      parks.push({ poly, kind, name: tags.name || '' });
    }
  }
  return parks;
}

function pointInPoly(x, z, poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const xi = poly[i].x;
    const zi = poly[i].z;
    const xj = poly[j].x;
    const zj = poly[j].z;
    const intersect = zi > z !== zj > z && x < ((xj - xi) * (z - zi)) / (zj - zi + 1e-12) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

function boundsOf(points, pad = 0) {
  let minX = Infinity;
  let minZ = Infinity;
  let maxX = -Infinity;
  let maxZ = -Infinity;
  for (const p of points) {
    minX = Math.min(minX, p.x);
    minZ = Math.min(minZ, p.z);
    maxX = Math.max(maxX, p.x);
    maxZ = Math.max(maxZ, p.z);
  }
  return { minX: minX - pad, minZ: minZ - pad, maxX: maxX + pad, maxZ: maxZ + pad };
}

function clipPoly(poly, rect) {
  const edges = [
    { inside: (p) => p.x >= rect.minX, hit: (a, b) => hitX(a, b, rect.minX) },
    { inside: (p) => p.x <= rect.maxX, hit: (a, b) => hitX(a, b, rect.maxX) },
    { inside: (p) => p.z >= rect.minZ, hit: (a, b) => hitZ(a, b, rect.minZ) },
    { inside: (p) => p.z <= rect.maxZ, hit: (a, b) => hitZ(a, b, rect.maxZ) },
  ];
  let out = poly;
  for (const edge of edges) {
    if (out.length < 3) return [];
    const next = [];
    for (let i = 0; i < out.length; i++) {
      const a = out[i];
      const b = out[(i + 1) % out.length];
      const ain = edge.inside(a);
      const bin = edge.inside(b);
      if (ain && bin) next.push(b);
      else if (ain && !bin) next.push(edge.hit(a, b));
      else if (!ain && bin) {
        next.push(edge.hit(a, b));
        next.push(b);
      }
    }
    out = next;
  }
  return openRing(out);
}

function hitX(a, b, x) {
  const t = (x - a.x) / (b.x - a.x || 1e-9);
  return { x, z: a.z + (b.z - a.z) * t };
}
function hitZ(a, b, z) {
  const t = (z - a.z) / (b.z - a.z || 1e-9);
  return { x: a.x + (b.x - a.x) * t, z };
}

const INSIDE = 0;
const LEFT = 1;
const RIGHT = 2;
const BOTTOM = 4;
const TOP = 8;

function codeOf(p, rect) {
  let c = INSIDE;
  if (p.x < rect.minX) c |= LEFT;
  else if (p.x > rect.maxX) c |= RIGHT;
  if (p.z < rect.minZ) c |= BOTTOM;
  else if (p.z > rect.maxZ) c |= TOP;
  return c;
}

function clipSegment(a0, b0, rect) {
  let a = { ...a0 };
  let b = { ...b0 };
  let ca = codeOf(a, rect);
  let cb = codeOf(b, rect);
  for (let i = 0; i < 12; i++) {
    if (!(ca | cb)) return [a, b];
    if (ca & cb) return null;
    const c = ca || cb;
    let x = 0;
    let z = 0;
    if (c & TOP) {
      x = a.x + ((b.x - a.x) * (rect.maxZ - a.z)) / (b.z - a.z || 1e-9);
      z = rect.maxZ;
    } else if (c & BOTTOM) {
      x = a.x + ((b.x - a.x) * (rect.minZ - a.z)) / (b.z - a.z || 1e-9);
      z = rect.minZ;
    } else if (c & RIGHT) {
      z = a.z + ((b.z - a.z) * (rect.maxX - a.x)) / (b.x - a.x || 1e-9);
      x = rect.maxX;
    } else {
      z = a.z + ((b.z - a.z) * (rect.minX - a.x)) / (b.x - a.x || 1e-9);
      x = rect.minX;
    }
    if (c === ca) {
      a = { x, z };
      ca = codeOf(a, rect);
    } else {
      b = { x, z };
      cb = codeOf(b, rect);
    }
  }
  return null;
}

function clipPolyline(pts, rect) {
  const parts = [];
  let cur = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const seg = clipSegment(pts[i], pts[i + 1], rect);
    if (!seg) {
      if (cur.length >= 2) parts.push(cur);
      cur = [];
      continue;
    }
    if (!cur.length) cur.push(seg[0]);
    else if (dist2(cur[cur.length - 1], seg[0]) > 0.05) {
      if (cur.length >= 2) parts.push(cur);
      cur = [seg[0]];
    }
    cur.push(seg[1]);
  }
  if (cur.length >= 2) parts.push(cur);
  return parts;
}

function chunkRange(minX, minZ, maxX, maxZ) {
  const a = Math.floor(minX / CHUNK);
  const b = Math.floor(maxX / CHUNK);
  const c = Math.floor(minZ / CHUNK);
  const d = Math.floor(maxZ / CHUNK);
  const out = [];
  for (let cx = a; cx <= b; cx++) for (let cz = c; cz <= d; cz++) out.push([cx, cz]);
  return out;
}

function chunkRect(cx, cz, pad = 0) {
  return {
    minX: cx * CHUNK - pad,
    minZ: cz * CHUNK - pad,
    maxX: (cx + 1) * CHUNK + pad,
    maxZ: (cz + 1) * CHUNK + pad,
  };
}

class ChunkBag {
  constructor() {
    this.map = new Map();
  }
  get(cx, cz) {
    const k = `${cx},${cz}`;
    let c = this.map.get(k);
    if (!c) {
      c = { cx, cz, buildings: [], roads: [], waters: [], trees: [], lights: [] };
      this.map.set(k, c);
    }
    return c;
  }
}

function relCm(x, z, cx, cz) {
  const rx = clamp(Math.round((x - cx * CHUNK) * 100), -32768, 32767);
  const rz = clamp(Math.round((z - cz * CHUNK) * 100), -32768, 32767);
  return [rx, rz];
}

function nearestOnPolyline(pts, target) {
  let best = null;
  let bestD = Infinity;
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i];
    const b = pts[i + 1];
    const abx = b.x - a.x;
    const abz = b.z - a.z;
    const ab2 = abx * abx + abz * abz || 1;
    const t = clamp(((target.x - a.x) * abx + (target.z - a.z) * abz) / ab2, 0, 1);
    const p = { x: a.x + abx * t, z: a.z + abz * t };
    const d = dist2(p, target);
    if (d < bestD) {
      bestD = d;
      best = p;
    }
  }
  return best ? { ...best, d: Math.sqrt(bestD) } : null;
}

function namedWaterPoints(water, re) {
  const pts = [];
  for (const ribbon of water.ribbons) if (re.test(ribbon.name || '')) pts.push(...ribbon.pts);
  for (const poly of water.polygons) if (re.test(poly.name || '')) pts.push(...poly.poly);
  return pts;
}

function closestApproach(aPts, bPts) {
  let best = null;
  let bestD = Infinity;
  const stepA = Math.max(1, Math.floor(aPts.length / 80));
  const stepB = Math.max(1, Math.floor(bPts.length / 80));
  for (let i = 0; i < aPts.length; i += stepA) {
    for (let j = 0; j < bPts.length; j += stepB) {
      const d = dist2(aPts[i], bPts[j]);
      if (d < bestD) {
        bestD = d;
        best = {
          x: (aPts[i].x + bPts[j].x) / 2,
          z: (aPts[i].z + bPts[j].z) / 2,
          d: Math.sqrt(d),
        };
      }
    }
  }
  return best;
}

function pickPois(roads, water) {
  const targets = [
    {
      id: 'kings-hill',
      name: "King's Hill / Cenotaph",
      blurb: "Monument aux Braves on the rise of King Street.",
      fallback: { lat: 45.400775, lon: -71.8913854 },
    },
    {
      id: 'granada',
      name: 'Théâtre Granada',
      blurb: 'The Granada theatre on Wellington North.',
      fallback: { lat: 45.4022896, lon: -71.8910735 },
    },
    {
      id: 'marche',
      name: 'Marché de la Gare',
      blurb: 'Public market by the old station.',
      fallback: { lat: 45.39745, lon: -71.89588 },
    },
    {
      id: 'cathedral',
      name: 'Cathédrale Saint-Michel',
      blurb: 'Basilique-cathédrale Saint-Michel.',
      fallback: { lat: 45.4027169, lon: -71.8925789 },
    },
    {
      id: 'udes',
      name: 'Université de Sherbrooke',
      blurb: 'Main campus below Mont Bellevue.',
      fallback: { lat: 45.3767733, lon: -71.940274 },
    },
    {
      id: 'bishops',
      name: "Bishop's University",
      blurb: "Bishop's campus in Lennoxville.",
      fallback: { lat: 45.3612321, lon: -71.8413609 },
    },
    {
      id: 'jacques',
      name: 'Jacques-Cartier Bridge',
      blurb: 'Pont Jacques-Cartier over the Magog.',
      fallback: { lat: 45.3918809, lon: -71.9185429 },
    },
    {
      id: 'king',
      name: 'Downtown King Street',
      blurb: 'Rue King through the downtown core.',
      fallback: { lat: 45.4009, lon: -71.8934 },
    },
    {
      id: 'lennoxville',
      name: 'Lennoxville',
      blurb: 'Lennoxville village core.',
      fallback: { lat: 45.3661982, lon: -71.8564428 },
    },
    {
      id: 'rockforest',
      name: 'Rock Forest',
      blurb: 'Eastern Rock Forest, inside the mapped area.',
      fallback: { lat: 45.378, lon: -71.948 },
    },
  ];

  const cenotaph = toLocal(45.400775, -71.8913854);
  let kingPoint = null;
  let kingBest = Infinity;
  for (const road of roads) {
    if (!/king/i.test(road.name)) continue;
    const hit = nearestOnPolyline(road.pts, cenotaph);
    if (hit && hit.d < kingBest) {
      kingBest = hit.d;
      kingPoint = hit;
    }
  }

  let rockPoint = null;
  let rockBest = Infinity;
  const westTarget = toLocal(45.375, -71.948);
  for (const road of roads) {
    if (!/rock forest|saint-élie|saint-elie|du trait-carré|trait-carre/i.test(road.name)) continue;
    const c = road.pts[Math.floor(road.pts.length / 2)];
    const d = dist2(c, westTarget);
    if (d < rockBest) {
      rockBest = d;
      rockPoint = c;
    }
  }
  if (!rockPoint) {
    for (const road of roads) {
      for (const p of road.pts) {
        const ll = toLatLon(p.x, p.z);
        if (ll.lon > -71.949 || ll.lon < BBOX.w) continue;
        if (ll.lat < 45.365 || ll.lat > 45.40) continue;
        const d = dist2(p, westTarget);
        if (d < rockBest) {
          rockBest = d;
          rockPoint = p;
        }
      }
    }
  }

  const pois = targets.map((t) => {
    let local;
    let source = 'fallback';
    if (t.id === 'king' && kingPoint) {
      local = { x: kingPoint.x, z: kingPoint.z };
      source = 'rue King nearest the cenotaph';
    } else if (t.id === 'rockforest' && rockPoint) {
      local = { x: rockPoint.x, z: rockPoint.z };
      source = 'western mapped roads in Rock Forest';
    } else {
      local = toLocal(t.fallback.lat, t.fallback.lon);
      const ll = toLatLon(local.x, local.z);
      if (!inBbox(ll.lat, ll.lon, 0)) {
        const clamped = {
          lat: clamp(t.fallback.lat, BBOX.s + 0.002, BBOX.n - 0.002),
          lon: clamp(t.fallback.lon, BBOX.w + 0.002, BBOX.e - 0.002),
        };
        local = toLocal(clamped.lat, clamped.lon);
        source = 'fallback clamped into the bbox';
      }
    }
    const ll = toLatLon(local.x, local.z);
    return {
      id: t.id,
      name: t.name,
      blurb: t.blurb,
      lat: ll.lat,
      lon: ll.lon,
      x: local.x,
      z: local.z,
      source,
    };
  });

  const francoisPts = namedWaterPoints(water, /saint-fran|st-fran|st\. fran/i);
  const magogPts = namedWaterPoints(water, /magog/i);
  let confluence = francoisPts.length && magogPts.length ? closestApproach(magogPts, francoisPts) : null;
  if (confluence && confluence.d < 450) {
    const ll = toLatLon(confluence.x, confluence.z);
    pois.push({
      id: 'confluence',
      name: 'River Confluence',
      blurb: 'Where the Magog meets the Saint-François.',
      lat: ll.lat,
      lon: ll.lon,
      x: confluence.x,
      z: confluence.z,
      source: `centerlines within ${confluence.d.toFixed(0)}m`,
    });
  }
  return pois;
}

function scatterTrees(parks, roadGrid) {
  const trees = [];
  for (const park of parks) {
    const b = boundsOf(park.poly);
    const step = park.kind === 2 ? 9 : park.kind === 1 ? 14 : 22;
    const chance = park.kind === 2 ? 0.72 : park.kind === 1 ? 0.5 : 0.22;
    const nameBoost = /king|bellevue|howard|campus|université|universite|bishop|centenaire|jacques-cartier/i.test(park.name);
    for (let x = b.minX; x <= b.maxX; x += step) {
      for (let z = b.minZ; z <= b.maxZ; z += step) {
        const h = hashStr(`${Math.round(x)}|${Math.round(z)}|${park.name}`);
        if ((h % 1000) / 1000 > (nameBoost ? Math.min(0.9, chance + 0.2) : chance)) continue;
        const jx = ((h % 97) / 97 - 0.5) * step * 0.7;
        const jz = (((h >> 8) % 97) / 97 - 0.5) * step * 0.7;
        const px = x + jx;
        const pz = z + jz;
        if (!pointInPoly(px, pz, park.poly)) continue;
        if (roadGrid.blocked(px, pz)) continue;
        const kind = park.kind === 2 ? (h % 5 === 0 ? 0 : 1) : h % 7 === 0 ? 2 : h % 5 === 0 ? 0 : 1;
        trees.push({ x: px, z: pz, kind });
      }
    }
  }
  return trees;
}

function makeRoadGrid(roads) {
  const cell = 4;
  const blocked = new Set();
  const key = (x, z) => `${Math.floor(x / cell)},${Math.floor(z / cell)}`;
  for (const road of roads) {
    if (road.cls > 6) continue;
    const r = road.width * 0.5 + 1.4;
    for (let i = 0; i < road.pts.length - 1; i++) {
      const a = road.pts[i];
      const b = road.pts[i + 1];
      const len = Math.hypot(b.x - a.x, b.z - a.z);
      const n = Math.max(1, Math.ceil(len / 3));
      for (let s = 0; s <= n; s++) {
        const t = s / n;
        const x = a.x + (b.x - a.x) * t;
        const z = a.z + (b.z - a.z) * t;
        const rad = Math.ceil(r / cell);
        const cx = Math.floor(x / cell);
        const cz = Math.floor(z / cell);
        for (let dz = -rad; dz <= rad; dz++) {
          for (let dx = -rad; dx <= rad; dx++) blocked.add(`${cx + dx},${cz + dz}`);
        }
      }
    }
  }
  return {
    blocked(x, z) {
      return blocked.has(key(x, z));
    },
  };
}

function makeWaterCover(polygons) {
  const cell = 12;
  const cover = new Set();
  for (const poly of polygons) {
    const b = boundsOf(poly.poly);
    for (let x = b.minX; x <= b.maxX; x += cell) {
      for (let z = b.minZ; z <= b.maxZ; z += cell) {
        if (pointInPoly(x, z, poly.poly)) cover.add(`${Math.floor(x / cell)},${Math.floor(z / cell)}`);
      }
    }
  }
  return {
    has(x, z) {
      return cover.has(`${Math.floor(x / cell)},${Math.floor(z / cell)}`);
    },
  };
}

function lightsAlong(roads) {
  const lights = [];
  for (const road of roads) {
    if (road.cls > 5 || road.width < 5) continue;
    let acc = 0;
    const spacing = road.cls <= 2 ? 32 : 40;
    for (let i = 1; i < road.pts.length; i++) {
      const a = road.pts[i - 1];
      const b = road.pts[i];
      const dx = b.x - a.x;
      const dz = b.z - a.z;
      const len = Math.hypot(dx, dz);
      if (len < 0.1) continue;
      const nx = -dz / len;
      const nz = dx / len;
      let walked = 0;
      while (acc + (len - walked) >= spacing) {
        const need = spacing - acc;
        walked += need;
        acc = 0;
        const t = walked / len;
        if (t > 1) break;
        const side = lights.length % 2 === 0 ? 1 : -1;
        lights.push({
          x: a.x + dx * t + nx * side * (road.width * 0.5 + 1.3),
          z: a.z + dz * t + nz * side * (road.width * 0.5 + 1.3),
        });
      }
      acc += len - walked;
    }
  }
  return lights;
}

function placeIntoChunks(buildings, roads, water, trees, lights) {
  const bag = new ChunkBag();
  for (const b of buildings) {
    const bb = boundsOf(b.poly);
    for (const [cx, cz] of chunkRange(bb.minX, bb.minZ, bb.maxX, bb.maxZ)) {
      const clipped = clipPoly(b.poly, chunkRect(cx, cz, 0));
      if (clipped.length < 3) continue;
      if (Math.abs(ringArea(clipped)) < 8) continue;
      bag.get(cx, cz).buildings.push({
        poly: clipped,
        type: b.type,
        floors: b.floors,
        flags: b.highrise ? 1 : 0,
      });
    }
  }
  for (const road of roads) {
    const bb = boundsOf(road.pts, road.width);
    for (const [cx, cz] of chunkRange(bb.minX, bb.minZ, bb.maxX, bb.maxZ)) {
      const parts = clipPolyline(road.pts, chunkRect(cx, cz, 0.5));
      for (const part of parts) {
        if (part.length < 2 || lengthOf(part) < 2) continue;
        bag.get(cx, cz).roads.push({
          pts: part,
          cls: road.cls,
          width: road.width,
          flags: road.bridge ? 1 : 0,
        });
      }
    }
  }
  for (const poly of water.polygons) {
    const bb = boundsOf(poly.poly);
    for (const [cx, cz] of chunkRange(bb.minX, bb.minZ, bb.maxX, bb.maxZ)) {
      const clipped = clipPoly(poly.poly, chunkRect(cx, cz, 0));
      if (clipped.length < 3 || Math.abs(ringArea(clipped)) < 20) continue;
      bag.get(cx, cz).waters.push({ kind: 0, width: 0, pts: clipped });
    }
  }
  const cover = makeWaterCover(water.polygons);
  for (const ribbon of water.ribbons) {
    const kept = [];
    for (const p of ribbon.pts) {
      if (!cover.has(p.x, p.z)) kept.push(p);
      else if (kept.length) {
        flushRibbon(bag, kept, ribbon.width);
        kept.length = 0;
      }
    }
    flushRibbon(bag, kept, ribbon.width);
  }
  for (const tree of trees) {
    const cx = Math.floor(tree.x / CHUNK);
    const cz = Math.floor(tree.z / CHUNK);
    const chunk = bag.get(cx, cz);
    if (chunk.trees.length < 360) chunk.trees.push(tree);
  }
  for (const light of lights) {
    const cx = Math.floor(light.x / CHUNK);
    const cz = Math.floor(light.z / CHUNK);
    const chunk = bag.get(cx, cz);
    if (chunk.lights.length < 90) chunk.lights.push(light);
  }
  return bag;
}

function flushRibbon(bag, pts, width) {
  if (pts.length < 2) return;
  const bb = boundsOf(pts, width);
  for (const [cx, cz] of chunkRange(bb.minX, bb.minZ, bb.maxX, bb.maxZ)) {
    const parts = clipPolyline(pts, chunkRect(cx, cz, 0.5));
    for (const part of parts) {
      if (part.length < 2) continue;
      bag.get(cx, cz).waters.push({
        kind: 1,
        width: clamp(Math.round(width), 1, 255),
        pts: part,
      });
    }
  }
}

class Writer {
  constructor() {
    this.b = Buffer.alloc(2 * 1024 * 1024);
    this.o = 0;
  }
  need(n) {
    if (this.o + n <= this.b.length) return;
    const nb = Buffer.alloc(Math.max(this.b.length * 2, this.o + n));
    this.b.copy(nb, 0, 0, this.o);
    this.b = nb;
  }
  u8(v) {
    this.need(1);
    this.b.writeUInt8(v & 255, this.o);
    this.o += 1;
  }
  u16(v) {
    this.need(2);
    this.b.writeUInt16LE(v & 65535, this.o);
    this.o += 2;
  }
  i16(v) {
    this.need(2);
    this.b.writeInt16LE(clamp(v | 0, -32768, 32767), this.o);
    this.o += 2;
  }
  u32(v) {
    this.need(4);
    this.b.writeUInt32LE(v >>> 0, this.o);
    this.o += 4;
  }
  f32(v) {
    this.need(4);
    this.b.writeFloatLE(v, this.o);
    this.o += 4;
  }
  f64(v) {
    this.need(8);
    this.b.writeDoubleLE(v, this.o);
    this.o += 8;
  }
  bytes(buf) {
    this.need(buf.length);
    buf.copy(this.b, this.o);
    this.o += buf.length;
  }
  seek(o) {
    this.o = o;
  }
  finish() {
    return this.b.subarray(0, this.o);
  }
}

function encodeChunk(chunk) {
  const w = new Writer();
  w.u16(chunk.buildings.length);
  for (const b of chunk.buildings) {
    const n = clamp(b.poly.length, 0, 255);
    w.u8(b.type);
    w.u8(clamp(b.floors, 1, 40));
    w.u8(b.flags);
    w.u8(n);
    for (let i = 0; i < n; i++) {
      const [x, z] = relCm(b.poly[i].x, b.poly[i].z, chunk.cx, chunk.cz);
      w.i16(x);
      w.i16(z);
    }
  }
  w.u16(chunk.roads.length);
  for (const r of chunk.roads) {
    const n = clamp(r.pts.length, 0, 255);
    w.u8(r.cls);
    w.u8(clamp(Math.round(r.width * 10), 1, 255));
    w.u8(r.flags);
    w.u8(n);
    for (let i = 0; i < n; i++) {
      const [x, z] = relCm(r.pts[i].x, r.pts[i].z, chunk.cx, chunk.cz);
      w.i16(x);
      w.i16(z);
    }
  }
  w.u16(chunk.waters.length);
  for (const water of chunk.waters) {
    const n = clamp(water.pts.length, 0, 65535);
    w.u8(water.kind);
    w.u8(clamp(water.width, 0, 255));
    w.u16(n);
    for (let i = 0; i < n; i++) {
      const [x, z] = relCm(water.pts[i].x, water.pts[i].z, chunk.cx, chunk.cz);
      w.i16(x);
      w.i16(z);
    }
  }
  w.u16(chunk.trees.length);
  for (const t of chunk.trees) {
    const [x, z] = relCm(t.x, t.z, chunk.cx, chunk.cz);
    w.i16(x);
    w.i16(z);
    w.u8(t.kind);
  }
  w.u16(chunk.lights.length);
  for (const L of chunk.lights) {
    const [x, z] = relCm(L.x, L.z, chunk.cx, chunk.cz);
    w.i16(x);
    w.i16(z);
  }
  return Buffer.from(w.finish());
}

function tileXY(lat, lon, zoom) {
  const n = 2 ** zoom;
  const x = Math.floor(((lon + 180) / 360) * n);
  const latRad = (lat * Math.PI) / 180;
  const y = Math.floor(((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2) * n);
  return [x, y];
}

function tilePixel(lat, lon, zoom) {
  const n = 2 ** zoom;
  const xf = ((lon + 180) / 360) * n;
  const latRad = (lat * Math.PI) / 180;
  const yf = ((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2) * n;
  const tx = Math.floor(xf);
  const ty = Math.floor(yf);
  return { tx, ty, px: (xf - tx) * 256, py: (yf - ty) * 256 };
}

async function loadTerrarium(zoom = 13) {
  const [x0, y1] = tileXY(BBOX.n, BBOX.w, zoom);
  const [x1, y0] = tileXY(BBOX.s, BBOX.e, zoom);
  const tiles = new Map();
  for (let x = x0; x <= x1; x++) {
    for (let y = y1; y <= y0; y++) {
      const file = path.join(RAW, `terrarium-${zoom}-${x}-${y}.png`);
      let buf;
      if (existsSync(file)) buf = await readFile(file);
      else {
        const url = `https://s3.amazonaws.com/elevation-tiles-prod/terrarium/${zoom}/${x}/${y}.png`;
        log(`DEM tile ${zoom}/${x}/${y}`);
        const res = await fetch(url, { headers: { 'User-Agent': 'SherbrookeExplorer/1.0' } });
        if (!res.ok) throw new Error(`DEM ${res.status} ${url}`);
        buf = Buffer.from(await res.arrayBuffer());
        await writeFile(file, buf);
      }
      const png = PNG.sync.read(buf);
      tiles.set(`${x},${y}`, png);
    }
  }
  return { zoom, tiles };
}

function sampleTerrarium(dem, lat, lon) {
  const { tx, ty, px, py } = tilePixel(lat, lon, dem.zoom);
  const png = dem.tiles.get(`${tx},${ty}`);
  if (!png) return null;
  const x = clamp(Math.floor(px), 0, 255);
  const y = clamp(Math.floor(py), 0, 255);
  const i = (png.width * y + x) << 2;
  const r = png.data[i];
  const g = png.data[i + 1];
  const b = png.data[i + 2];
  return r * 256 + g + b / 256 - 32768;
}

function buildDem(dem) {
  const west = toLocal(ORIGIN.lat, BBOX.w - 0.004);
  const east = toLocal(ORIGIN.lat, BBOX.e + 0.004);
  const north = toLocal(BBOX.n + 0.004, ORIGIN.lon);
  const south = toLocal(BBOX.s - 0.004, ORIGIN.lon);
  const minX = west.x;
  const maxX = east.x;
  const minZ = north.z;
  const maxZ = south.z;
  const step = 28;
  const w = Math.ceil((maxX - minX) / step) + 1;
  const h = Math.ceil((maxZ - minZ) / step) + 1;
  const heights = new Float32Array(w * h);
  let minH = Infinity;
  let maxH = -Infinity;
  let misses = 0;
  for (let j = 0; j < h; j++) {
    for (let i = 0; i < w; i++) {
      const x = minX + i * step;
      const z = minZ + j * step;
      const ll = toLatLon(x, z);
      let elev = dem ? sampleTerrarium(dem, ll.lat, ll.lon) : null;
      if (elev == null || Number.isNaN(elev)) {
        misses++;
        elev = syntheticElev(ll.lat, ll.lon);
      }
      heights[j * w + i] = elev;
      minH = Math.min(minH, elev);
      maxH = Math.max(maxH, elev);
    }
  }
  log(`DEM ${w}x${h} elev ${minH.toFixed(1)}..${maxH.toFixed(1)}m misses ${misses}`);
  return { w, h, minX, minZ, maxX: minX + (w - 1) * step, maxZ: minZ + (h - 1) * step, step, heights, minH, maxH };
}

function syntheticElev(lat, lon) {
  // Used only where a DEM sample is missing. Valleys follow the two rivers approximately,
  // Mont Bellevue rises south of downtown, and the west side climbs toward Rock Forest.
  const p = toLocal(lat, lon);
  const bellevue = toLocal(45.3796, -71.913);
  const downtown = toLocal(45.403, -71.9);
  const db = Math.hypot(p.x - bellevue.x, p.z - bellevue.z);
  const dd = Math.hypot(p.x - downtown.x, p.z - downtown.z);
  let h = 175 + Math.max(0, (p.x + 2000) * 0.004);
  h += Math.exp(-(db * db) / (900 * 900)) * 150;
  h += Math.exp(-(dd * dd) / (700 * 700)) * 28;
  h += Math.sin(p.x * 0.002) * 6 + Math.cos(p.z * 0.0017) * 5;
  return h;
}

function writeGeoJSON(buildings, roads, water, pois) {
  const features = [];
  const round = (p) => {
    const ll = toLatLon(p.x, p.z);
    return [Number(ll.lon.toFixed(6)), Number(ll.lat.toFixed(6))];
  };
  for (const b of buildings) {
    const ring = b.poly.map(round);
    ring.push(ring[0]);
    features.push({
      type: 'Feature',
      properties: { kind: 'building', id: b.id, floors: b.floors, type: b.type, name: b.name, highrise: b.highrise },
      geometry: { type: 'Polygon', coordinates: [ring] },
    });
  }
  for (const r of roads) {
    features.push({
      type: 'Feature',
      properties: { kind: 'road', id: r.id, name: r.name, highway: r.highway, cls: r.cls, width: r.width, bridge: r.bridge },
      geometry: { type: 'LineString', coordinates: r.pts.map(round) },
    });
  }
  for (const poly of water.polygons) {
    const ring = poly.poly.map(round);
    ring.push(ring[0]);
    features.push({
      type: 'Feature',
      properties: { kind: 'water', id: poly.id, name: poly.name },
      geometry: { type: 'Polygon', coordinates: [ring] },
    });
  }
  for (const ribbon of water.ribbons) {
    features.push({
      type: 'Feature',
      properties: { kind: 'waterway', id: ribbon.id, name: ribbon.name, width: ribbon.width, waterway: ribbon.waterway },
      geometry: { type: 'LineString', coordinates: ribbon.pts.map(round) },
    });
  }
  for (const poi of pois) {
    features.push({
      type: 'Feature',
      properties: { kind: 'poi', id: poi.id, name: poi.name },
      geometry: { type: 'Point', coordinates: [Number(poi.lon.toFixed(6)), Number(poi.lat.toFixed(6))] },
    });
  }
  return { type: 'FeatureCollection', name: 'sherbrooke', origin: ORIGIN, features };
}

function packWorld(bag, dem, bounds) {
  const chunks = [...bag.map.values()].filter((c) => c.buildings.length || c.roads.length || c.waters.length || c.trees.length);
  const blobs = chunks.map(encodeChunk);
  const header = 76;
  const demBytes = dem.w * dem.h * 4;
  const indexBytes = chunks.length * 12;
  const blobsStart = header + demBytes + indexBytes;
  const w = new Writer();
  w.bytes(Buffer.from('SHX1'));
  w.u32(1);
  w.f64(ORIGIN.lat);
  w.f64(ORIGIN.lon);
  w.f32(bounds.minX);
  w.f32(bounds.minZ);
  w.f32(bounds.maxX);
  w.f32(bounds.maxZ);
  w.f32(CHUNK);
  w.u32(dem.w);
  w.u32(dem.h);
  w.f32(dem.minX);
  w.f32(dem.minZ);
  w.f32(dem.maxX);
  w.f32(dem.maxZ);
  w.f32(dem.minH);
  w.u32(chunks.length);
  if (w.o !== header) throw new Error(`header ${w.o} != ${header}`);
  for (let i = 0; i < dem.heights.length; i++) w.f32(dem.heights[i]);
  let offset = blobsStart;
  for (let i = 0; i < chunks.length; i++) {
    w.i16(chunks[i].cx);
    w.i16(chunks[i].cz);
    w.u32(offset);
    w.u32(blobs[i].length);
    offset += blobs[i].length;
  }
  for (const blob of blobs) w.bytes(blob);
  return { buffer: w.finish(), chunks: chunks.length };
}

async function main() {
  await mkdir(RAW, { recursive: true });
  await mkdir(PUBLIC, { recursive: true });
  await mkdir(path.join(ROOT, 'data'), { recursive: true });

  const roadSel = 'way["highway"~"^(motorway|motorway_link|trunk|trunk_link|primary|primary_link|secondary|secondary_link|tertiary|tertiary_link|residential|unclassified|living_street|pedestrian|service)$"]';
  const [buildingEls, roadEls, waterWayEls, waterRelEls, parkEls] = [];
  const layers = [
    ['buildings', ['way["building"]']],
    ['building-rels', ['relation["building"]']],
    ['roads', [roadSel]],
    ['water-ways', [
      'way["natural"="water"]',
      'way["waterway"~"^(river|riverbank|stream|canal)$"]',
      'way["water"~"^(river|canal|lake)$"]',
    ]],
    ['water-rels', [
      'relation["natural"="water"]',
      'relation["waterway"="riverbank"]',
    ]],
    ['parks', [
      'way["leisure"="park"]',
      'way["leisure"="garden"]',
      'way["landuse"~"^(forest|grass|meadow|recreation_ground)$"]',
      'way["natural"="wood"]',
    ]],
    ['park-rels', [
      'relation["leisure"="park"]',
      'relation["landuse"="forest"]',
    ]],
  ];

  const loaded = {};
  for (const [name, selector] of layers) {
    try {
      loaded[name] = await fetchLayer(name, selector);
    } catch (err) {
      log(`${name} FAILED: ${err.message}`);
      loaded[name] = [];
    }
  }

  const buildings = parseBuildings([...(loaded.buildings || []), ...(loaded['building-rels'] || [])]);
  const roads = parseRoads(loaded.roads || []);
  const water = parseWater(loaded['water-ways'] || [], loaded['water-rels'] || []);
  const parks = parseParks([...(loaded.parks || []), ...(loaded['park-rels'] || [])]);
  log(`parsed buildings ${buildings.length}, roads ${roads.length}, water polys ${water.polygons.length}, ribbons ${water.ribbons.length}, parks ${parks.length}`);

  const roadGrid = makeRoadGrid(roads);
  const trees = scatterTrees(parks, roadGrid);
  const lights = lightsAlong(roads);
  log(`trees ${trees.length}, lights ${lights.length}`);

  const pois = pickPois(roads, water);
  for (const p of pois) log(`POI ${p.name}: ${p.lat.toFixed(5)}, ${p.lon.toFixed(5)} (${p.source})`);

  let demSource = 'terrarium';
  let terrarium = null;
  try {
    terrarium = await loadTerrarium(13);
  } catch (err) {
    log(`DEM download failed (${err.message}); using synthetic topography`);
    demSource = 'synthetic';
  }
  const dem = buildDem(terrarium);

  const bag = placeIntoChunks(buildings, roads, water, trees, lights);
  let minX = Infinity;
  let minZ = Infinity;
  let maxX = -Infinity;
  let maxZ = -Infinity;
  for (const b of buildings) {
    for (const p of b.poly) {
      minX = Math.min(minX, p.x);
      minZ = Math.min(minZ, p.z);
      maxX = Math.max(maxX, p.x);
      maxZ = Math.max(maxZ, p.z);
    }
  }
  for (const r of roads) {
    for (const p of r.pts) {
      minX = Math.min(minX, p.x);
      minZ = Math.min(minZ, p.z);
      maxX = Math.max(maxX, p.x);
      maxZ = Math.max(maxZ, p.z);
    }
  }
  const highrises = buildings.filter((b) => b.highrise).length;
  const geo = writeGeoJSON(buildings, roads, water, pois);
  const geoPath = path.join(ROOT, 'data', 'sherbrooke.geojson');
  await writeFile(geoPath, JSON.stringify(geo));
  const geoStat = await stat(geoPath);

  const king = pois.find((p) => p.id === 'king');
  const spawn = { x: king.x + 7, z: king.z + 4 };
  const carSpawns = [
    { id: 'downtown', x: king.x + 10, z: king.z - 2, yaw: 0.4 },
    { id: 'udes', ...offsetPoi(pois, 'udes', 18, 6), yaw: 1.2 },
    { id: 'bishops', ...offsetPoi(pois, 'bishops', 14, -8), yaw: 0.2 },
    { id: 'rockforest', ...offsetPoi(pois, 'rockforest', -12, 10), yaw: -0.6 },
  ];

  const packed = packWorld(bag, dem, { minX, minZ, maxX, maxZ });
  const packPath = path.join(PUBLIC, 'world.pack');
  await writeFile(packPath, packed.buffer);

  const meta = {
    origin: ORIGIN,
    metersPerDegLat: M_LAT,
    metersPerDegLon: M_LON,
    chunkSize: CHUNK,
    bounds: { minX, minZ, maxX, maxZ },
    dem: {
      source: demSource,
      minH: dem.minH,
      maxH: dem.maxH,
      width: dem.w,
      height: dem.h,
    },
    counts: {
      buildings: buildings.length,
      highrises,
      roads: roads.length,
      waterPolygons: water.polygons.length,
      waterways: water.ribbons.length,
      parks: parks.length,
      trees: trees.length,
      lights: lights.length,
      pois: pois.length,
      chunks: packed.chunks,
    },
    spawn,
    carSpawns,
    pois,
    attribution: '© OpenStreetMap contributors',
  };
  await writeFile(path.join(PUBLIC, 'world-meta.json'), JSON.stringify(meta, null, 2));
  const packStat = await stat(packPath);
  log(`geojson ${(geoStat.size / 1e6).toFixed(2)} MB, pack ${(packStat.size / 1e6).toFixed(2)} MB, chunks ${packed.chunks}`);
  log(JSON.stringify(meta.counts));
}

function offsetPoi(pois, id, dx, dz) {
  const p = pois.find((q) => q.id === id);
  return { x: p.x + dx, z: p.z + dz };
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
