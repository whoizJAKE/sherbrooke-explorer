// Original tileable textures for Sherbrooke Explorer.
// Run: node scripts/make-textures.mjs
// Nothing here is sampled from a photo, a game, or a map service.

import { PNG } from 'pngjs';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'textures');
mkdirSync(outDir, { recursive: true });

function hash2(ix, iy) {
  let n = (ix | 0) * 374761393 + (iy | 0) * 668265263;
  n = Math.imul(n ^ (n >>> 13), 1274126177);
  return ((n ^ (n >>> 16)) >>> 0) / 4294967295;
}

function vnoise(x, y, period) {
  const p = period | 0;
  const xw = ((x % p) + p) % p;
  const yw = ((y % p) + p) % p;
  const x0 = Math.floor(xw);
  const y0 = Math.floor(yw);
  const tx = xw - x0;
  const ty = yw - y0;
  const sx = tx * tx * (3 - 2 * tx);
  const sy = ty * ty * (3 - 2 * ty);
  const wrap = (v) => (v % p + p) % p;
  const n00 = hash2(wrap(x0), wrap(y0));
  const n10 = hash2(wrap(x0 + 1), wrap(y0));
  const n01 = hash2(wrap(x0), wrap(y0 + 1));
  const n11 = hash2(wrap(x0 + 1), wrap(y0 + 1));
  const nx0 = n00 + (n10 - n00) * sx;
  const nx1 = n01 + (n11 - n01) * sx;
  return nx0 + (nx1 - nx0) * sy;
}

function fbm(x, y, period) {
  let sum = 0;
  let amp = 0.55;
  let norm = 0;
  let freq = 1;
  for (let o = 0; o < 5; o++) {
    sum += amp * vnoise(x * freq, y * freq, period * freq);
    norm += amp;
    amp *= 0.5;
    freq *= 2;
  }
  return sum / norm;
}

function pngFrom(w, h, paint) {
  const png = new PNG({ width: w, height: h });
  const height = new Float32Array(w * h);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const sample = paint(x, y, w, h);
      const i = (y * w + x) << 2;
      png.data[i] = sample[0];
      png.data[i + 1] = sample[1];
      png.data[i + 2] = sample[2];
      png.data[i + 3] = sample[3] ?? 255;
      height[y * w + x] = sample[4] ?? 0.5;
    }
  }
  return { png, height };
}

function writePNG(name, png) {
  writeFileSync(join(outDir, name), PNG.sync.write(png));
}

function normalsFrom(height, w, h, strength) {
  const png = new PNG({ width: w, height: h });
  const H = (x, y) => height[((y + h) % h) * w + ((x + w) % w)];
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const dx = (H(x - 1, y) - H(x + 1, y)) * strength;
      const dy = (H(x, y - 1) - H(x, y + 1)) * strength;
      const len = Math.hypot(dx, dy, 1) || 1;
      const i = (y * w + x) << 2;
      png.data[i] = Math.round((dx / len) * 127.5 + 127.5);
      png.data[i + 1] = Math.round((dy / len) * 127.5 + 127.5);
      png.data[i + 2] = Math.round((1 / len) * 127.5 + 127.5);
      png.data[i + 3] = 255;
    }
  }
  return png;
}

function roughFrom(w, h, paint) {
  const png = new PNG({ width: w, height: h });
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const v = Math.max(0, Math.min(255, paint(x, y, w, h) | 0));
      const i = (y * w + x) << 2;
      png.data[i] = v;
      png.data[i + 1] = v;
      png.data[i + 2] = v;
      png.data[i + 3] = 255;
    }
  }
  return png;
}

