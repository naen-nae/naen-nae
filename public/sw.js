const CACHE_NAME = 'naen-nae-v2';

// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', evt =>
  evt.respondWith(
    (async () => {
      const cachedResp = await caches.match(evt.request);

      let { usage, quota } = {
        usage: 0,
        quota: 0,
      };

      if (navigator.storage && navigator.storage.estimate) {
        const storage = await navigator.storage.estimate();
        usage = storage.usage;
        quota = storage.quota;
      }

      if (cachedResp !== undefined) {
        return cachedResp;
      }

      const resp = await fetch(evt.request);

      if (
        evt.request.destination !== 'font' || // validation req type
        !/build\/subset-fonts/.test(evt.request.url) || // caching only subset fonts
        usage + Number(resp.headers.get('Content-Length')) > quota * 0.9 // quota guard
      ) {
        return resp;
      }

      // caching subset font files
      const cache = await caches.open(CACHE_NAME);
      cache.put(evt.request, resp.clone());

      return resp;
    })(),
  ),
);
