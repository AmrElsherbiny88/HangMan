const CACHE_NAME = 'HangManV1';
const urlsToCache = [
    '/',
    '/Bootstrap/cdn.jsdelivr.net_npm_bootstrap@5.0.2_dist_css_bootstrap.min.css',
    '/Bootstrap/cdn.jsdelivr.net_npm_bootstrap@5.0.2_dist_js_bootstrap.bundle.min.js',
    '/script.js',
    '/icon.png',
    '/index.html',
    '/instt.js',
    '/mainfest.json',
    '/negative_beeps-6008.mp3',
    '/style.css',
    '/yay-6120.mp3',
    
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});