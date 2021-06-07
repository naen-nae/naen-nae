const CACHE_NAME = 'naen-nae-v1';

self.addEventListener('fetch', evt =>
  evt.respondWith(
    (async () => {
      const cachedResp = await caches.match(evt.request);

      if (cachedResp !== undefined) {
        return cachedResp;
      }

      const resp = await fetch(evt.request);

      if (evt.request.destination !== 'font') {
        return resp;
      }

      // caching font files
      const cache = await caches.open(CACHE_NAME);
      cache.put(evt.request, resp.clone());

      return resp;
    })(),
  ),
);
