import * as THREE from 'three';

function canvasTex(w, h, draw, repeat = true) {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  draw(canvas.getContext('2d'), w, h);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = repeat ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;
  tex.anisotropy = 8;
  return tex;
}

function noise(ctx, w, h, paint) {
  const img = ctx.createImageData(w, h);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      const n = paint(x, y);
      img.data[i] = n[0];
      img.data[i + 1] = n[1];
      img.data[i + 2] = n[2];
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
}

export function createMaterials() {
  const grass = canvasTex(128, 128, (ctx, w, h) => {
    noise(ctx, w, h, (x, y) => {
      const n = (Math.sin(x * 0.7) * Math.cos(y * 0.5) + Math.sin(x * 0.17 + y * 0.23)) * 18;
      return [150 + n, 158 + n, 140 + n];
    });
  });
  const facade = canvasTex(128, 128, (ctx) => {
    ctx.fillStyle = '#d9d2c6';
    ctx.fillRect(0, 0, 128, 128);
    for (let y = 8; y < 128; y += 32) {
      for (let x = 10; x < 128; x += 28) {
        ctx.fillStyle = '#24384a';
        ctx.fillRect(x, y, 14, 18);
        ctx.fillStyle = 'rgba(180, 210, 220, 0.35)';
        ctx.fillRect(x, y, 5, 18);
      }
    }
    ctx.fillStyle = '#b7aa9a';
    for (let y = 30; y < 128; y += 32) ctx.fillRect(0, y, 128, 2);
  });
  const windows = canvasTex(128, 128, (ctx) => {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, 128, 128);
    for (let y = 8; y < 128; y += 32) {
      for (let x = 10; x < 128; x += 28) {
        ctx.fillStyle = '#ffd27a';
        ctx.fillRect(x, y, 14, 18);
      }
    }
  });
  const asphalt = canvasTex(64, 128, (ctx) => {
    noise(ctx, 64, 128, (x, y) => {
      const n = (x * 13 + y * 7) % 17;
      const base = 58 + n;
      return [base, base, base + 2];
    });
    ctx.fillStyle = '#f2f2f2';
    ctx.fillRect(4, 0, 2, 128);
    ctx.fillRect(58, 0, 2, 128);
    ctx.fillStyle = '#e6c84a';
    for (let y = 8; y < 128; y += 32) ctx.fillRect(30, y, 4, 16);
  });
  const concrete = canvasTex(64, 64, (ctx, w, h) => {
    noise(ctx, w, h, (x, y) => {
      const n = (x * 3 + y * 5) % 11;
      return [170 + n, 166 + n, 158 + n];
    });
  });

  const terrain = new THREE.MeshStandardMaterial({
    map: grass,
    vertexColors: true,
    roughness: 1,
    metalness: 0,
  });
  const wall = new THREE.MeshStandardMaterial({
    map: facade,
    emissiveMap: windows,
    emissive: new THREE.Color('#ffcc88'),
    emissiveIntensity: 0.06,
    vertexColors: true,
    roughness: 0.82,
    metalness: 0.04,
    side: THREE.DoubleSide,
  });
  const roof = new THREE.MeshStandardMaterial({
    color: '#6e675f',
    vertexColors: true,
    roughness: 0.95,
    metalness: 0,
    side: THREE.DoubleSide,
  });
  const road = new THREE.MeshStandardMaterial({
    map: asphalt,
    roughness: 0.92,
    metalness: 0,
    side: THREE.DoubleSide,
    polygonOffset: true,
    polygonOffsetFactor: -2,
    polygonOffsetUnits: -2,
  });
  const sidewalk = new THREE.MeshStandardMaterial({
    map: concrete,
    roughness: 0.95,
    metalness: 0,
    side: THREE.DoubleSide,
    polygonOffset: true,
    polygonOffsetFactor: -1,
    polygonOffsetUnits: -1,
  });
  const trunk = new THREE.MeshStandardMaterial({ color: '#5a4636', roughness: 1 });
  const crown = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 1, vertexColors: false });
  crown.vertexColors = false;
  const lamp = new THREE.MeshStandardMaterial({ color: '#2c3136', roughness: 0.6, metalness: 0.2 });
  const lampHead = new THREE.MeshStandardMaterial({
    color: '#fff4cf',
    emissive: '#ffd27a',
    emissiveIntensity: 0.4,
    roughness: 0.4,
  });
  const water = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: true,
    side: THREE.DoubleSide,
    glslVersion: THREE.GLSL3,
    uniforms: {
      uTime: { value: 0 },
      uColor: { value: new THREE.Color('#3f7384') },
      uDeep: { value: new THREE.Color('#173743') },
    },
    vertexShader: `
      uniform float uTime;
      out float vFres;
      out vec3 vWorld;
      void main() {
        vec3 p = position;
        p.y += sin(position.x * 0.31 + uTime * 1.3) * 0.07 + cos(position.z * 0.24 + uTime * 0.9) * 0.05;
        vec4 world = modelMatrix * vec4(p, 1.0);
        vWorld = world.xyz;
        vec4 mv = viewMatrix * world;
        vec3 n = normalize(normalMatrix * vec3(0.0, 1.0, 0.0));
        vFres = pow(1.0 - abs(dot(normalize(-mv.xyz), n)), 2.2);
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: `
      precision highp float;
      uniform vec3 uColor;
      uniform vec3 uDeep;
      in float vFres;
      in vec3 vWorld;
      out vec4 fragColor;
      void main() {
        float rip = sin(vWorld.x * 0.45 + vWorld.z * 0.2) * 0.5 + 0.5;
        vec3 col = mix(uDeep, uColor, rip);
        col += vec3(0.75, 0.85, 0.9) * vFres * 0.55;
        fragColor = vec4(col, 0.86);
      }
    `,
  });

  return { grass, facade, windows, asphalt, concrete, terrain, wall, roof, road, sidewalk, trunk, crown, lamp, lampHead, water };
}

export const TYPE_RGB = [
  [0.78, 0.55, 0.42],
  [0.82, 0.78, 0.7],
  [0.62, 0.73, 0.8],
  [0.9, 0.86, 0.74],
  [0.55, 0.56, 0.54],
  [0.66, 0.34, 0.3],
];

export function colorFor(building) {
  const base = TYPE_RGB[building.type] || TYPE_RGB[0];
  const salt = Math.abs(Math.sin(building.minX * 0.17 + building.minZ * 0.13));
  const j = (salt - 0.5) * 0.08;
  const high = building.flags & 1 ? 0.08 : 0;
  return [base[0] + j, base[1] + j * 0.4 + high, base[2] + j * 0.2 + high];
}