function asphalt(x, y, w, h) {
  const n = fbm(x, y, w);
  const speck = hash2(x, y);
  const u = x / w;
  const wheel = Math.exp(-((u - 0.3) ** 2) / 0.0035) + Math.exp(-((u - 0.7) ** 2) / 0.0035);
  const patch = fbm(x * 0.45 + 20, y * 0.45, w);
  let v = 62 + n * 22 + (speck > 0.94 ? 28 : 0) - (speck < 0.035 ? 16 : 0);
  v += wheel * 8;
  if (patch > 0.66) v -= 12;
  if (patch < 0.28) v += 6;
  v = Math.max(28, Math.min(118, v));
  const grit = speck > 0.97 ? 18 : 0;
  return [v + grit * 0.2, v + grit * 0.15, v, 255, 0.45 + n * 0.25 + (speck - 0.5) * 0.15 - wheel * 0.08];
}

function concrete(x, y, w) {
  const n = fbm(x, y, w);
  const seamX = x % 64 < 2;
  const seamY = y % 80 < 2;
  const speck = hash2(x * 3, y * 5);
  let v = 168 + n * 18 + (speck - 0.5) * 14;
  if (seamX || seamY) v -= 28;
  v = Math.max(110, Math.min(210, v));
  return [v, v - 2, v - 8, 255, seamX || seamY ? 0.25 : 0.55 + n * 0.1];
}

function grass(x, y, w) {
  const n = fbm(x, y, w);
  const blot = fbm(x * 0.5 + 8, y * 0.5, w);
  const blade = hash2(x, (y / 3) | 0) > 0.72 && (x + y) % 3 === 0;
  let r = 62 + n * 24 + blot * 10;
  let g = 92 + n * 36 + (blade ? 16 : 0);
  let b = 48 + n * 14;
  if (blot < 0.32) {
    r += 18;
    g -= 8;
    b += 6;
  }
  return [
    Math.max(0, Math.min(255, r)),
    Math.max(0, Math.min(255, g)),
    Math.max(0, Math.min(255, b)),
    255,
    0.4 + n * 0.35 + (blade ? 0.2 : 0),
  ];
}

function facade(kind, x, y, w, h) {
  const floors = kind === 'stone' ? 3 : kind === 'glass' ? 8 : 4;
  const bays = kind === 'stone' ? 3 : kind === 'glass' ? 8 : 5;
  const bayW = w / bays;
  const floorH = h / floors;
  const bx = x / bayW;
  const by = y / floorH;
  const bay = Math.floor(bx);
  const floor = Math.floor(by);
  const lx = bx - bay;
  const ly = by - floor;
  const n = fbm(x, y, w);
  if (kind === 'glass') {
    const mullion = lx < 0.08 || lx > 0.92 || ly < 0.06 || ly > 0.94;
    const pane = 0.55 + hash2(bay + 3, floor + 9) * 0.2 + n * 0.05;
    const sky = 1 - y / h;
    if (mullion) return [176, 182, 186, 255, 0.75];
    const r = 28 + pane * 20 + sky * 18;
    const g = 48 + pane * 24 + sky * 22;
    const b = 62 + pane * 20 + sky * 16;
    return [r, g, b, 255, 0.35];
  }
  const win = lx > 0.27 && lx < 0.73 && ly > 0.18 && ly < 0.7;
  const sill = lx > 0.22 && lx < 0.78 && ly > 0.7 && ly < 0.78;
  const frame = lx > 0.23 && lx < 0.77 && ly > 0.14 && ly < 0.74 && !win;
  if (kind === 'brick') {
    const course = Math.floor(y / 6);
    const stagger = (course & 1) * 9;
    const mx = (x + stagger) % 18;
    const my = y % 6;
    const mortar = mx < 1 || my < 1;
    const shade = hash2(Math.floor((x + stagger) / 18), course);
    let r = 132 + shade * 46 + n * 10;
    let g = 58 + shade * 16 + n * 6;
    let b = 46 + shade * 8;
    if (mortar) {
      r = 186;
      g = 176;
      b = 162;
    }
    if (win) return [18 + hash2(bay, floor) * 10, 24, 32, 255, 0.12];
    if (sill || frame) return [206, 198, 184, 255, 0.78];
    return [r, g, b, 255, mortar ? 0.32 : 0.58];
  }
  const blockX = x % 46 < 2;
  const blockY = y % 30 < 2;
  const shade = hash2((x / 46) | 0, (y / 30) | 0);
  let r = 196 + shade * 24 + n * 8;
  let g = 190 + shade * 18;
  let b = 176 + shade * 12;
  if (blockX || blockY) {
    r -= 30;
    g -= 28;
    b -= 24;
  }
  if (win) return [22, 28, 34, 255, 0.14];
  if (sill || frame) return [214, 208, 196, 255, 0.8];
  return [r, g, b, 255, blockX || blockY ? 0.3 : 0.62];
}

