const CACHE_NAME = 'kemi1-v1';

const ASSETS = [
  '/kemi1flashcards/',
  '/kemi1flashcards/index.html',
  '/kemi1flashcards/favicon.png',
  '/kemi1flashcards/manifest.json',
  '/kemi1flashcards/src/styles.css',
  '/kemi1flashcards/src/data/flashcards.js',
  '/kemi1flashcards/src/problems.js',
  '/kemi1flashcards/src/theory-questions.js',
  '/kemi1flashcards/src/js/storage.js',
  '/kemi1flashcards/src/js/navigation.js',
  '/kemi1flashcards/src/js/flashcards.js',
  '/kemi1flashcards/src/js/quiz.js',
  '/kemi1flashcards/src/js/calculator.js',
  '/kemi1flashcards/src/js/theory.js',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type === 'opaque') {
          return response;
        }
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      });
    })
  );
});
