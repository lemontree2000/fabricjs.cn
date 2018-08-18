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
    "revision": "258af51e05fa670a5a5c0abebfaf3d56"
  },
  {
    "url": "assets/css/0.styles.954ac025.css",
    "revision": "238a66725e34e1e4979ba5a63265277e"
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
    "url": "assets/js/app.23a5a86e.js",
    "revision": "c041027a323dbe7a7f570a2d17479541"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "index.html",
    "revision": "32d7ea2b20e3bbc42d2c6ee952134f41"
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