function lightsFor(kind, x, y, w, h) {
  const floors = kind === 'stone' ? 3 : kind === 'glass' ? 8 : 4;
  const bays = kind === 'stone' ? 3 : kind === 'glass' ? 8 : 5;
  const lx = (x / (w / bays)) % 1;
  const ly = (y / (h / floors)) % 1;
  const bay = Math.floor(x / (w / bays));
  const floor = Math.floor(y / (h / floors));
  const win = kind === 'glass'
    ? !(lx < 0.08 || lx > 0.92 || ly < 0.06 || ly > 0.94)
    : lx > 0.27 && lx < 0.73 && ly > 0.18 && ly < 0.7;
  const lit = hash2(bay + kind.length, floor * 5 + 2) > 0.42;
  if (win && lit) return [255, 214, 156, 255, 0.5];
  return [0, 0, 0, 255, 0.5];
}

function roof(x, y, w) {
  const n = fbm(x, y, w);
  const row = y % 10 < 1;
  const tab = ((x + ((y / 10) | 0) * 8) % 22) < 1;
  let v = 78 + n * 16;
  if (row || tab) v -= 16;
  return [v + 8, v + 2, v - 4, 255, row ? 0.35 : 0.55];
}

function savePair(name, painted, w, h, normalStrength) {
  const { png, height } = pngFrom(w, h, painted);
  writePNG(`${name}.png`, png);
  if (normalStrength) writePNG(`${name}-normal.png`, normalsFrom(height, w, h, normalStrength));
}

savePair('asphalt', asphalt, 256, 256, 2.4);
writePNG('asphalt-rough.png', roughFrom(256, 256, (x, y, w) => {
  const u = x / w;
  const wheel = Math.exp(-((u - 0.3) ** 2) / 0.0035) + Math.exp(-((u - 0.7) ** 2) / 0.0035);
  const n = fbm(x, y, w);
  return 210 - wheel * 48 - n * 18;
}));
savePair('concrete', (x, y, w) => concrete(x, y, w), 256, 256, 2.2);
savePair('grass', (x, y, w) => grass(x, y, w), 256, 256, 1.6);
savePair('brick', (x, y, w, h) => facade('brick', x, y, w, h), 512, 512, 3.2);
savePair('stone', (x, y, w, h) => facade('stone', x, y, w, h), 512, 512, 2.6);
savePair('glass', (x, y, w, h) => facade('glass', x, y, w, h), 512, 512, 1.4);
savePair('roof', (x, y, w) => roof(x, y, w), 256, 256, 2.8);
for (const kind of ['brick', 'stone', 'glass']) {
  const { png } = pngFrom(512, 512, (x, y, w, h) => lightsFor(kind, x, y, w, h));
  writePNG(`${kind}-lights.png`, png);
}

