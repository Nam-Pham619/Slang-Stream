// ══════════════════════════════════════
//  APP — NAVIGATION & INIT
// ══════════════════════════════════════
let currentScreen = 'landing';

// ── Helpers ───────────────────────────────────────────────────────────────
function hideAll() {
  ['landing','hub','stream-screen','evo-screen','geo-screen'].forEach(id => {
    document.getElementById(id).classList.add('hidden');
  });
}

function showNav(visible) {
  document.getElementById('app-nav').classList.toggle('visible', visible);
}

function setNavActive(id) {
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  if (id) document.getElementById(id)?.classList.add('active');
}

// ── Screen transitions ────────────────────────────────────────────────────
function showLanding() {
  hideAll(); stopStream();
  document.getElementById('landing').classList.remove('hidden');
  showNav(false);
  currentScreen = 'landing';
}

function showHub() {
  hideAll(); stopStream();
  document.getElementById('hub').classList.remove('hidden');
  showNav(false);
  currentScreen = 'hub';
}

function showStream() {
  hideAll();
  document.getElementById('stream-screen').classList.remove('hidden');
  showNav(true); setNavActive('nav-stream');
  currentScreen = 'stream';
  startStream();
}

function showEvo() {
  hideAll(); stopStream();
  document.getElementById('evo-screen').classList.remove('hidden');
  showNav(true); setNavActive('nav-evo');
  currentScreen = 'evo';
  initEvo();
}

function showGeo() {
  hideAll(); stopStream();
  document.getElementById('geo-screen').classList.remove('hidden');
  showNav(true); setNavActive('nav-geo');
  currentScreen = 'geo';
  setTimeout(initGeoMap, 100);
}

// ── Init on load ──────────────────────────────────────────────────────────
window.addEventListener('load', () => {
  // Hide loading screen
  setTimeout(() => {
    const loader = document.getElementById('loading');
    loader.style.opacity = '0';
    setTimeout(() => { loader.style.display = 'none'; }, 500);
  }, 1200);

  // Animated counters
  function animCount(id, target) {
    let c = 0;
    const step = Math.ceil(target / 60);
    const s = setInterval(() => {
      c += step;
      if (c >= target) { c = target; clearInterval(s); }
      document.getElementById(id).textContent = c.toLocaleString();
    }, 20);
  }
  setTimeout(() => {
    animCount('cnt-words', 2847);
    animCount('cnt-memes', 184);
    animCount('cnt-communities', 63);
  }, 1300);
});
