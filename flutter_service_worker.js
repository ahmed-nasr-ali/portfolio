'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "3f1f88f3e32cec1fdde8fabae8bcead8",
"index.html": "648d9b1b3bca95b0aa67e22bde830ec6",
"/": "648d9b1b3bca95b0aa67e22bde830ec6",
"main.dart.js": "f1a9d1a8f19f6c0bf7e44abcbba2c488",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "401bc9f421f01dc56dadb283b538f40a",
"assets/AssetManifest.json": "e35c513a8be42546611632457527bcfa",
"assets/NOTICES": "69787ced33fdf64889db4e7be96e39e4",
"assets/FontManifest.json": "3172dd82d725455ad63122e83379cb8f",
"assets/AssetManifest.bin.json": "a849ac8a2e9116a8e801f7447aa5bc09",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "72160d27c988d332a2b76fc98cc832a5",
"assets/fonts/MaterialIcons-Regular.otf": "6b2e38f745e81a7b607e2e9f042910c7",
"assets/assets/Ahmed_Nasr_Ali.pdf": "8c1b4ab256f2cf9f0df8d151ed4e7062",
"assets/assets/images/sheraa_main_image.png": "e16b4f470a1cc5fe5f0282c084f3e890",
"assets/assets/images/DashBoard_main_image.png": "e96395b8973ae020c0a9288644adea7e",
"assets/assets/images/smart_care_user_image_8.png": "ec705025f91db38ffc71da1b121f92c9",
"assets/assets/images/cayan_image_9.png": "e55e41f484bdcf26aafc547811f74da1",
"assets/assets/images/smart_care_doctor_image_8.png": "7a9c7bc4c8078df29ad7264fd9eb3033",
"assets/assets/images/smart_care_image.png": "18afc40f3a7c0bb299f8cadbd050125e",
"assets/assets/images/smart_care_doctor_image_9.png": "76eaee8f2ff7a98df4ec8657e3fec278",
"assets/assets/images/my_image4.png": "3723ed888a5181f33e81e6d8fd7c3a38",
"assets/assets/images/cayan_image_8.png": "0be3b22bd27c056ee1d7ad5d5027775a",
"assets/assets/images/smart_care_user_image_9.png": "f1f9668d5f196f417f7801de63612ecb",
"assets/assets/images/sheraa_image_1.webp": "3746d05aa73ab5d039c5662608e5d6f8",
"assets/assets/images/instagram.png": "4a8c23476a7c20c5bee2a752a6f96e9e",
"assets/assets/images/smart_care_doctor_image_11.png": "d07257fb5f9d90107c6a337e6b6b3840",
"assets/assets/images/smart_care_doctor_image_10.png": "21d341f45fb33daa1de35788e3975a39",
"assets/assets/images/portfolio-img4.png": "73ffe243d72ec55b1c7dbc33c4c3c020",
"assets/assets/images/web_p3_image_1.png": "26860676955fa768210654a39c8b7c9b",
"assets/assets/images/portfolio-img5.png": "73ffe243d72ec55b1c7dbc33c4c3c020",
"assets/assets/images/vector.png": "16fa78ca01ce794aa977d10a284d4751",
"assets/assets/images/github.png": "1b9b9f71269e504156ce9d89a00f2551",
"assets/assets/images/web_p3_image_2.png": "32681eceb58fe82352c0f8457d973633",
"assets/assets/images/web_p3_image_3.png": "2884e5e99753424a7006eb936518a162",
"assets/assets/images/smart_care_user_image.png": "dfcc14df9f3cd2f6311e057f366d8d29",
"assets/assets/images/portfolio-img2.png": "73ffe243d72ec55b1c7dbc33c4c3c020",
"assets/assets/images/web_p3_image_6.png": "f1af9bdc4242eef54467e1ead75e50fa",
"assets/assets/images/portfolio-img3.png": "73ffe243d72ec55b1c7dbc33c4c3c020",
"assets/assets/images/sheraa_app_main_image.png": "dc5057b397451a9c4e253f54990d19df",
"assets/assets/images/portfolio-img1.png": "7b671598ea608ec41d52c9f57f7d94ab",
"assets/assets/images/web_p3_image_4.png": "1b3de05fde9490a3a3fe2f12c4da1e3f",
"assets/assets/images/web_p3_image_5.png": "ea89f060a31a5a0800e2a519b866abcb",
"assets/assets/images/p3.png": "27b69c56f4f32036a6ea5014eb4790ee",
"assets/assets/images/web_p1_image_1.png": "9a64ad54918e69ff23c069d29eb16b96",
"assets/assets/images/zrafh_image_2.jpg": "0b54a84e955dda6184943b0fbb13c386",
"assets/assets/images/tik-tok.png": "e30e4714ecadc84324ee6e65ae93d669",
"assets/assets/images/zrafh_image_3.jpg": "2d888ce8ef0b805d01141e98c86bd74a",
"assets/assets/images/sheraa_image_4.webp": "0f48015fa1049e6e9325fe609e39764f",
"assets/assets/images/p2.png": "8344f0a554aeefb1a8abcb614c45c9b6",
"assets/assets/images/cayan_image_11.png": "694ff739eff7a4325e453c8c009e969a",
"assets/assets/images/web_p1_image_2.png": "2355aad0fdc8f3265b4e2fd3e8c3849f",
"assets/assets/images/zrafh_image_1.jpg": "ea93cbd0b3d60ea4f75de505bcbf26b5",
"assets/assets/images/smart_care_doctor_image.png": "dbc1451434387e7a5483cb76dd917d8b",
"assets/assets/images/web_p1_image_3.png": "cc8fa988c65e2f39bbce305d15c4e236",
"assets/assets/images/cayan_image_10.png": "72845e584ae355cfbd995f7270bb2583",
"assets/assets/images/p1.png": "e8f94ef8485a3ce04b82bc11b3b3dfeb",
"assets/assets/images/p5.png": "f3e18b5b7cc26059cfb54186d465d018",
"assets/assets/images/Zrafh_image.png": "6bb006a965c21112093e57bcd4a2b635",
"assets/assets/images/zrafh_image_4.jpg": "0d2ad064604aa53607595a2e6c5f1f4a",
"assets/assets/images/twitter.png": "3e8e7ee8666a9f4e2946f39ff2f806e3",
"assets/assets/images/zrafh_image_5.jpg": "3bad1c319ab648497e614f38cac69118",
"assets/assets/images/linkedin.png": "efdb74ff3631151062095b0c9b228c21",
"assets/assets/images/web_p1_image_6.png": "3eecd9be3f4e223ce0254a97ccb380a5",
"assets/assets/images/p4.png": "adc921888d28b24cfd623096c8eff781",
"assets/assets/images/sheraa_image_5.webp": "28f757375d202e4298ab25f118cfcca6",
"assets/assets/images/web_p1_image_4.png": "229f71410421352a6067979b21a0fc12",
"assets/assets/images/web_p1_image_5.png": "436cbc44ebc017897596d297c18b83ad",
"assets/assets/images/smart_care_user_image_2.png": "f55ed35f1be5a7e604091734b71fb241",
"assets/assets/images/cayan_image_3.png": "e23e1d50ef98817542b55aeba7866aab",
"assets/assets/images/smart_care_doctor_image_2.png": "2c2c32b3b4589bc0e5d85e7f312decbc",
"assets/assets/images/youtube.png": "642bfb077a5c99b6564f979578900c53",
"assets/assets/images/smart_care_doctor_image_3.png": "1fcee193083758846d5e74c1ed0aea64",
"assets/assets/images/cayan_image_2.png": "2591ebc70d1f28adeaad88271fe29efd",
"assets/assets/images/web_p2_image_4.png": "61ef0b8042b4fcc1a401029531eade4b",
"assets/assets/images/smart_care_user_image_3.png": "d6859679b7ffa4931f4828ee64e00d30",
"assets/assets/images/smart_care_user_image_1.png": "df0db198efd9e2b816924da3fb6316a7",
"assets/assets/images/smart_care_doctor_image_1.png": "aa254752b15b71292de6556becb09ab0",
"assets/assets/images/sheraa_image_2.webp": "418989f6d0f4245550c85e913c048998",
"assets/assets/images/cayan_image_1.png": "4dfd465960a09f3cc579d12be543f3f0",
"assets/assets/images/smart_care_user_image_4.png": "72dd2d31176cfbb0cc944f886393eeb3",
"assets/assets/images/cayan_image_5.png": "36430e3e38d5e245cd9949dc69a34aa6",
"assets/assets/images/web_p2_image_3.png": "4542c24dafa5ea985ff6e0d59f15c245",
"assets/assets/images/sheraa_image_3.webp": "ec41a794b28375c5804b1bf97f1eebe7",
"assets/assets/images/smart_care_user_image_11.png": "28ad3ba6078bb57a2944e8e8d1046ebb",
"assets/assets/images/smart_care_doctor_image_4.png": "bfc889da9fa9288533ded4d4025a037d",
"assets/assets/images/smart_care_doctor_image_5.png": "72f03eda64e22f372b6125060401ede3",
"assets/assets/images/smart_care_user_image_10.png": "b4f45e34022c122e2eeb538ca7b5a2fa",
"assets/assets/images/web_p2_image_2.png": "ce2065cc78880fa65e61d723f8af54c8",
"assets/assets/images/cayan_image_4.png": "a5e793a812f03b12ce6dffdde0fa1875",
"assets/assets/images/smart_care_user_image_5.png": "01d5e90bb51c7323f4f90423a08f6cc2",
"assets/assets/images/smart_care_user_image_7.png": "ba1914676d14564336f6ce1a31933a55",
"assets/assets/images/cayan_image_6.png": "b550ee875a8bdefd4a697162dba8de06",
"assets/assets/images/smart_care_doctor_image_7.png": "b2ef485caf8acf827980772b304248e1",
"assets/assets/images/smart_care_doctor_image_6.png": "9d20f5d83d86a422117a6e988cb2e780",
"assets/assets/images/web_p2_image_1.png": "caeb60d4095725e7fec5ff6252cd59ea",
"assets/assets/images/cayan_image_7.png": "390b011a51959b8d0f69553552c57534",
"assets/assets/images/smart_care_user_image_6.png": "296d920758a37313cf6a85768bc3deda",
"assets/assets/icons/service-icon2.png": "233237a0ea968e3515ef77663f78be36",
"assets/assets/icons/service-icon3.png": "16b55727c209fc8ff9da0df5731f1c11",
"assets/assets/icons/service-icon1.png": "2eaf1a87ec016307ba42e0bc65101f8b",
"assets/assets/icons/service-icon4.png": "2f29e0088963f8ae125b6d2622d74c0f",
"assets/assets/icons/service-icon5.png": "d2a756ff6ae67476d6d102fa82ef1a3c",
"assets/assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/fonts/JosefinSans/JosefinSans-Italic.ttf": "72c897aabeba0a923c4eca1b355fb866",
"assets/assets/fonts/JosefinSans/JosefinSans-Bold.ttf": "b22a8f2494bafa9cd040aa9db29bc43d",
"assets/assets/fonts/JosefinSans/JosefinSans-Light.ttf": "1e660e971a00bdedd9aea889b8b3308d",
"assets/assets/fonts/JosefinSans/JosefinSans-SemiBold.ttf": "4d6fba7324c7c30b35e1190e93f38aac",
"assets/assets/fonts/JosefinSans/JosefinSans-Regular.ttf": "effd9508e574fd2ab338bbd81f784f3e",
"assets/assets/fonts/JosefinSans/JosefinSans-Medium.ttf": "4c0529618e047e91b356eb04633136dc",
"assets/assets/gif/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
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
