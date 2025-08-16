const CACHE_NAME = 'dev-playground-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/static/css/style.css',
    '/static/js/script.js',
    '/static/data/html.js',
    '/static/data/css.js',
    '/static/data/js.js',
    '/static/data/components.js',
    'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.52.2/min/vs/loader.js',
    'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.52.2/min/vs/editor/editor.main.min.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache and caching core assets');
        // Add all core assets to cache.
        // For cross-origin URLs, we need to use a Request object with no-cors mode, but that might not be cacheable.
        // Let's try adding them directly. cdnjs should have correct CORS headers.
        const promises = urlsToCache.map(url => {
            const request = new Request(url, {mode: 'no-cors'});
            return fetch(request).then(response => cache.put(request, response));
        });
        return Promise.all(promises);
      })
      .catch(error => {
        console.error('Failed to cache core assets:', error);
      })
  );
});

self.addEventListener('fetch', event => {
    // Use a stale-while-revalidate strategy for CDN assets (like Monaco Editor)
    if (event.request.url.startsWith('https://cdnjs.cloudflare.com')) {
        event.respondWith(
            caches.open(CACHE_NAME).then(cache => {
                return cache.match(event.request).then(response => {
                    const fetchPromise = fetch(event.request).then(networkResponse => {
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    });
                    return response || fetchPromise;
                });
            })
        );
        return;
    }

    // Use a cache-first strategy for all other local assets
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response; // Return from cache
                }
                return fetch(event.request); // Fetch from network
            })
    );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName); // Delete old caches
                    }
                })
            );
        })
    );
});
