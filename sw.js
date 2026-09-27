self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Nécessaire pour faire croire à Chrome qu'on gère le mode hors-ligne
});
