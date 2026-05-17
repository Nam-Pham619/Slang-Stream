// ══════════════════════════════════════
//  LANGUAGE EVOLUTION
// ══════════════════════════════════════
let evoInitialized = false;

function initEvo() {
  if (evoInitialized) return;
  evoInitialized = true;
  buildEvoChart();
  buildEvoGrid();
}

function buildEvoChart() {
  const canvas = document.getElementById('evo-canvas');
  const ctx    = canvas.getContext('2d');
  canvas.width  = canvas.offsetWidth  * devicePixelRatio;
  canvas.height = canvas.offsetHeight * devicePixelRatio;
  ctx.scale(devicePixelRatio, devicePixelRatio);
  const W = canvas.offsetWidth, H = canvas.offsetHeight;

  const years = ['2018','2019','2020','2021','2022','2023','2024'];
  const words = ['rizz','slay','bussin','no cap','delulu','brain rot'];
  const trajectories = {
    'rizz':      [2,  4,  8,  15, 55, 98, 88],
    'slay':      [20, 28, 35, 50, 70, 85, 75],
    'bussin':    [5,  8,  20, 80, 90, 70, 45],
    'no cap':    [10, 25, 60, 88, 78, 60, 40],
    'delulu':    [0,  0,  2,  5,  12, 80, 85],
    'brain rot': [3,  5,  10, 20, 35, 70, 96]
  };
  const colors = ['#00e5ff','#ff4d6d','#ffd166','#b8ff4e','#b060ff','#ff6b35'];

  const pX = i => (i / (years.length - 1)) * (W - 80) + 40;
  const pY = v => H - 40 - (v / 100) * (H - 60);

  // Grid
  ctx.strokeStyle = 'rgba(30,42,58,.8)'; ctx.lineWidth = .5;
  for (let i = 0; i <= 10; i++) {
    const y = pY(i * 10);
    ctx.beginPath(); ctx.moveTo(40, y); ctx.lineTo(W - 20, y); ctx.stroke();
    ctx.fillStyle = 'rgba(107,122,148,.6)'; ctx.font = '10px Inter'; ctx.textAlign = 'right';
    ctx.fillText(i * 10, 35, y + 4);
  }
  years.forEach((yr, i) => {
    const x = pX(i);
    ctx.fillStyle = 'rgba(107,122,148,.6)'; ctx.font = '11px Inter'; ctx.textAlign = 'center';
    ctx.fillText(yr, x, H - 10);
  });

  // Lines, glow, dots, labels
  words.forEach((w, wi) => {
    const data = trajectories[w];
    const col  = colors[wi];
    ctx.beginPath();
    data.forEach((v, i) => { i === 0 ? ctx.moveTo(pX(i), pY(v)) : ctx.lineTo(pX(i), pY(v)); });
    ctx.strokeStyle = col; ctx.lineWidth = 2; ctx.stroke();
    ctx.shadowColor = col; ctx.shadowBlur = 8; ctx.stroke(); ctx.shadowBlur = 0;
    data.forEach((v, i) => {
      ctx.beginPath(); ctx.arc(pX(i), pY(v), 3.5, 0, Math.PI * 2);
      ctx.fillStyle = col; ctx.fill();
    });
    const lv = data[data.length - 1];
    ctx.fillStyle = col; ctx.font = '11px Space Mono'; ctx.textAlign = 'left';
    ctx.fillText(w, W - 18, pY(lv) + 4);
  });
}

function buildEvoGrid() {
  const grid = document.getElementById('evo-grid');
  const sparkData = {
    'rizz':                     [2,  4,  8,  15, 55, 98, 88],
    'slay':                     [20, 28, 35, 50, 70, 85, 75],
    'bussin':                   [5,  8,  20, 80, 90, 70, 45],
    'no cap':                   [10, 25, 60, 88, 78, 60, 40],
    'delulu':                   [0,  0,  2,  5,  12, 80, 85],
    'brain rot':                [3,  5,  10, 20, 35, 70, 96],
    'understood the assignment':[0,  0,  5,  20, 75, 65, 40],
    'era':                      [0,  3,  8,  18, 35, 90, 88],
    'lowkey':                   [15, 22, 35, 55, 60, 55, 48],
    'main character':           [0,  2,  10, 70, 82, 70, 50],
    'ate':                      [5,  8,  14, 30, 65, 85, 78],
    'giving':                   [2,  4,  10, 20, 40, 70, 75]
  };

  grid.innerHTML = Object.entries(sparkData).map(([word, data]) => {
    const trend = data[data.length - 1] > data[data.length - 2] ? 'up' : 'dn';
    const maxV  = Math.max(...data);
    const bars  = data.map(v =>
      `<div class="spark-bar" style="height:${(v / maxV) * 28}px"></div>`
    ).join('');
    const wdata = SLANG_DATA.find(d => d.word === word);
    const click = wdata
      ? `onclick="openModal(SLANG_DATA.find(d=>d.word==='${word.replace(/'/g,"\\'")}'))"`
      : '';
    return `
      <div class="evo-word-card" ${click}>
        <div class="evo-word-name">${word.toUpperCase()}</div>
        <div class="evo-spark">${bars}</div>
        <div class="evo-trend trend-${trend}">
          ${trend === 'up' ? 'RISING' : 'FADING'} &middot; peak: ${maxV}%
        </div>
      </div>
    `;
  }).join('');
}
