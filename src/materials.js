import * as THREE from 'three';

function configure(tex, repeat, color) {
  tex.colorSpace = color ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  tex.wrapS = tex.wrapT = repeat ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;
  tex.anisotropy = 8;
  return tex;
}

function loadTexture(url, repeat = true, color = true) {
  return new Promise((resolve, reject) => {
    new THREE.TextureLoader().load(url, (tex) => resolve(configure(tex, repeat, color)), undefined, reject);
  });
}

function dashTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 4;
  canvas.height = 64;
  const g = canvas.getContext('2d');
  g.clearRect(0, 0, 4, 64);
  g.fillStyle = '#e6c94a';
  g.fillRect(0, 2, 4, 24);
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

function lineMaterial(color, map = null) {
  return new THREE.MeshStandardMaterial({
    color,
    map,
    transparent: Boolean(map),
    alphaTest: map ? 0.4 : 0,
    roughness: 0.62,
    metalness: 0,
    side: THREE.DoubleSide,
    polygonOffset: true,
    polygonOffsetFactor: -4,
    polygonOffsetUnits: -4,
  });
}

export async function createMaterials() {
  const base = import.meta.env.BASE_URL;
  const color = (name, repeat = true) => loadTexture(`${base}textures/${name}`, repeat, true);
  const data = (name) => loadTexture(`${base}textures/${name}`, true, false);
  const [grass, grassN, asphalt, asphaltN, asphaltR, concrete, concreteN, roofMap, roofN, brickMap, brickN, brickLights, stoneMap, stoneN, stoneLights, glassMap, glassN, glassLights, maple, autumn, pine] = await Promise.all([
    color('grass.png'),
    data('grass-normal.png'),
    color('asphalt.png'),
    data('asphalt-normal.png'),
    data('asphalt-rough.png'),
    color('concrete.png'),
    data('concrete-normal.png'),
    color('roof.png'),
    data('roof-normal.png'),
    color('brick.png'),
    data('brick-normal.png'),
    color('brick-lights.png'),
    color('stone.png'),
    data('stone-normal.png'),
    color('stone-lights.png'),
    color('glass.png'),
    data('glass-normal.png'),
    color('glass-lights.png'),
    color('tree-maple.png', false),
    color('tree-autumn.png', false),
    color('tree-pine.png', false),
  ]);

  const terrain = new THREE.MeshStandardMaterial({
    map: grass,
    normalMap: grassN,
    normalScale: new THREE.Vector2(0.55, 0.55),
    vertexColors: true,
    roughness: 0.96,
    metalness: 0,
    side: THREE.DoubleSide,
  });
  const brick = wallMaterial(brickMap, brickN, brickLights, 0.86, 0.02, 0.9);
  const stone = wallMaterial(stoneMap, stoneN, stoneLights, 0.8, 0.04, 0.75);
  const glass = wallMaterial(glassMap, glassN, glassLights, 0.16, 0.55, 0.4);
  glass.envMapIntensity = 1.05;
  const roof = new THREE.MeshStandardMaterial({
    map: roofMap,
    normalMap: roofN,
    normalScale: new THREE.Vector2(0.7, 0.7),
    roughness: 0.9,
    metalness: 0.04,
    side: THREE.DoubleSide,
  });
  const road = new THREE.MeshStandardMaterial({
    map: asphalt,
    normalMap: asphaltN,
    roughnessMap: asphaltR,
    normalScale: new THREE.Vector2(0.45, 0.45),
    roughness: 0.92,
    metalness: 0.04,
    side: THREE.DoubleSide,
    polygonOffset: true,
    polygonOffsetFactor: -1,
    polygonOffsetUnits: -1,
    envMapIntensity: 0.35,
  });
  const sidewalk = new THREE.MeshStandardMaterial({
    map: concrete,
    normalMap: concreteN,
    normalScale: new THREE.Vector2(0.4, 0.4),
    roughness: 0.94,
    metalness: 0,
    side: THREE.DoubleSide,
    polygonOffset: true,
    polygonOffsetFactor: -1,
    polygonOffsetUnits: -1,
  });
  const tree = (map) => new THREE.MeshStandardMaterial({
    map,
    alphaTest: 0.35,
    side: THREE.DoubleSide,
    roughness: 0.84,
    metalness: 0,
  });
  const lamp = new THREE.MeshStandardMaterial({ color: '#3a4148', roughness: 0.5, metalness: 0.4 });
  const lampHead = new THREE.MeshStandardMaterial({
    color: '#fff4cf',
    emissive: '#ffd27a',
    emissiveIntensity: 0.35,
    roughness: 0.35,
  });
  const barrier = new THREE.MeshStandardMaterial({
    color: '#c5c0b6',
    roughness: 0.86,
    metalness: 0.02,
    side: THREE.DoubleSide,
  });
  const pier = new THREE.MeshStandardMaterial({
    color: '#b7b2a8',
    roughness: 0.9,
    metalness: 0,
    side: THREE.DoubleSide,
  });
  const door = new THREE.MeshStandardMaterial({ color: '#2a241f', roughness: 0.62, metalness: 0.08 });
  const water = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: true,
    side: THREE.DoubleSide,
    glslVersion: THREE.GLSL3,
    uniforms: {
      uTime: { value: 0 },
      uColor: { value: new THREE.Color('#3f655c') },
      uDeep: { value: new THREE.Color('#142824') },
      uSun: { value: new THREE.Vector3(0.3, 0.8, 0.2) },
    },
    vertexShader: `
      uniform float uTime;
      out float vFres;
      out vec3 vWorld;
      out vec3 vNormal;
      void main() {
        vec3 p = position;
        float w1 = sin(position.x * 0.23 + uTime * 0.7) * 0.05;
        float w2 = cos(position.z * 0.19 + uTime * 0.55) * 0.04;
        p.y += w1 + w2;
        vec4 world = modelMatrix * vec4(p, 1.0);
        vWorld = world.xyz;
        vec3 n = normalize(vec3(-cos(position.x * 0.23 + uTime * 0.7) * 0.012, 1.0, sin(position.z * 0.19 + uTime * 0.55) * 0.01));
        vNormal = normalize(mat3(modelMatrix) * n);
        vec4 mv = viewMatrix * world;
        vFres = pow(1.0 - abs(dot(normalize(-mv.xyz), normalize(normalMatrix * n))), 2.4);
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: `
      precision highp float;
      uniform vec3 uColor;
      uniform vec3 uDeep;
      uniform vec3 uSun;
      in float vFres;
      in vec3 vWorld;
      in vec3 vNormal;
      out vec4 fragColor;
      void main() {
        float rip = sin(vWorld.x * 0.31 + vWorld.z * 0.17) * 0.5 + 0.5;
        vec3 col = mix(uDeep, uColor, 0.35 + rip * 0.25);
        float spec = pow(max(dot(normalize(vNormal), normalize(uSun)), 0.0), 90.0);
        col += vec3(0.78, 0.84, 0.8) * spec * 0.28;
        col = mix(col, vec3(0.72, 0.8, 0.78), vFres * 0.38);
        fragColor = vec4(col, 0.9);
      }
    `,
  });

  return {
    terrain,
    brick,
    stone,
    glass,
    roof,
    road,
    sidewalk,
    lamp,
    lampHead,
    water,
    barrier,
    concrete: pier,
    door,
    markDash: lineMaterial('#ffffff', dashTexture()),
    markSolid: lineMaterial('#e6c94a'),
    markWhite: lineMaterial('#f3f1ea'),
    trees: { maple: tree(maple), autumn: tree(autumn), pine: tree(pine) },
    facades: [brick, stone, glass],
  };
}

function wallMaterial(map, normalMap, emissiveMap, roughness, metalness, normalStrength) {
  return new THREE.MeshStandardMaterial({
    map,
    normalMap,
    normalScale: new THREE.Vector2(normalStrength, normalStrength),
    emissiveMap,
    emissive: new THREE.Color('#ffe0b0'),
    emissiveIntensity: 0.02,
    roughness,
    metalness,
    vertexColors: true,
    side: THREE.DoubleSide,
    envMapIntensity: 0.55,
  });
}

export function facadeKey(building) {
  if ((building.flags & 1) || building.type === 2) return 'glass';
  if (building.type === 1 || building.type === 3 || building.type === 4) return 'stone';
  return 'brick';
}
