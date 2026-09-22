import * as THREE from 'three';

export class Environment {
  constructor(scene, renderer) {
    this.scene = scene;
    this.renderer = renderer;
    this.time = 0.3;
    this.rainOn = false;
    this.sun = new THREE.DirectionalLight('#fff4e0', 2.4);
    this.sun.target.position.set(0, 0, 0);
    this.hemi = new THREE.HemisphereLight('#c5d6ea', '#6d7a48', 0.72);
    this.ambient = new THREE.AmbientLight('#8ea0b8', 0.28);
    scene.add(this.sun, this.sun.target, this.hemi, this.ambient);
    scene.fog = new THREE.Fog('#c5d3de', 220, 2400);

    const skyGeo = new THREE.SphereGeometry(3800, 24, 16);
    this.sky = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      glslVersion: THREE.GLSL3,
      uniforms: {
        uSun: { value: new THREE.Vector3(0.2, 0.6, 0.2) },
        uZenith: { value: new THREE.Color('#7eb4de') },
        uHorizon: { value: new THREE.Color('#d5e2ea') },
        uHaze: { value: 0.45 },
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
          float h = clamp(dir.y, -0.05, 1.0);
          vec3 col = mix(uHorizon, uZenith, smoothstep(-0.02, 0.55, h));
          float sunDot = pow(max(dot(dir, normalize(uSun)), 0.0), 360.0);
          col += vec3(1.0, 0.9, 0.7) * sunDot;
          col = mix(col, uHorizon, uHaze * (1.0 - smoothstep(0.0, 0.45, dir.y)));
          fragColor = vec4(col, 1.0);
        }
      `,
    });
    this.skyMesh = new THREE.Mesh(skyGeo, this.sky);
    this.skyMesh.frustumCulled = false;
    this.skyMesh.renderOrder = -1;
    scene.add(this.skyMesh);

    const count = 1600;
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
      size: 0.08,
      transparent: true,
      opacity: 0.0,
      depthWrite: false,
    }));
    this.rain.frustumCulled = false;
    scene.add(this.rain);
    this._sun = new THREE.Vector3();
  }

  get dayFactor() {
    const elev = Math.sin(this.time * Math.PI * 2);
    return THREE.MathUtils.clamp((elev + 0.05) / 0.85, 0, 1);
  }

  label() {
    const t = this.time;
    if (t < 0.18 || t > 0.82) return 'Night';
    if (t < 0.28) return 'Morning';
    if (t < 0.55) return 'Day';
    if (t < 0.7) return 'Afternoon';
    return 'Dusk';
  }

  setRain(on) {
    this.rainOn = on;
  }

  toggleRain() {
    this.rainOn = !this.rainOn;
    return this.rainOn;
  }

  update(dt, camera, materials) {
    this.time = (this.time + dt / 520) % 1;
    const ang = this.time * Math.PI * 2;
    const elev = Math.sin(ang);
    const az = Math.cos(ang);
    this._sun.set(az, Math.max(elev, -0.2), 0.35).normalize();
    this.sun.position.copy(camera.position).addScaledVector(this._sun, 300);
    this.sun.target.position.copy(camera.position);
    const day = this.dayFactor;
    this.sun.intensity = 0.15 + day * 2.5;
    this.sun.color.set(day > 0.4 ? '#fff4e0' : '#ffb08a');
    this.hemi.intensity = 0.18 + day * 0.6;
    this.ambient.intensity = 0.12 + (1 - day) * 0.18;
    this.renderer.toneMappingExposure = 0.62 + day * 0.55;
    const horizon = day > 0.35 ? '#d5e2ea' : '#1b2838';
    const zenith = day > 0.35 ? '#7eb4de' : '#070b14';
    this.sky.uniforms.uSun.value.copy(this._sun);
    this.sky.uniforms.uHorizon.value.set(horizon);
    this.sky.uniforms.uZenith.value.set(zenith);
    this.sky.uniforms.uHaze.value = this.rainOn ? 0.72 : 0.42;
    this.scene.fog.color.set(this.rainOn ? '#b7c3cc' : horizon);
    this.scene.fog.near = this.rainOn ? 80 : 180;
    this.scene.fog.far = this.rainOn ? 1400 : 2500;
    this.skyMesh.position.copy(camera.position);
    materials.wall.emissiveIntensity = 0.05 + (1 - day) * 0.85;
    materials.lampHead.emissiveIntensity = 0.15 + (1 - day) * 1.3;
    materials.road.roughness = this.rainOn ? 0.25 : 0.92;
    materials.terrain.roughness = this.rainOn ? 0.55 : 1;
    materials.water.uniforms.uTime.value += dt;

    const pos = this.rain.geometry.attributes.position;
    this.rain.material.opacity = this.rainOn ? 0.55 : 0;
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
