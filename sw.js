// Service worker bingkai Kalkulator IPAL SPPG.
// Hanya menyimpan bingkai dan ikon; isi aplikasi selalu diambil langsung dari Apps Script.
const CACHE = 'ipal-sppg-bingkai-v2';
const FILES = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png',
  './icon-maskable-512.png', './apple-touch-icon.png', './favicon.svg'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys()
    .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req).then((res) => {
      if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req).then((r) => r || caches.match('./index.html')))
  );
});
