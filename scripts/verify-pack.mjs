import { readFile } from 'node:fs/promises';
import { parseWorld } from '../src/load.js';

const file = await readFile(new URL('../public/world.pack', import.meta.url));
const buffer = file.buffer.slice(file.byteOffset, file.byteOffset + file.byteLength);
const meta = JSON.parse(await readFile(new URL('../public/world-meta.json', import.meta.url), 'utf8'));
const world = parseWorld(buffer, meta);
let buildings = 0;
let roads = 0;
let waters = 0;
for (const chunk of world.chunks.values()) {
  buildings += chunk.buildings.length;
  roads += chunk.roads.length;
  waters += chunk.waters.length;
}
console.log(JSON.stringify({
  chunks: world.chunks.size,
  buildings,
  roads,
  waters,
  bridges: world.bridges.length,
  mask: world.mask.length,
  dem: [world.dem.w, world.dem.h, world.dem.heights[0]],
}, null, 2));
let water = 0, bank = 0, land = 0;
for (const v of world.mask) {
  if (v === 2) water++;
  else if (v === 1) bank++;
  else land++;
}
console.log({ water, bank, land, waterPct: (100 * water / world.mask.length).toFixed(1) });
if (water / world.mask.length > 0.35) throw new Error('water mask flooded the map');
if (world.chunks.size < 1000) throw new Error('too few chunks');
if (buildings < 20000) throw new Error('too few buildings');
console.log('pack ok');
