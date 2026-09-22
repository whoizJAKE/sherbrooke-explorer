// City bed and rain are looped files in public/audio/. They are synthesized
// placeholders (filtered noise), not field recordings. The engine note is a
// live oscillator so it can follow the car.

export class AudioBus {
  constructor() {
    this.started = false;
  }

  start() {
    if (this.started) return;
    this.started = true;
    const base = import.meta.env.BASE_URL;
    this.bed = new Audio(`${base}audio/city-ambient.wav`);
    this.bed.loop = true;
    this.bed.volume = 0.26;
    this.rainAudio = new Audio(`${base}audio/rain.wav`);
    this.rainAudio.loop = true;
    this.rainAudio.volume = 0;
    this.bed.play().catch(() => {});
    this.rainAudio.play().catch(() => {});
    const Ctx = window.AudioContext || window.webkitAudioContext;
    this.ctx = new Ctx();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.value = 46;
    gain.gain.value = 0;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 220;
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    this.engine = osc;
    this.engineGain = gain;
    if (this.ctx.state === 'suspended') this.ctx.resume();
  }

  update({ driving, speed, rain }) {
    if (!this.started) return;
    const kmh = Math.abs(speed) * 3.6;
    this.bed.volume = driving ? 0.18 : 0.26;
    this.rainAudio.volume = rain ? 0.38 : 0;
    const vol = driving ? Math.min(0.12, kmh / 280) : 0;
    const now = this.ctx.currentTime;
    this.engineGain.gain.setTargetAtTime(vol, now, 0.08);
    this.engine.frequency.setTargetAtTime(40 + kmh * 0.9, now, 0.08);
  }
}
