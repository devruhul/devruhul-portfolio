/* eslint-disable no-restricted-globals */

// Self-destroying service worker.
//
// A previous version of this site registered a caching (Workbox) service
// worker that kept serving stale builds to returning visitors. This
// replacement takes over immediately, deletes every cache it created,
// unregisters itself and reloads open tabs so they get the latest deploy
// straight from Netlify.

// The CRA build (workbox InjectManifest) requires this placeholder to exist.
// eslint-disable-next-line no-unused-vars
const ignoredManifest = self.__WB_MANIFEST;

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: "window" });
      clients.forEach((client) => client.navigate(client.url));
    })()
  );
});
