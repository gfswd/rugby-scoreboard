const CACHE_NAME = 'rugby-scoreboard-v7';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

function fetchWithTimeout(request, timeoutMs = 2800) {
  const controller = new AbortController();
  const timerId = setTimeout(() => controller.abort(), timeoutMs);
  return fetch(request, { cache: 'no-store', signal: controller.signal })
    .finally(() => clearTimeout(timerId));
}

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  // Live connectivity check for manual "App-Update laden" (bypass cache completely)
  if (url.searchParams.has('update_check')) {
    event.respondWith(fetch(event.request, { cache: 'no-store' }));
    return;
  }

  const accept = event.request.headers.get('accept') || '';
  const isHtml = event.request.mode === 'navigate' ||
                 accept.includes('text/html') ||
                 url.pathname.endsWith('/index.html') ||
                 url.pathname.endsWith('/');

  if (isHtml) {
    event.respondWith(
      fetchWithTimeout(event.request, 2800)
        .then((response) => {
          if (response && response.ok) {
            const copyIndex = response.clone();
            const copyRoot = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put('./index.html', copyIndex);
              cache.put('./', copyRoot);
            });
          }
          return response;
        })
        .catch(() => caches.match('./index.html').then((cached) => cached || caches.match('./')))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
