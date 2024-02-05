'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "dc144bcacd246fcab6978fc8fec0ea32",
"index.html": "d89fb692ae5cbfec0554b28d582dedc2",
"/": "d89fb692ae5cbfec0554b28d582dedc2",
"main.dart.js": "8beeac944b28c00fdff947473ed33068",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"_redirects": "6a02faf7ea2a9584134ffe15779a0e44",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".git/config": "b08f5c3a4f207c207215e99c3445e997",
".git/objects/59/f6022b27169820a918e4b2a3012afb833827ad": "f259b26841856098505d445361d53af0",
".git/objects/50/a463356b7d89bc7f17cfe56003eab71b56d8ad": "604dcda5259cee556b0d49cccce957ca",
".git/objects/03/3a068e335463fd8879671b77a77abb58a1f144": "c2bdd2b7b6a75d45e28adca03b2cbb4f",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/69/a1956d8051e2e28341711fa5d3fc45d139aecd": "895e168fb999042479bbe55fe5dafd70",
".git/objects/69/89ac72ffb17026f9a29892ad7cd9a59f0831c5": "dac4c1cc9b257e42d8d01e2ad07f5584",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/0b/2a0d7ec4296349ef1267cbfa943337f8f25d98": "dabff6a2230f8149fb153abb10e2c2e6",
".git/objects/ad/9338005f7337b14e0e082ce0e97304f189706b": "bfb33f4acef3b980c26f7e63c1fa36db",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/ee/af72bcaeaff6432aa2080f816b1e8c66fb9a3c": "12c1f6687f9a65ec94b5bbab73977ba0",
".git/objects/c8/ac6ad168d026d3a9bec2e9be93f6c8990beba9": "07dff456731769cff5698003d4baf457",
".git/objects/fb/a515820d999d6e7d7cdcad6d68ef2513586ac5": "4d38918da1b649c66db391e7750a3b0b",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/27/b45a0c735ae1bf4618735505890baae5c98876": "3104f5566141908484aa357ac0e2ccdb",
".git/objects/11/6fdf7af149e4dc0625b40589cdc50d0efe76f8": "52bc90073ca897e519fc30e2d3c77b0b",
".git/objects/1f/14a99a52cb29667e02d3b7b190fef8b185a4a6": "bb67fa91d67938a36f4f2db0807cf437",
".git/objects/8f/8eba39fb8155b233ec5324485215412a219aae": "049ae830e859d060a5bc8072382e653e",
".git/objects/8a/e6f07c7f25d972f76c767bf839c73268a9cbfd": "6fc040568e762da818dbad6d9c38ed3f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/8741b4aab469a8a1a08dcad64e1f33294cb5d3": "35c0354bfafcd81f590c50f0d8faab05",
".git/objects/75/12700e79db9baf7c1a167cf479283c064dda8e": "cd450798f81d47adb18bbac41a1bead7",
".git/objects/72/cd123952d2bb19ca16a215b27858b4bdd1b1ee": "98499a39c0fef63d38af3c4eebd95253",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/09/f85aec8e9f48c833046a49fa6e583814ff257c": "889fe0b085e257036b2de1dbf7e8d9b6",
".git/objects/91/9650e7bd134c53bb90314cbf227692be36e485": "73d3fa2c750ae07d28218db669b0e6cb",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/30/0efaefa7d2bd34a221ffad6d778922d14bceb1": "d50b8515ecf3b28528b1d55b9128382e",
".git/objects/08/8123cfc23aa6d11ce23530ac90324dd290231c": "e6a063748949e2f09922c050367f779e",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/39/7a7bf2f37c01c26050aea4d47193f058958aea": "1bb2915168473ce2a1753d549c84ee35",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/64/9b1f8c14eef7e62d513ba6a7e3cfa8a5b7bcfb": "ba34373d3eab7abe3665ff0314e9f91f",
".git/objects/90/7135fffd1e5171fc6521345985e2227dc445b2": "8f4981806a2a82b0df479dcdb068ea0d",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/b1/179c090e5eb84d8d5b34d110f5cc53d24fcf66": "8d1377ba9f32dd3bc1430bad0197446b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/cc/189ae0940c3145cb3e767c69eca1cb8889343c": "2551ab90c4a1d29e33aa9d3e530e4ce4",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f0/970e349e53101dc98ade3dc3b9420d7cd5a6cf": "f5a73b6dc85624db363fcebf623ecc91",
".git/objects/fa/3ea19a22fc42c265b59c7e083290fdb464cf11": "122d9fce441ea0c43628415348c3231d",
".git/objects/f6/a148ffc3f45b23e9bf290b6d320b99cba747e0": "a737c84f3c8b1cbad810f3cdb5074a5a",
".git/objects/f1/0a07db7cc295bafe4e9a0ceea8417433ecbb20": "12a7bd69cae2b3a46f4545771c01d159",
".git/objects/46/25baa79bb92254fb46ecd7210172f72ffee5b3": "8e205e940a53bce081538ffa1775e6a4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/f5d7139ddf1571cb0109ad2ccca305fb868ba3": "4d5acf57fa26431a081ce8921f137791",
".git/objects/70/f2a1baf36f6b0385b658bcc4336324cbf472c5": "ae99e10354a1336c5c2cc75e1c9799f9",
".git/objects/23/cedb5d3de4fa6e2f2881c515c81a07268cf7bd": "bf3370c989b28cfe8c32d158b8446e41",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/8d/13926eea349171d0dce97cd99bb7b44ad52054": "b7176b91488165f565d4c234236d6377",
".git/objects/15/900f0e6e74d0bed9db5bca085681b8e84bde9d": "ac865706fe50670124aa503638f6e0c0",
".git/objects/8c/521cbfe427d4c67945a519441ebae4ed2d10e1": "956c30ab387cf3c366d24112481d0797",
".git/objects/40/8d1161fb142fb4a7c3af3631d3e3f89a5a19ae": "b948ed0fb282aabbbe890c8052c5b239",
".git/objects/22/9d04fc1425a7eeded16a6178dcce68048e7926": "028fbfe595ab439c3237f0a20a4354f7",
".git/objects/25/1edb9457b374ca39871f23cb308dbf5a8e3091": "b042b424c00ad3a213be1fdbbe3d3e65",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ae7f82517be029e044b873695e2ba4ce",
".git/logs/refs/heads/main": "ae7f82517be029e044b873695e2ba4ce",
".git/logs/refs/remotes/origin/main": "d43390f2957b858cb8851e188263c2f8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "2a772c86f5040c0277f247ed74921d85",
".git/refs/remotes/origin/main": "2a772c86f5040c0277f247ed74921d85",
".git/index": "263b74f644f358c881fb895f78c4fee8",
".git/COMMIT_EDITMSG": "05a574090d537ba26a6b40857d085ad3",
"assets/AssetManifest.json": "014888304ee03dbe740122ec8664fb74",
"assets/NOTICES": "be9f9f3a1468d12f084e6fcdb720fa31",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "2ded59108ae5d625a8c2658609b0326c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ddbff6ae8ef4eb65be5ff902b93afb71",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "4192ece744220973b48f6dc9bea5670e",
"assets/fonts/MaterialIcons-Regular.otf": "48773912e05e166bb2f3ecee8ddaabff",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/home3.png": "77cab6ef94c79565b7214d0b8c15e124",
"assets/assets/images/home2.png": "c0e545014ed02e60ed659fbeb10f6ed4",
"assets/assets/images/home1.png": "e8595f6f75dd1fdbaab96c7fb5db391f",
"assets/assets/images/home5.png": "01cae83d9155fcb6889bf1a7867c6ad4",
"assets/assets/images/fondo.png": "a605a80f3f4a41ead32d5798ce38494d",
"assets/assets/images/home4.png": "2c7d55cce23128b75066bcc879a046fe",
"assets/assets/images/home6.png": "a59827eaa6d1feef079e6b8a697b7e65",
"assets/assets/images/social.png": "7ac9bc20ad43475e07237561b8ce3e36",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"fav.png": "b5b55ea8f0d90f6414fcf9ba29655cfa",
"social.png": "7ac9bc20ad43475e07237561b8ce3e36",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
