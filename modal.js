// ══════════════════════════════════════
//  MODAL  +  GEMINI API
// ══════════════════════════════════════

// ── WHERE TO PUT YOUR KEY ──────────────────────────────────────────────────
//  Option A (easiest for local use):
//    Replace the empty string below with your Gemini key:
//      const GEMINI_API_KEY = 'AIzaSy...your-key-here...';
//
//  Option B (safer for GitHub — avoids committing your key):
//    Leave this empty and the UI will prompt you each time via the
//    password input in the modal. Your key is stored only in memory
//    for the current session.
// ──────────────────────────────────────────────────────────────────────────
const GEMINI_API_KEY = 'AIzaSyAevS_FTvh2w7Xmi46bZdo1xMgbqooTq0o';   // <-- PASTE YOUR KEY HERE (or leave blank to enter in UI)

let mapInstance  = null;
let currentWord  = null;
let savedApiKey  = GEMINI_API_KEY;

// ── Open modal ────────────────────────────────────────────────────────────
function openModal(data) {
  currentWord = data;

  document.getElementById('modal-title').textContent   = data.word.toUpperCase();
  document.getElementById('modal-def').textContent     = data.def;
  document.getElementById('modal-origin').textContent  = data.origin;
  document.getElementById('modal-example').textContent = data.example;
  document.getElementById('modal-context').textContent = data.context;

  // Badges (pill-shaped — styled in CSS)
  document.getElementById('modal-badges').innerHTML = `
    <span class="badge badge-hot">${data.tag.toUpperCase()}</span>
    <span class="badge badge-year">est. ${data.year}</span>
    <span class="badge badge-gen">Gen Z / AAVE</span>
  `;

  // Communities
  document.getElementById('modal-communities').innerHTML = data.communities.map(c => `
    <div class="community-card">
      <div class="comm-name">${c.name}</div>
      <div class="comm-role">${c.role}</div>
      <div class="comm-bar-bg">
        <div class="comm-bar" style="width:0%" data-pct="${c.pct}"></div>
      </div>
      <div class="comm-pct">${c.pct}% influence</div>
    </div>
  `).join('');

  // Timeline
  document.getElementById('modal-timeline').innerHTML = data.timeline.map(t => `
    <li class="timeline-item">
      <span class="tl-year">${t.year}</span>
      <div>
        <div class="tl-event">${t.event}</div>
        <div class="tl-platform">${t.platform}</div>
      </div>
    </li>
  `).join('');

  // Reset AI result
  document.getElementById('ai-result').style.display = 'none';
  document.getElementById('gemini-msg').textContent =
    'Enter your Gemini API key below for real-time etymology and community analysis';
  document.getElementById('gemini-status').style.borderColor = 'rgba(0,229,255,.2)';

  // Show overlay
  document.getElementById('modal-overlay').classList.add('open');

  // Animate community bars after paint
  setTimeout(() => {
    document.querySelectorAll('.comm-bar').forEach(b => {
      b.style.width = b.dataset.pct + '%';
    });
  }, 200);

  // Init map
  setTimeout(() => initModalMap(data), 150);
}

// ── Modal map ─────────────────────────────────────────────────────────────
function initModalMap(data) {
  const el = document.getElementById('modal-map');
  el.innerHTML = '';

  const mapDiv = document.createElement('div');
  mapDiv.style.cssText = 'height:260px;width:100%';
  el.appendChild(mapDiv);

  const m = L.map(mapDiv, { zoomControl: true, scrollWheelZoom: false })
    .setView([data.geo.lat, data.geo.lng], 3);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap', maxZoom: 18
  }).addTo(m);

  // Dark tile style
  const style = document.createElement('style');
  style.textContent = '.leaflet-tile{filter:brightness(.45) saturate(.5) hue-rotate(195deg)!important}';
  document.head.appendChild(style);

  // Origin marker
  const ico = L.divIcon({
    html: `<div style="width:14px;height:14px;background:var(--accent2);border:2px solid white;border-radius:50%;box-shadow:0 0 12px rgba(255,77,109,.8)"></div>`,
    iconSize: [14, 14], className: ''
  });
  L.marker([data.geo.lat, data.geo.lng], { icon: ico })
   .bindPopup(`<b style="color:#ff4d6d">${data.word}</b><br><span style="color:#888">Origin: ${data.geo.city}</span>`)
   .addTo(m);

  // Spread circles
  const colors = ['rgba(255,77,109,.35)', 'rgba(255,209,102,.25)', 'rgba(0,229,255,.15)'];
  [1, 2.5, 5].forEach((mult, i) => {
    L.circle([data.geo.lat, data.geo.lng], {
      radius: data.geo.radius * 1000 * mult,
      color: colors[i].replace(/[\d.]+\)/, '1)'),
      fillColor: colors[i],
      fillOpacity: 1, weight: 1
    }).addTo(m);
  });

  if (mapInstance) mapInstance.remove();
  mapInstance = m;
}

// ── Close modal ───────────────────────────────────────────────────────────
function closeModal(e) {
  // If called from overlay click, only close when clicking the overlay itself
  if (e && e.target !== document.getElementById('modal-overlay')) return;
  document.getElementById('modal-overlay').classList.remove('open');
  if (mapInstance) { mapInstance.remove(); mapInstance = null; }
}

// ── Gemini API ────────────────────────────────────────────────────────────
async function analyzeWithGemini() {
  // Grab key from input field if not hardcoded
  const inputKey = document.getElementById('api-key-input').value.trim();
  if (inputKey) savedApiKey = inputKey;

  if (!savedApiKey) {
    alert('Please enter your Gemini API key in the input field below.');
    return;
  }
  if (!currentWord) return;

  const spinner = document.getElementById('ai-spinner');
  const result  = document.getElementById('ai-result');
  spinner.style.display = 'block';
  result.style.display  = 'none';

  try {
    const resp = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${savedApiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are a cultural linguist specializing in internet slang and language evolution.
Analyze the slang word "${currentWord.word}". Provide:
1. A deeper etymological breakdown
2. Which specific online subcultures or communities had the most influence in spreading it
3. Any controversies about cultural appropriation or misuse
4. Current status: is it dying, peaking, or still rising?
5. One surprising fact about its spread

Keep your response concise (200 words max), conversational, and fascinating. Format with simple line breaks only.`
            }]
          }]
        })
      }
    );

    const d   = await resp.json();
    const txt = d.candidates?.[0]?.content?.parts?.[0]?.text || 'No analysis available.';
    result.style.display  = 'block';
    result.innerHTML      = txt.replace(/\n/g, '<br>');
    document.getElementById('gemini-msg').textContent       = 'AI analysis loaded';
    document.getElementById('gemini-status').style.borderColor = 'rgba(184,255,78,.3)';

  } catch (err) {
    result.style.display = 'block';
    result.innerHTML = `<span style="color:var(--accent2)">Error: ${err.message}. Check your API key.</span>`;
  }

  spinner.style.display = 'none';
}

// Escape key to close modal
window.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
