export class Input {
  constructor(dom) {
    this.dom = dom;
    this.keys = new Set();
    this.edges = new Set();
    this.lookX = 0;
    this.lookY = 0;
    this.mouseIdle = 5;
    this.locked = false;
    this.forward = 0;
    this.strafe = 0;
    this.sprint = false;
    this.crouch = false;

    window.addEventListener('keydown', (e) => {
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
      if (e.code === 'F11') e.preventDefault();
      if (!this.keys.has(e.code)) this.edges.add(e.code);
      this.keys.add(e.code);
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('mousemove', (e) => {
      if (!this.locked && !e.buttons) return;
      this.lookX += e.movementX;
      this.lookY += e.movementY;
      this.mouseIdle = 0;
    });
    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === dom;
    });
    dom.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  requestLock() {
    if (document.pointerLockElement !== this.dom) this.dom.requestPointerLock();
  }

  consume(code) {
    const hit = this.edges.has(code);
    this.edges.delete(code);
    return hit;
  }

  poll(dt) {
    const down = (code) => this.keys.has(code);
    this.forward = (down('KeyW') || down('ArrowUp') ? 1 : 0) - (down('KeyS') || down('ArrowDown') ? 1 : 0);
    this.strafe = (down('KeyD') || down('ArrowRight') ? 1 : 0) - (down('KeyA') || down('ArrowLeft') ? 1 : 0);
    this.sprint = down('ShiftLeft') || down('ShiftRight');
    this.crouch = down('KeyC');
    this.mouseIdle += dt;
  }

  endFrame() {
    this.lookX = 0;
    this.lookY = 0;
  }
}
