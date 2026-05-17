// ══════════════════════════════════════
//  GEO MAP
// ══════════════════════════════════════
let geoMap         = null;
const mapInitialized = {};

function initGeoMap() {
  if (mapInitialized.geo) return;
  mapInitialized.geo = true;

  const el = document.getElementById('geo-map-leaflet');
  const m  = L.map(el, { zoomControl: true }).setView([20, 0], 2);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
  }).addTo(m);

  SLANG_DATA.forEach(data => {
    const col = data.tag === 'hot'   ? '#ff6b35'
              : data.tag === 'viral' ? '#b8ff4e'
              : data.tag === 'cool'  ? '#00e5ff'
              : '#ffd166';

    const ico = L.divIcon({
      html: `<div style="background:${col};border:2px solid rgba(255,255,255,.8);border-radius:50%;width:12px;height:12px;box-shadow:0 0 8px ${col}"></div>`,
      iconSize: [12, 12], className: ''
    });

    L.marker([data.geo.lat, data.geo.lng], { icon: ico })
     .bindPopup(`
       <b style="color:${col}">${data.word.toUpperCase()}</b><br>
       <span style="color:#999;font-size:11px">${data.geo.city}</span><br>
       <button
         onclick="openGeoModal('${data.word}')"
         style="margin-top:6px;background:${col};border:none;color:#000;padding:4px 10px;cursor:pointer;font-size:11px;border-radius:2px">
         EXPLORE
       </button>`)
     .addTo(m);

    [1, 3, 6].forEach((mult, i) => {
      L.circle([data.geo.lat, data.geo.lng], {
        radius:      data.geo.radius * 1000 * mult,
        color:       col,
        fillColor:   col,
        fillOpacity: .04 + (.02 * (2 - i)),
        weight:      .5,
        opacity:     .3
      }).addTo(m);
    });
  });

  geoMap = m;
}

function openGeoModal(word) {
  const data = SLANG_DATA.find(d => d.word === word);
  if (data) openModal(data);
}
