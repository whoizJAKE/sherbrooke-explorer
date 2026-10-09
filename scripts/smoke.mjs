// Loads the built site in system Chrome and checks that the world pack
// arrives and the player starts beside the Rue King landmark.
import { spawn } from 'node:child_process';
import { setTimeout as sleep } from 'node:timers/promises';
import puppeteer from 'puppeteer-core';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 4173;
const URL = `http://127.0.0.1:${PORT}/?quality=low&lang=en`;

const preview = spawn(
  'npx',
  ['vite', 'preview', '--port', String(PORT), '--strictPort', '--host', '127.0.0.1'],
  { stdio: 'ignore' },
);

function stop() {
  if (!preview.killed) preview.kill('SIGTERM');
}

try {
  let up = false;
  for (let i = 0; i < 40; i++) {
    try {
      const res = await fetch(URL);
      if (res.ok) {
        up = true;
        break;
      }
    } catch {
      /* preview still starting */
    }
    await sleep(250);
  }
  if (!up) throw new Error('vite preview did not start');

  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--use-angle=metal', '--ignore-gpu-blocklist', '--enable-gpu'],
  });
  try {
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', (err) => errors.push(String(err)));
    await page.setViewport({ width: 1280, height: 720 });
    await page.goto(URL, { waitUntil: 'networkidle0', timeout: 120000 });
    await page.waitForFunction(
      () => window.__sherbrooke && window.__sherbrooke.world && window.__sherbrooke.player,
      { timeout: 90000 },
    );
    const report = await page.evaluate(() => {
      const game = window.__sherbrooke;
      const king = game.world.pois.find((poi) => poi.id === 'king');
      const x = game.player.body.position.x;
      const z = game.player.body.position.z;
      const gl = game.renderer ? null : document.querySelector('canvas');
      const canvas = document.querySelector('canvas');
      let gpu = 'unknown';
      if (canvas) {
        const ctx = canvas.getContext('webgl2') || canvas.getContext('webgl');
        const ext = ctx && ctx.getExtension('WEBGL_debug_renderer_info');
        if (ext) gpu = ctx.getParameter(ext.UNMASKED_RENDERER_WEBGL);
      }
      return {
        buildings: game.world.decodedBuildings,
        king: king && king.name,
        distance: king ? Math.hypot(x - king.x, z - king.z) : 1e9,
        hud: document.getElementById('hud') ? !document.getElementById('hud').hidden : false,
        title: document.title,
        gpu,
        hasCanvas: Boolean(gl || canvas),
      };
    });
    console.log(JSON.stringify(report, null, 2));
    if (errors.length) throw new Error(errors.join('\n'));
    if (!report.hud) throw new Error('HUD did not appear');
    if (report.buildings < 1000) throw new Error(`world pack too small: ${report.buildings} buildings`);
    if (!report.king) throw new Error('Rue King landmark missing from the pack metadata');
    if (report.distance > 40) throw new Error(`player is ${report.distance.toFixed(1)} m from Rue King, expected under 40`);
    console.log('smoke ok');
  } finally {
    await browser.close();
  }
} finally {
  stop();
}
