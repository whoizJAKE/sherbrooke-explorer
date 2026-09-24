// Pure helpers for road decks and building eaves. No Three.js.
// Local frame matches the world pack: x east, z south, y up, meters.

export function toLocal(lat, lon, originLat, originLon, metersPerDegLat, metersPerDegLon) {
  return {
    x: (lon - originLon) * metersPerDegLon,
    z: (originLat - lat) * metersPerDegLat,
  };
}

export function smoothstep(t) {
  const x = Math.min(1, Math.max(0, t));
  return x * x * (3 - 2 * x);
}

// deck is the elevated surface. dist 0 sits on the abutment ground.
// Over water the surface never drops into the river.
export function mixBridgeHeight({ ground, deck, distToAbutment, approach, waterY = -Infinity, wet = false }) {
  if (wet) return Math.max(deck, Number.isFinite(waterY) ? waterY + 1.15 : deck);
  const span = Math.max(8, approach || 8);
  const s = smoothstep((distToAbutment ?? span) / span);
  return ground * (1 - s) + deck * s;
}

// overpass: no water samples, lift a flat deck above the abutments.
// river: clear the water and stay at least a little above the banks.
export function chooseDeck({ bankTop, waterClear, overpass, abutmentTop }) {
  if (overpass || !Number.isFinite(waterClear)) {
    const base = Number.isFinite(abutmentTop) ? abutmentTop : (Number.isFinite(bankTop) ? bankTop : 0);
    return base + 4.5;
  }
  const bank = (Number.isFinite(bankTop) ? bankTop : abutmentTop) + 0.4;
  return Math.max(bank, waterClear);
}

export function eaveHeight(grounds, height) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  const n = grounds.length || 1;
  for (const g of grounds) {
    min = Math.min(min, g);
    max = Math.max(max, g);
    sum += g;
  }
  if (!Number.isFinite(min)) {
    min = 0;
    max = 0;
    sum = 0;
  }
  const mid = sum / n;
  const storey = Math.max(2.7, Math.min(height, 3.4));
  const eave = Math.max(mid + height, max + storey);
  return { eave, min, max, mid };
}
