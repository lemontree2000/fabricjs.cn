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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0d6fcd46906133baa94bd0691a40e313"
  },
  {
    "url": "assets/css/0.styles.aaa9531c.css",
    "revision": "5f49b9b3b9035d107c006c49b418d559"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/3.202bf88a.js",
    "revision": "1ab30f7643179a5815d07a57cb783c34"
  },
  {
    "url": "assets/js/4.b2ad7e2c.js",
    "revision": "1489cc62ab2da6e2f6df77feb85d2fc9"
  },
  {
    "url": "assets/js/app.68e89e8b.js",
    "revision": "ace22b7cad045e60b087ca0393646f40"
  },
  {
    "url": "index.html",
    "revision": "d84b429bba701f7690797f06aae9ac2e"
  },
  {
    "url": "screenshot.png",
    "revision": "624d7b3adc9568bf9938a0ab5766aef0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
