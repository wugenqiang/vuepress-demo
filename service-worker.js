/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "22ca0db9c34682ddfc7744d29c110eb4"
  },
  {
    "url": "assets/css/0.styles.b09ede54.css",
    "revision": "9b10f36b7052aa805ae6d399af229924"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9357ef77.js",
    "revision": "b284db7cb99df91e0215a1b6b408b56d"
  },
  {
    "url": "assets/js/11.1faa2fbe.js",
    "revision": "5f5d3e1a546482bd494d3fcaf2599718"
  },
  {
    "url": "assets/js/12.7354bcf7.js",
    "revision": "7d89fb681b1a4e505bfb60ca93795f0d"
  },
  {
    "url": "assets/js/13.f2294f82.js",
    "revision": "a72e1cf2b068e8010834a1273b1edfbb"
  },
  {
    "url": "assets/js/14.b3c95f31.js",
    "revision": "22bb10a65f61a6b8f22432b76cfb1b3d"
  },
  {
    "url": "assets/js/2.767dcaad.js",
    "revision": "1b99aeb0d827648a97161930cd2a3868"
  },
  {
    "url": "assets/js/3.382854fd.js",
    "revision": "35a73595911e042cb42d2e701938af5a"
  },
  {
    "url": "assets/js/4.ba974da7.js",
    "revision": "abff5e8534d66f8a617b019461e52eff"
  },
  {
    "url": "assets/js/5.322cfaaa.js",
    "revision": "45983b11d65cdd438e2219ee514121ea"
  },
  {
    "url": "assets/js/6.4af30638.js",
    "revision": "65bec2f7ff8941de7086d080fbdb77ba"
  },
  {
    "url": "assets/js/7.0acbb694.js",
    "revision": "09a8b43ac33d177c3982bdc889a573e1"
  },
  {
    "url": "assets/js/8.7f6f2b8c.js",
    "revision": "c600488f5354c3e9c338877407b01316"
  },
  {
    "url": "assets/js/9.a791fcbd.js",
    "revision": "d300cf834b8e124be450c620685113c7"
  },
  {
    "url": "assets/js/app.5ad66b20.js",
    "revision": "f5c1454ec08645bfce16b86d9ab3f4be"
  },
  {
    "url": "guide/VuePress创建文档网站.html",
    "revision": "2a5937b258cdce8a8b7ff750aad813c7"
  },
  {
    "url": "images/touxiang.png",
    "revision": "909137d124e3f2de1f9ed4ff0c4a1031"
  },
  {
    "url": "index.html",
    "revision": "91febe4a531f0d9be84a8a22fa4711d0"
  },
  {
    "url": "link/contact.html",
    "revision": "6f9564268937395e0f28a6098a067182"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
