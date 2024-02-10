const cacheName = "::yourserviceworker";
const version = "v0.0.1";
self.addEventListener("install", function (event:any) {
  event.waitUntil(
    caches.open(version + cacheName).then(function (cache) {
      return cache.addAll(["/", "/offline"]);
    })
  );
});

self.addEventListener("activate", function (event:any) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      // Remove caches whose name is no longer valid
      return Promise.all(
        keys
          .filter(function (key) {
            return key.indexOf(version) !== 0;
          })
          .map(function (key) {
            return caches.delete(key);
          })
      );
    })
  );
})

