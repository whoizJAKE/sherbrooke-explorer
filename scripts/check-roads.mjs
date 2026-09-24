import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { chooseDeck, eaveHeight, mixBridgeHeight, toLocal } from '../src/roadmath.mjs';

const meta = JSON.parse(readFileSync(new URL('../public/world-meta.json', import.meta.url)));
const king = meta.pois.find((p) => p.id === 'king');
const local = toLocal(
  king.lat,
  king.lon,
  meta.origin.lat,
  meta.origin.lon,
  meta.metersPerDegLat,
  meta.metersPerDegLon,
);
assert.ok(Math.abs(local.x - king.x) < 0.05, `king x ${local.x} vs ${king.x}`);
assert.ok(Math.abs(local.z - king.z) < 0.05, `king z ${local.z} vs ${king.z}`);

const jacques = meta.pois.find((p) => p.id === 'jacques');
assert.equal(jacques.name, 'Jacques-Cartier Bridge');
assert.ok(jacques.lat > 45.39 && jacques.lat < 45.395);
assert.ok(jacques.lon < -71.91 && jacques.lon > -71.93);

const deck = chooseDeck({ bankTop: 160, waterClear: 158 + 3.6, overpass: false, abutmentTop: 160.2 });
assert.ok(deck >= 158 + 3.6, `deck ${deck} does not clear the river`);
assert.ok(deck >= 160.4, 'deck should sit above the bank');

const over = chooseDeck({ bankTop: 200, waterClear: -Infinity, overpass: true, abutmentTop: 200 });
assert.ok(Math.abs(over - 204.5) < 1e-6, over);

const atEnd = mixBridgeHeight({ ground: 160, deck, distToAbutment: 0, approach: 40, waterY: 158, wet: false });
assert.ok(Math.abs(atEnd - 160) < 1e-6, atEnd);

const mid = mixBridgeHeight({ ground: 150, deck, distToAbutment: 80, approach: 40, waterY: 158, wet: true });
assert.ok(Math.abs(mid - Math.max(deck, 158 + 1.15)) < 1e-6, mid);
const wetEnd = mixBridgeHeight({ ground: 140, deck, distToAbutment: 0, approach: 40, waterY: 158, wet: true });
assert.ok(wetEnd >= deck, wetEnd);

const climb = mixBridgeHeight({ ground: 160, deck: 166, distToAbutment: 20, approach: 40, wet: false });
assert.ok(climb > 160 && climb < 166, climb);

const eave = eaveHeight([10, 12, 11], 9);
assert.ok(eave.eave >= 12 + 2.7, eave.eave);
assert.ok(eave.eave >= 11 + 9 - 0.01, 'eave keeps the tagged height above the middle');
assert.equal(eave.min, 10);

const steep = eaveHeight([0, 8], 6);
assert.ok(steep.eave >= 8 + 2.7, steep.eave);

console.log('check-roads ok');
console.log(`king local ${local.x.toFixed(2)}, ${local.z.toFixed(2)}`);
console.log(`jacques deck rule sample ${deck.toFixed(2)} m`);