function treeMaple(autumn) {
  const w = 320;
  const h = 420;
  const png = new PNG({ width: w, height: h });
  const blobs = [
    [0.5, 0.34, 0.3, 0.24],
    [0.32, 0.4, 0.2, 0.16],
    [0.68, 0.38, 0.21, 0.17],
    [0.5, 0.22, 0.18, 0.14],
    [0.4, 0.5, 0.16, 0.13],
    [0.62, 0.5, 0.15, 0.12],
    [0.5, 0.48, 0.12, 0.1],
  ];
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) << 2;
      png.data[i + 3] = 0;
      const nx = x / w;
      const ny = y / h;
      const trunk = Math.abs(nx - 0.5) < 0.035 + (ny - 0.55) * 0.03 && ny > 0.52 && ny < 0.98;
      let cover = 0;
      let light = 0;
      for (const [cx, cy, rx, ry] of blobs) {
        const dx = (nx - cx) / rx;
        const dy = (ny - cy) / ry;
        const d = dx * dx + dy * dy;
        if (d < 1) {
          const e = Math.sqrt(d);
          cover = Math.max(cover, 1 - Math.max(0, (e - 0.72) / 0.28));
          light += (1 - e) * (dx < 0 ? 1 : 0.6);
        }
      }
      const holes = fbm(x * 1.4, y * 1.4, 160);
      if (holes > 0.78 && ny < 0.55) cover *= 0.15;
      if (trunk) {
        const bark = 92 + hash2(x, y) * 28;
        png.data[i] = bark + 18;
        png.data[i + 1] = bark - 8;
        png.data[i + 2] = bark - 28;
        png.data[i + 3] = 255;
        continue;
      }
      if (cover < 0.08) continue;
      let r;
      let g;
      let b;
      if (autumn) {
        const mix = hash2((x / 6) | 0, (y / 6) | 0);
        r = 176 + mix * 60;
        g = 78 + mix * 40 + light * 10;
        b = 32 + mix * 12;
      } else {
        r = 46 + light * 18;
        g = 92 + light * 28 + holes * 16;
        b = 42 + light * 8;
      }
      png.data[i] = Math.max(0, Math.min(255, r));
      png.data[i + 1] = Math.max(0, Math.min(255, g));
      png.data[i + 2] = Math.max(0, Math.min(255, b));
      png.data[i + 3] = Math.round(Math.min(1, cover) * 255);
    }
  }
  return png;
}

function treePine() {
  const w = 280;
  const h = 420;
  const png = new PNG({ width: w, height: h });
  const tris = [
    [0.5, 0.06, 0.32, 0.28, 0.68, 0.28],
    [0.5, 0.16, 0.24, 0.42, 0.76, 0.42],
    [0.5, 0.28, 0.18, 0.56, 0.82, 0.56],
    [0.5, 0.4, 0.14, 0.7, 0.86, 0.7],
  ];
  const inside = (px, py, t) => {
    const [ax, ay, bx, by, cx, cy] = t;
    const x = px / w;
    const y = py / h;
    const v0x = cx - ax;
    const v0y = cy - ay;
    const v1x = bx - ax;
    const v1y = by - ay;
    const v2x = x - ax;
    const v2y = y - ay;
    const dot00 = v0x * v0x + v0y * v0y;
    const dot01 = v0x * v1x + v0y * v1y;
    const dot02 = v0x * v2x + v0y * v2y;
    const dot11 = v1x * v1x + v1y * v1y;
    const dot12 = v1x * v2x + v1y * v2y;
    const inv = 1 / (dot00 * dot11 - dot01 * dot01 || 1);
    const u = (dot11 * dot02 - dot01 * dot12) * inv;
    const v = (dot00 * dot12 - dot01 * dot02) * inv;
    return u >= 0 && v >= 0 && u + v < 1;
  };
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) << 2;
      png.data[i + 3] = 0;
      const nx = x / w;
      const ny = y / h;
      const trunk = Math.abs(nx - 0.5) < 0.028 && ny > 0.68 && ny < 0.98;
      let layer = -1;
      for (let t = 0; t < tris.length; t++) if (inside(x, y, tris[t])) layer = t;
      if (trunk) {
        png.data[i] = 92;
        png.data[i + 1] = 70;
        png.data[i + 2] = 48;
        png.data[i + 3] = 255;
        continue;
      }
      if (layer < 0) continue;
      const edge = Math.abs(nx - 0.5);
      const shade = layer * 10 + edge * 40;
      png.data[i] = 28 + shade * 0.3;
      png.data[i + 1] = 72 + shade;
      png.data[i + 2] = 48 + shade * 0.2;
      png.data[i + 3] = 255;
    }
  }
  return png;
}

writePNG('tree-maple.png', treeMaple(false));
writePNG('tree-autumn.png', treeMaple(true));
writePNG('tree-pine.png', treePine());

console.log('textures written to', outDir);
