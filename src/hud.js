const FOUND_KEY = 'sherbrooke-explorer-found';

export class Hud {
  constructor(world) {
    this.world = world;
    this.pois = world.pois;
    this.found = new Set(readFound());
    this.menuOpen = false;
    this.debugOn = false;
    this.clockEl = document.getElementById('clock');
    this.landEl = document.getElementById('landmarks');
    this.promptEl = document.getElementById('prompt');
    this.speedEl = document.getElementById('speed');
    this.debugEl = document.getElementById('debug');
    this.cross = document.getElementById('crosshair');
    this.menu = document.getElementById('menu');
    this.list = document.getElementById('menu-list');
    this.map = document.getElementById('map');
    this.compass = document.getElementById('compass');
    this.onTeleport = null;
    this.paintOverview();
    this.buildMenu();
    document.getElementById('menu-close').addEventListener('click', () => this.setMenu(false));
    this.refreshLandmarks();
  }

  paintOverview() {
    const w = 512;
    const h = 512;
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    const b = this.world.bounds;
    const project = (x, z) => [
      ((x - b.minX) / (b.maxX - b.minX)) * w,
      ((z - b.minZ) / (b.maxZ - b.minZ)) * h,
    ];
    ctx.fillStyle = '#163044';
    ctx.fillRect(0, 0, w, h);
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#6e8ea0';
    for (const chunk of this.world.chunks.values()) {
      for (const water of chunk.waters) {
        if (water.pts.length < 4) continue;
        ctx.beginPath();
        const [x0, z0] = project(water.pts[0], water.pts[1]);
        ctx.moveTo(x0, z0);
        for (let i = 2; i < water.pts.length; i += 2) {
          const [x, z] = project(water.pts[i], water.pts[i + 1]);
          ctx.lineTo(x, z);
        }
        ctx.stroke();
      }
    }
    for (const road of this.world.overviewRoads) {
      ctx.strokeStyle = road.cls <= 2 ? '#e6d7a2' : '#8ea0ae';
      ctx.lineWidth = road.cls <= 2 ? 2.4 : 1.2;
      ctx.beginPath();
      const pts = road.pts;
      const [x0, z0] = project(pts[0], pts[1]);
      ctx.moveTo(x0, z0);
      for (let i = 2; i < pts.length; i += 2) {
        const [x, z] = project(pts[i], pts[i + 1]);
        ctx.lineTo(x, z);
      }
      ctx.stroke();
    }
    this.overview = canvas;
    this.project = project;
  }

  buildMenu() {
    this.list.innerHTML = '';
    this.pois.forEach((poi, index) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'landmark';
      btn.innerHTML = `<b>${index + 1}. ${poi.name}</b><span>${poi.blurb}</span><i>${this.found.has(poi.id) ? 'found' : ''}</i>`;
      btn.addEventListener('click', () => {
        this.onTeleport?.(poi);
        this.setMenu(false);
      });
      this.list.appendChild(btn);
    });
  }

  setMenu(open) {
    this.menuOpen = open;
    this.menu.hidden = !open;
    if (open) document.exitPointerLock();
  }

  toggleMenu() {
    this.setMenu(!this.menuOpen);
  }

  discover(x, z) {
    let changed = false;
    for (const poi of this.pois) {
      if (this.found.has(poi.id)) continue;
      if (Math.hypot(poi.x - x, poi.z - z) < 22) {
        this.found.add(poi.id);
        changed = true;
      }
    }
    if (changed) {
      localStorage.setItem(FOUND_KEY, JSON.stringify([...this.found]));
      this.refreshLandmarks();
      this.buildMenu();
    }
  }

  refreshLandmarks() {
    this.landEl.textContent = `Landmarks ${this.found.size}/${this.pois.length}`;
  }

  update({ playerX, playerZ, heading, speed, driving, prompt, firstPerson, envLabel, debug, fps, drawCalls, triangles, chunks }) {
    this.clockEl.textContent = envLabel;
    this.promptEl.textContent = prompt || '';
    this.speedEl.hidden = !driving;
    if (driving) this.speedEl.textContent = `${Math.round(Math.abs(speed) * 3.6)} km/h`;
    this.cross.hidden = !firstPerson;
    this.drawMap(playerX, playerZ, heading);
    this.drawCompass(heading);
    if (this.debugOn) {
      this.debugEl.hidden = false;
      this.debugEl.textContent = debug || `fps ${fps.toFixed(0)}\ndraw calls ${drawCalls}\ntriangles ${triangles}\nchunks ${chunks}\n${playerX.toFixed(0)}, ${playerZ.toFixed(0)}`;
    } else {
      this.debugEl.hidden = true;
    }
  }

  drawMap(px, pz, heading) {
    const ctx = this.map.getContext('2d');
    const w = this.map.width;
    const h = this.map.height;
    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(this.overview, 0, 0, w, h);
    const b = this.world.bounds;
    const sx = ((px - b.minX) / (b.maxX - b.minX)) * w;
    const sy = ((pz - b.minZ) / (b.maxZ - b.minZ)) * h;
    for (const poi of this.pois) {
      const x = ((poi.x - b.minX) / (b.maxX - b.minX)) * w;
      const y = ((poi.z - b.minZ) / (b.maxZ - b.minZ)) * h;
      ctx.fillStyle = this.found.has(poi.id) ? '#e2b657' : '#f4efe4';
      ctx.fillRect(x - 1.5, y - 1.5, 3, 3);
    }
    ctx.save();
    ctx.translate(sx, sy);
    ctx.rotate(heading);
    ctx.fillStyle = '#e2b657';
    ctx.beginPath();
    ctx.moveTo(0, -7);
    ctx.lineTo(5, 6);
    ctx.lineTo(-5, 6);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  drawCompass(heading) {
    const ctx = this.compass.getContext('2d');
    const w = this.compass.width;
    const h = this.compass.height;
    ctx.clearRect(0, 0, w, h);
    const deg = (heading * 180) / Math.PI;
    const names = { 0: 'N', 45: 'NE', 90: 'E', 135: 'SE', 180: 'S', 225: 'SW', 270: 'W', 315: 'NW' };
    ctx.font = '12px Avenir Next, Segoe UI, sans-serif';
    ctx.textAlign = 'center';
    for (let t = -180; t <= 540; t += 15) {
      let delta = t - deg;
      delta = ((delta + 540) % 360) - 180;
      const x = w / 2 + delta * 2.4;
      if (x < 0 || x > w) continue;
      ctx.fillStyle = t % 90 === 0 ? '#e2b657' : 'rgba(244,239,228,0.7)';
      ctx.fillRect(x, h - 10, t % 45 === 0 ? 2 : 1, t % 45 === 0 ? 8 : 4);
      if (names[t % 360]) ctx.fillText(names[((t % 360) + 360) % 360], x, 16);
    }
  }
}

function readFound() {
  try {
    return JSON.parse(localStorage.getItem(FOUND_KEY) || '[]');
  } catch {
    return [];
  }
}
