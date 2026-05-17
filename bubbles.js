// ══════════════════════════════════════
//  BUBBLE LAYER
//  Draws soft, translucent floating
//  bubbles on the bubble-canvas layer.
// ══════════════════════════════════════
const bubCanvas = document.getElementById('bubble-canvas');
const bubCtx    = bubCanvas.getContext('2d');
let bubW, bubH;

function resizeBub() {
  bubW = bubCanvas.width  = window.innerWidth;
  bubH = bubCanvas.height = window.innerHeight;
}
resizeBub();
window.addEventListener('resize', resizeBub);

const BUB_COLORS = [
  [0, 229, 255],
  [255, 77, 109],
  [184, 255, 78],
  [255, 209, 102],
  [160, 100, 255]
];

class Bubble {
  constructor(init) {
    this.reset(init);
  }
  reset(init) {
    this.r    = 12 + Math.random() * 40;          // radius
    this.x    = Math.random() * bubW;
    this.y    = init ? Math.random() * bubH : bubH + this.r * 2;
    this.vx   = (Math.random() - .5) * .4;
    this.vy   = -(Math.random() * .55 + .15);
    this.life = 0;
    this.maxLife = 300 + Math.random() * 400;
    this.col  = BUB_COLORS[Math.floor(Math.random() * BUB_COLORS.length)];
    this.wobble = Math.random() * Math.PI * 2;
    this.wobbleSpeed = .008 + Math.random() * .012;
  }
  update() {
    this.wobble += this.wobbleSpeed;
    this.x += this.vx + Math.sin(this.wobble) * .3;
    this.y += this.vy;
    this.life++;
    if (this.life > this.maxLife || this.y < -this.r * 2) this.reset(false);
  }
  draw() {
    const progress = this.life / this.maxLife;
    // Fade in then fade out
    const alpha = Math.min(progress / .12, 1) * Math.min((1 - progress) / .1, 1) * .18;
    if (alpha <= 0) return;

    const [r, g, b] = this.col;

    // Outer ring
    bubCtx.beginPath();
    bubCtx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    bubCtx.strokeStyle = `rgba(${r},${g},${b},${alpha * 1.6})`;
    bubCtx.lineWidth   = 1;
    bubCtx.stroke();

    // Faint fill
    bubCtx.fillStyle = `rgba(${r},${g},${b},${alpha * .3})`;
    bubCtx.fill();

    // Inner highlight (top-left glint)
    const glintR = this.r * .28;
    const gx = this.x - this.r * .3;
    const gy = this.y - this.r * .3;
    const grd = bubCtx.createRadialGradient(gx, gy, 0, gx, gy, glintR);
    grd.addColorStop(0, `rgba(255,255,255,${alpha * 1.2})`);
    grd.addColorStop(1, `rgba(255,255,255,0)`);
    bubCtx.beginPath();
    bubCtx.arc(gx, gy, glintR, 0, Math.PI * 2);
    bubCtx.fillStyle = grd;
    bubCtx.fill();
  }
}

// Spawn a healthy starting pool
const BUBBLES = [];
for (let i = 0; i < 35; i++) BUBBLES.push(new Bubble(true));

function drawBubbles() {
  bubCtx.clearRect(0, 0, bubW, bubH);
  BUBBLES.forEach(b => { b.update(); b.draw(); });
  requestAnimationFrame(drawBubbles);
}

drawBubbles();
