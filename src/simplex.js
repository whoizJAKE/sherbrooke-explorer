// Tiny 2D simplex. Used only to roughen the elevation grid by about a meter.

const F2 = 0.5 * (Math.sqrt(3) - 1);
const G2 = (3 - Math.sqrt(3)) / 6;
const GRAD = [
  [1, 1], [-1, 1], [1, -1], [-1, -1],
  [1, 0], [-1, 0], [0, 1], [0, -1],
];
const PERM = new Uint8Array(512);
const P = new Uint8Array(256);
for (let i = 0; i < 256; i++) P[i] = i;
let seed = 20260322;
for (let i = 255; i > 0; i--) {
  seed = (seed * 16807) % 2147483647;
  const j = seed % (i + 1);
  const tmp = P[i];
  P[i] = P[j];
  P[j] = tmp;
}
for (let i = 0; i < 512; i++) PERM[i] = P[i & 255];

export function simplex2(xin, yin) {
  const s = (xin + yin) * F2;
  const i = Math.floor(xin + s);
  const j = Math.floor(yin + s);
  const t = (i + j) * G2;
  const x0 = xin - (i - t);
  const y0 = yin - (j - t);
  const i1 = x0 > y0 ? 1 : 0;
  const j1 = x0 > y0 ? 0 : 1;
  const x1 = x0 - i1 + G2;
  const y1 = y0 - j1 + G2;
  const x2 = x0 - 1 + 2 * G2;
  const y2 = y0 - 1 + 2 * G2;
  const ii = i & 255;
  const jj = j & 255;
  let n = 0;
  const corners = [
    [x0, y0, PERM[ii + PERM[jj]] % 8],
    [x1, y1, PERM[ii + i1 + PERM[jj + j1]] % 8],
    [x2, y2, PERM[ii + 1 + PERM[jj + 1]] % 8],
  ];
  for (const [x, y, g] of corners) {
    let t0 = 0.5 - x * x - y * y;
    if (t0 > 0) {
      t0 *= t0;
      n += t0 * t0 * (GRAD[g][0] * x + GRAD[g][1] * y);
    }
  }
  return 70 * n;
}
