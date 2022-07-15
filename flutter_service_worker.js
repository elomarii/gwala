'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"main.dart.js": "a5fe98849e8f1b27452148e5c2d0ac54",
"icons/Icon-192.png": "d820aa1ee1b90c3c81ef49f76139fa13",
"icons/Icon-512.png": "afb8ebb87168b7397699e7b2330cd1ac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/assets/webp/salary.gif": "8987ac520c11767333f4223d579cfb07",
"assets/assets/webp/employee1.gif": "545443addcc80a23fdb43d0c87de6926",
"assets/assets/webp/employee3.gif": "cadfcd167a985fb16c3b64f266b39743",
"assets/assets/webp/rocket.gif": "51bc91d4c7f6d0fc8ae62b97ce2e0863",
"assets/assets/webp/employee2.gif": "252dfb49d384c298fe3fc929930b7968",
"assets/assets/webp/employers.gif": "d5aa29adff3934a02974f87f70b10b0e",
"assets/assets/webp/employees.gif": "5f5b8869cf1bca7e3e016e58eab5deb5",
"assets/assets/webp/frame.gif": "362f54e13efb68cfbc1f0f0839e0d382",
"assets/assets/webp/employee4.gif": "8d58ebae77009815ff7d9843a1d0b280",
"assets/assets/webp/gwala.gif": "f14a56c52e01c7e2b419e5527a1af3d9",
"assets/assets/webp/click.gif": "8d5e330904951575c6355b0afc100469",
"assets/assets/webp/footer.gif": "f0d2bae5bab58019afb6a2c50bb69027",
"assets/assets/webp/buy.gif": "fe60062fa664a95ba8f53c5d973b05f5",
"assets/assets/png/employee.png": "659a6cba281084d3cd555fab47210cb7",
"assets/assets/png/twitter.png": "c88bb8af7535837d47e473e80de1a86b",
"assets/assets/png/instagram.png": "c5e2bec8cb1c089882e5d13abca1f8f3",
"assets/assets/png/businessman.png": "9e126a9c8f20b0081bbe2bdc8412cece",
"assets/assets/png/linkedin.png": "898c0407d74c75fa110de76293d96ddd",
"assets/assets/png/start-up.png": "abe2930e66e7ed4e50ab4c6fc9916b55",
"assets/assets/png/why1.gif": "1bb0f7907c97a950c96612c800c998f2",
"assets/assets/png/help.png": "50a1637c50de8ed3c13446beae79a8ca",
"assets/assets/png/settings.png": "33085dc273037c080b89964e58b201ef",
"assets/assets/png/why3.gif": "51c082fc85e3ed51ef47849bdc861ba7",
"assets/assets/png/menu.png": "0966a1a562b0a06355b2707d981457af",
"assets/assets/png/facebook.png": "b58a22bc15699940e2641dbafada5be4",
"assets/assets/png/dollar.png": "aaf7f37f1f0a41cb4f96be0899c3cba7",
"assets/assets/png/logo.png": "8695f4314d0746f5e13ee615d6c07a4c",
"assets/assets/png/why2.gif": "0db56266064883b4ce3eea8ed107416b",
"assets/assets/json/salary.json": "3711fa04389e563771c59b26df4e76ac",
"assets/assets/json/interest.json": "7b86be784421edbae665389ccd41e988",
"assets/assets/json/start.json": "a06b71a93f696ae005153b9675c33608",
"assets/assets/json/what_gwala.json": "eb833895da699e27cbc9a8df0349a579",
"assets/assets/json/employees.json": "e8bc755c7d8086f213594634d296ac88",
"assets/assets/json/click.json": "6261117cea2b1316e528186e1c38eb60",
"assets/assets/json/gears.json": "41ef2ec00b12925aa1f482a8825125b6",
"assets/assets/json/wallet.json": "efca5f655ee71cf9d505daebaf245d56",
"assets/assets/json/employee_3.json": "f5c983279b909b570be4d0666363c6b6",
"assets/assets/json/buy.json": "8f2bd615d24eaa0133bb4a60f25e5bec",
"assets/assets/json/money.json": "b084b93bd60e47fbf1e0d477914ecbb3",
"assets/assets/json/scroll-down.json": "f81ebefab0ee0ec711f1b2958a4bfaa6",
"assets/assets/json/employee_2.json": "f3fbea8aa6465f93edf1bf491d8193cd",
"assets/assets/json/employee_4.json": "0f2765633aaa86c6aee8ed53abdd089c",
"assets/assets/json/employee_1.json": "c13f6e20cd460d3f2f76c01a2b8ff673",
"assets/assets/json/employer.json": "fffc6713e3ba4a3bf8a85e6204a5f174",
"assets/assets/json/line.json": "94f304d81313c92452ad590ed9ddb844",
"assets/assets/json/scrolldown.json": "1eaf76ef5694a7b18a5a13407caec6c6",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/AssetManifest.json": "eccb772e94552293191f4cdfdbc1a217",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "97514c4d8b03c3ecedf1c8d658614279",
"manifest.json": "980c49c9bc2fd5d0aa0c2aaa460f94f5",
"version.json": "e6340be3d8d7f848194b794ab836a5c3",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"index.html": "5d4ed68eeb2a892da2a0ae6a7e339bbf",
"/": "5d4ed68eeb2a892da2a0ae6a7e339bbf",
"favicon.png": "b3cc06cdd4734a8712d1c017570e40fd"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
