// ══════════════════════════════════════
//  LIVE STREAM
// ══════════════════════════════════════
let streamInterval = null;
let activeFilter   = 'all';

function setFilter(f) {
  activeFilter = f;
  document.querySelectorAll('.ctrl-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('filter-' + f).classList.add('active');
}

function spawnWord() {
  if (currentScreen !== 'stream') return;

  const area = document.getElementById('stream-area');
  const pool = activeFilter === 'all'
    ? SLANG_DATA
    : SLANG_DATA.filter(d => d.tag === activeFilter);
  if (!pool.length) return;

  const data = pool[Math.floor(Math.random() * pool.length)];
  const el   = document.createElement('div');
  el.className = `stream-word tag-${data.tag}`;
  el.textContent = data.word;

  const duration = 7000 + Math.random() * 8000;
  const size     = 13 + Math.random() * 16;

  el.style.cssText = `
    left: ${Math.random() * 85}%;
    bottom: -60px;
    font-size: ${size}px;
    animation-duration: ${duration}ms;
    animation-delay: 0ms;
    z-index: ${Math.floor(Math.random() * 50) + 10};
  `;

  el.addEventListener('click', () => openModal(data));
  area.appendChild(el);
  setTimeout(() => el.remove(), duration + 500);
}

function startStream() {
  stopStream();
  for (let i = 0; i < 8; i++) setTimeout(spawnWord, i * 300);
  streamInterval = setInterval(spawnWord, 900);
}

function stopStream() {
  if (streamInterval) { clearInterval(streamInterval); streamInterval = null; }
  const area = document.getElementById('stream-area');
  if (area) area.innerHTML = '';
}
