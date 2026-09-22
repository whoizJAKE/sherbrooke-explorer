// Synthesize short looping placeholders. Not field recordings.
import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', 'public', 'audio');

function wav(samples, rate) {
  const data = Buffer.alloc(44 + samples.length * 2);
  data.write('RIFF', 0);
  data.writeUInt32LE(36 + samples.length * 2, 4);
  data.write('WAVE', 8);
  data.write('fmt ', 12);
  data.writeUInt32LE(16, 16);
  data.writeUInt16LE(1, 20);
  data.writeUInt16LE(1, 22);
  data.writeUInt32LE(rate, 24);
  data.writeUInt32LE(rate * 2, 28);
  data.writeUInt16LE(2, 32);
  data.writeUInt16LE(16, 34);
  data.write('data', 36);
  data.writeUInt32LE(samples.length * 2, 40);
  for (let i = 0; i < samples.length; i++) {
    const s = Math.max(-1, Math.min(1, samples[i]));
    data.writeInt16LE((s * 32767) | 0, 44 + i * 2);
  }
  return data;
}

function city(rate, seconds) {
  const n = rate * seconds;
  const out = new Float32Array(n);
  let brown = 0;
  for (let i = 0; i < n; i++) {
    brown = (brown + (Math.random() * 2 - 1) * 0.04) * 0.96;
    const t = i / rate;
    const hum = Math.sin(t * 2 * Math.PI * 90) * 0.04 + Math.sin(t * 2 * Math.PI * 140) * 0.02;
    const fade = Math.min(1, i / 2000) * Math.min(1, (n - i) / 2000);
    out[i] = (brown * 0.35 + hum) * fade;
  }
  return out;
}

function rain(rate, seconds) {
  const n = rate * seconds;
  const out = new Float32Array(n);
  let hp = 0;
  let prev = 0;
  for (let i = 0; i < n; i++) {
    const white = Math.random() * 2 - 1;
    hp = white - prev + 0.97 * hp;
    prev = white;
    const fade = Math.min(1, i / 1500) * Math.min(1, (n - i) / 1500);
    out[i] = hp * 0.22 * fade;
  }
  return out;
}

await mkdir(root, { recursive: true });
const rate = 22050;
await writeFile(path.join(root, 'city-ambient.wav'), wav(city(rate, 4), rate));
await writeFile(path.join(root, 'rain.wav'), wav(rain(rate, 3), rate));
console.log('wrote audio placeholders');
