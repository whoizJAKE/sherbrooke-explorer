import * as THREE from 'three';

export class Environment {
  constructor(scene, renderer) {
    this.scene = scene;
    this.renderer = renderer;
    this.time = 0.36;
    this.locked = false;
    this.rainOn = false;
    this.quality = 'high';
    this.sun = new THREE.DirectionalLight('#fff5e4', 2.05);
    this.sun.target.position.set(0, 0, 0);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    this.sun.shadow.camera.near = 10;
    this.sun.shadow.camera.far = 340;
    const span = 82;
    this.sun.shadow.camera.left = -span;
    this.sun.shadow.camera.right = span;
    this.sun.shadow.camera.top = span;
    this.sun.shadow.camera.bottom = -span;
    this.sun.shadow.bias = -0.00022;
    this.sun.shadow.normalBias = 0.12;
    this.sun.shadow.radius = 1.4;
    this.hemi = new THREE.HemisphereLight('#c9d7e6', '#6a7350', 0.62);
    this.ambient = new THREE.AmbientLight('#93a4b8', 0.2);
    scene.add(this.sun, this.sun.target, this.hemi, this.ambient);
    scene.fog = new THREE.Fog('#d7e3ec', 260, 3200);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.sky = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      glslVersion: THREE.GLSL3,
      uniforms: {
        uSun: { value: new THREE.Vector3(0.2, 0.7, 0.25) },
        uZenith: { value: new THREE.Color('#8ebbe0') },
        uHorizon: { value: new THREE.Color('#d7e3ec') },
        uHaze: { value: 0.38 },
      },
      vertexShader: `
        out vec3 vDir;
        void main() {
          vDir = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float;
        in vec3 vDir;
        uniform vec3 uSun;
        uniform vec3 uZenith;
        uniform vec3 uHorizon;
        uniform float uHaze;
        out vec4 fragColor;
        void main() {
          vec3 dir = normalize(vDir);
          float h = clamp(dir.y, -0.04, 1.0);
          vec3 col = mix(uHorizon, uZenith, smoothstep(-0.02, 0.55, h));
          vec3 sun = normalize(uSun);
          float disc = pow(max(dot(dir, sun), 0.0), 480.0);
          float glow = pow(max(dot(dir, sun), 0.0), 7.0);
          col += vec3(1.0, 0.95, 0.86) * disc;
          col += vec3(1.0, 0.92, 0.8) * glow * 0.16;
          col = mix(col, uHorizon, uHaze * (1.0 - smoothstep(0.0, 0.5, dir.y)));
          fragColor = vec4(col, 1.0);
        }
      `,
    });
    this.skyMesh = new THREE.Mesh(new THREE.SphereGeometry(4200, 28, 16), this.sky);
    this.skyMesh.frustumCulled = false;
    this.skyMesh.renderOrder = -1;
    scene.add(this.skyMesh);

    const count = 900;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 70;
      positions[i * 3 + 1] = Math.random() * 28;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 70;
    }
    const rainGeo = new THREE.BufferGeometry();
    rainGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.rain = new THREE.Points(rainGeo, new THREE.PointsMaterial({
      color: '#d5e4ee',
      size: 0.07,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    }));
    this.rain.frustumCulled = false;
    scene.add(this.rain);
    this._sun = new THREE.Vector3();
    this._horizon = new THREE.Color();
    this._zenith = new THREE.Color();
    this._dayHorizon = new THREE.Color('#d7e3ec');
    this._nightHorizon = new THREE.Color('#1a2433');
    this._dayZenith = new THREE.Color('#8ebbe0');
    this._nightZenith = new THREE.Color('#070b14');
    this._pmrem = new THREE.PMREMGenerator(renderer);
    this._envScene = new THREE.Scene();
    this._envSky = new THREE.Mesh(new THREE.SphereGeometry(40, 24, 14), this.sky);
    this._envScene.add(this._envSky);
    this.envMap = null;
    this._envStamp = '';
    this.refreshEnvironment();
  }

  get dayFactor() {
    const elev = Math.sin(this.time * Math.PI * 2);
    return THREE.MathUtils.clamp((elev + 0.08) / 0.9, 0, 1);
  }

  labelKey() {
    const t = this.time;
    if (t < 0.18 || t > 0.82) return 'night';
    if (t < 0.28) return 'morning';
    if (t < 0.55) return 'day';
    if (t < 0.7) return 'afternoon';
    return 'dusk';
  }

  setRain(on) {
    this.rainOn = on;
  }

  toggleRain() {
    this.rainOn = !this.rainOn;
    return this.rainOn;
  }

  applyQuality(level) {
    this.quality = level === 'low' ? 'low' : 'high';
    const high = this.quality === 'high';
    this.renderer.shadowMap.enabled = high;
    this.sun.castShadow = high;
    const size = high ? 2048 : 256;
    if (this.sun.shadow.mapSize.x !== size) {
      this.sun.shadow.mapSize.set(size, size);
      if (this.sun.shadow.map) {
        this.sun.shadow.map.dispose();
        this.sun.shadow.map = null;
      }
    }
  }

  refreshEnvironment() {
    const next = this._pmrem.fromScene(this._envScene, 0.04);
    if (this.envMap) this.envMap.dispose();
    this.envMap = next.texture;
    this.scene.environment = this.envMap;
    this._envStamp = this.dayFactor > 0.42 ? 'day' : 'night';
  }

  update(dt, camera, materials, focus) {
    if (!this.locked) this.time = (this.time + dt / 720) % 1;
    const ang = this.time * Math.PI * 2;
    const elev = Math.sin(ang);
    const az = Math.cos(ang);
    this._sun.set(az * 0.85, Math.max(elev, -0.15), 0.28).normalize();
    const aim = focus || camera.position;
    this.sun.position.copy(aim).addScaledVector(this._sun, 190);
    this.sun.target.position.copy(aim);
    this.sun.target.updateMatrixWorld();
    const day = this.dayFactor;
    this.sun.intensity = 0.05 + day * 2.05;
    this.sun.color.set(this._sun.y > 0.45 ? '#fff5e4' : '#ffd8b0');
    this.hemi.intensity = 0.16 + day * 0.5;
    this.hemi.color.set(day > 0.35 ? '#c9d7e6' : '#6d7f99');
    this.hemi.groundColor.set(day > 0.35 ? '#6a7350' : '#2a3328');
    this.ambient.intensity = 0.1 + day * 0.12 + (1 - day) * 0.16;
    this.renderer.toneMappingExposure = 0.72 + day * 0.28;
    this._horizon.copy(this._dayHorizon).lerp(this._nightHorizon, 1 - day);
    this._zenith.copy(this._dayZenith).lerp(this._nightZenith, 1 - day);
    if (this.rainOn && day > 0.3) this._horizon.lerp(new THREE.Color('#c5ced4'), 0.45);
    this.sky.uniforms.uSun.value.copy(this._sun);
    this.sky.uniforms.uHorizon.value.copy(this._horizon);
    this.sky.uniforms.uZenith.value.copy(this._zenith);
    this.sky.uniforms.uHaze.value = this.rainOn ? 0.68 : 0.34 + (1 - day) * 0.12;
    this.scene.fog.color.copy(this._horizon);
    this.scene.fog.near = this.rainOn ? 70 : 240;
    this.scene.fog.far = this.rainOn ? 1200 : 3000 + day * 400;
    this.skyMesh.position.copy(camera.position);
    const glow = 0.012 + (1 - day) * 1.15;
    for (const facade of materials.facades) facade.emissiveIntensity = glow;
    materials.lampHead.emissiveIntensity = 0.12 + (1 - day) * 1.35;
    materials.road.roughness = this.rainOn ? 0.4 : 0.94;
    materials.sidewalk.roughness = this.rainOn ? 0.55 : 0.94;
    materials.terrain.roughness = this.rainOn ? 0.68 : 0.98;
    if (materials.water.uniforms.uSun) materials.water.uniforms.uSun.value.copy(this._sun);
    materials.water.uniforms.uTime.value += dt;
    const stamp = day > 0.42 ? 'day' : 'night';
    if (stamp !== this._envStamp) this.refreshEnvironment();

    const pos = this.rain.geometry.attributes.position;
    this.rain.material.opacity = this.rainOn ? 0.45 : 0;
    this.rain.position.copy(camera.position);
    if (this.rainOn) {
      for (let i = 0; i < pos.count; i++) {
        let y = pos.getY(i) - dt * 18;
        if (y < 0) y = 28;
        pos.setY(i, y);
      }
      pos.needsUpdate = true;
    }
  }
}
