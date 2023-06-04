const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), h = [
  s + "/_app/immutable/entry/app.dab7d3ca.js",
  s + "/_app/immutable/assets/0.da9b280a.css",
  s + "/_app/immutable/nodes/0.54dabcc2.js",
  s + "/_app/immutable/nodes/1.5e2e2d29.js",
  s + "/_app/immutable/nodes/2.b8f08be9.js",
  s + "/_app/immutable/nodes/3.2219d4de.js",
  s + "/_app/immutable/nodes/4.b8360d60.js",
  s + "/_app/immutable/nodes/5.400bb1f4.js",
  s + "/_app/immutable/chunks/const.96e908ff.js",
  s + "/_app/immutable/chunks/crypto.6f6cc81d.js",
  s + "/_app/immutable/chunks/index.11e3f03e.js",
  s + "/_app/immutable/chunks/index.d92546bf.js",
  s + "/_app/immutable/chunks/preload-helper.41c905a7.js",
  s + "/_app/immutable/chunks/qr-scanner.min.4880ecae.js",
  s + "/_app/immutable/chunks/singletons.9d41d2c5.js",
  s + "/_app/immutable/entry/start.32806795.js",
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
], i = "1685889205595", a = self, p = `cache${i}`, r = `offline${i}`, d = ["/", "/result", "/scanner", "/about"], f = [
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
