const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), h = [
  s + "/_app/immutable/entry/app.490e51b6.js",
  s + "/_app/immutable/assets/0.23b00dc7.css",
  s + "/_app/immutable/nodes/0.03201873.js",
  s + "/_app/immutable/nodes/1.9a92f9a3.js",
  s + "/_app/immutable/nodes/2.397b0553.js",
  s + "/_app/immutable/nodes/3.ea3c153d.js",
  s + "/_app/immutable/nodes/4.1e70d41b.js",
  s + "/_app/immutable/nodes/5.fe7ec4f7.js",
  s + "/_app/immutable/chunks/const.20bb8ed5.js",
  s + "/_app/immutable/chunks/crypto.6f6cc81d.js",
  s + "/_app/immutable/chunks/index.109b436a.js",
  s + "/_app/immutable/chunks/index.74714e33.js",
  s + "/_app/immutable/chunks/preload-helper.41c905a7.js",
  s + "/_app/immutable/chunks/qr-scanner.min.4880ecae.js",
  s + "/_app/immutable/chunks/singletons.88e9f2e3.js",
  s + "/_app/immutable/entry/start.6cec3512.js",
  s + "/_app/immutable/chunks/qr-scanner-worker.min.5f44a019.js"
], u = [
  s + "/favicon.png",
  s + "/fonts/Geologica.ttf",
  s + "/icons/android-chrome-192x192.png",
  s + "/icons/android-chrome-512x512.png",
  s + "/icons/apple-touch-icon.png",
  s + "/icons/favicon-16x16.png",
  s + "/icons/favicon-32x32.png",
  s + "/icons/favicon.ico",
  s + "/icons/logo_192.png",
  s + "/logo_512.png",
  s + "/manifest.json",
  s + "/robots.txt"
], i = "1685897045034", a = self, p = `cache${i}`, r = `offline${i}`, d = ["/", "/result", "/scanner", "/about"], f = [
  "https://4.bp.blogspot.com/-ZMzPgyP64Zg/WFuJyby0eDI/AAAAAAABAmk/I_UtFowN0ecaQiqgYGpTsKGTqFzMLESdwCLcB/s800/nenga_hanko_kingashinnen_maru.png"
], b = (e) => e.map((t) => self.location.origin + t), _ = b([
  ...u.filter((e) => !/\/icons\/(apple.*?|original.png)/.test(e)),
  ...h,
  ...d
]), l = [..._, ...f], g = new Set(l);
a.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(p).then((t) => t.addAll(l)).then(() => {
      a.skipWaiting();
    })
  );
});
a.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (t) => {
      for (const n of t)
        n !== p && n !== r && await caches.delete(n);
      a.clients.claim();
    })
  );
});
async function A(e) {
  const t = await caches.open(r);
  try {
    const n = await fetch(e);
    return t.put(e, n.clone()), n;
  } catch (n) {
    const c = await t.match(e);
    if (c)
      return c;
    throw n;
  }
}
a.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const t = new URL(e.request.url), n = t.protocol.startsWith("http"), c = t.hostname === self.location.hostname && t.port !== self.location.port, o = g.has(t.href), m = e.request.cache === "only-if-cached" && !o;
  n && !c && !m && e.respondWith(
    (async () => o && await caches.match(e.request) || A(e.request))()
  );
});
