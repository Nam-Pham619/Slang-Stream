// ══════════════════════════════════════
//  ANIMATED BACKGROUND
// ══════════════════════════════════════
const bgCanvas = document.getElementById('bg-canvas');
const bgCtx    = bgCanvas.getContext('2d');
let bgW, bgH;

function resizeBg() {
  bgW = bgCanvas.width  = window.innerWidth;
  bgH = bgCanvas.height = window.innerHeight;
}
resizeBg();
window.addEventListener('resize', resizeBg);

// Particles
const bgParticles = [];
const PALETTE = [
  [0,229,255],[255,77,109],[184,255,78],[255,209,102],[160,100,255]
];

class BgParticle {
  constructor() { this.reset(true); }
  reset(init) {
    this.x       = Math.random() * bgW;
    this.y       = init ? Math.random() * bgH : bgH + 10;
    this.vx      = (Math.random() - .5) * .3;
    this.vy      = -(Math.random() * .6 + .1);
    this.size    = Math.random() * 2 + .5;
    this.life    = 0;
    this.maxLife = 200 + Math.random() * 300;
    this.color   = PALETTE[Math.floor(Math.random() * PALETTE.length)];
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.life++;
    if (this.life > this.maxLife || this.y < -10) this.reset();
  }
  draw() {
    const a = Math.min(this.life / 40, 1) * Math.min((this.maxLife - this.life) / 40, 1);
    bgCtx.beginPath();
    bgCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    bgCtx.fillStyle = `rgba(${this.color.join(',')},${a * .5})`;
    bgCtx.fill();
  }
}

for (let i = 0; i < 160; i++) bgParticles.push(new BgParticle());

let lineT = 0;

function drawBg() {
  bgCtx.clearRect(0, 0, bgW, bgH);

  // Dark overlay
  bgCtx.fillStyle = 'rgba(4,6,10,.97)';
  bgCtx.fillRect(0, 0, bgW, bgH);

  // Grid lines
  bgCtx.strokeStyle = 'rgba(30,42,58,.6)';
  bgCtx.lineWidth   = .5;
  for (let x = 0; x < bgW; x += 80) {
    bgCtx.beginPath(); bgCtx.moveTo(x, 0); bgCtx.lineTo(x, bgH); bgCtx.stroke();
  }
  for (let y = 0; y < bgH; y += 80) {
    bgCtx.beginPath(); bgCtx.moveTo(0, y); bgCtx.lineTo(bgW, y); bgCtx.stroke();
  }

  // Flow waves
  lineT += .004;
  [[0,229,255,.04],[255,77,109,.03],[184,255,78,.025]].forEach(([r,g,b,a], i) => {
    bgCtx.beginPath();
    for (let x = 0; x <= bgW; x += 4) {
      const y = bgH * .35
        + Math.sin(x * .008 + lineT + i * 1.1) * 60
        + Math.sin(x * .015 + lineT * .7 + i * .8) * 30;
      x === 0 ? bgCtx.moveTo(x, y) : bgCtx.lineTo(x, y);
    }
    bgCtx.strokeStyle = `rgba(${r},${g},${b},${a})`;
    bgCtx.lineWidth   = 1.5;
    bgCtx.stroke();
  });

  bgParticles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(drawBg);
}

drawBg();
