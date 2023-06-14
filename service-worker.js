const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), u = [
  s + "/_app/immutable/entry/app.4dcd43cf.js",
  s + "/_app/immutable/assets/0.d03c7c73.css",
  s + "/_app/immutable/nodes/0.bc785264.js",
  s + "/_app/immutable/nodes/1.94b66830.js",
  s + "/_app/immutable/nodes/2.6db1009b.js",
  s + "/_app/immutable/nodes/3.6d901ef0.js",
  s + "/_app/immutable/nodes/4.2427faf7.js",
  s + "/_app/immutable/nodes/5.7f59020c.js",
  s + "/_app/immutable/nodes/6.fa2d3be6.js",
  s + "/_app/immutable/chunks/client.2f60997e.js",
  s + "/_app/immutable/chunks/const.e86bc028.js",
  s + "/_app/immutable/chunks/crypto.6f6cc81d.js",
  s + "/_app/immutable/chunks/custom.b03ad683.js",
  s + "/_app/immutable/chunks/index.452c6ad5.js",
  s + "/_app/immutable/chunks/index.a116848c.js",
  s + "/_app/immutable/chunks/index.f2e2f952.js",
  s + "/_app/immutable/chunks/index.f45b4d2e.js",
  s + "/_app/immutable/chunks/preload-helper.41c905a7.js",
  s + "/_app/immutable/chunks/qr-scanner.min.4880ecae.js",
  s + "/_app/immutable/chunks/singletons.dff79676.js",
  s + "/_app/immutable/chunks/store.76160239.js",
  s + "/_app/immutable/entry/start.fa65c0fe.js",
  s + "/_app/immutable/chunks/qr-scanner-worker.min.5f44a019.js"
], h = [
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
], i = "1686778530719", n = self, p = `cache${i}`, m = `offline${i}`, d = ["/", "/result", "/scanner", "/about"], f = [
  "https://4.bp.blogspot.com/-ZMzPgyP64Zg/WFuJyby0eDI/AAAAAAABAmk/I_UtFowN0ecaQiqgYGpTsKGTqFzMLESdwCLcB/s800/nenga_hanko_kingashinnen_maru.png"
], b = (e) => e.map((t) => self.location.origin + t), _ = b([
  ...h.filter((e) => !/\/icons\/(apple.*?|original.png)/.test(e)),
  ...u,
  ...d
]), r = [..._, ...f], g = new Set(r);
n.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(p).then((t) => t.addAll(r)).then(() => {
      n.skipWaiting();
    })
  );
});
n.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (t) => {
      for (const a of t)
        a !== p && a !== m && await caches.delete(a);
      n.clients.claim();
    })
  );
});
async function j(e) {
  const t = await caches.open(m);
  try {
    const a = await fetch(e);
    return t.put(e, a.clone()), a;
  } catch (a) {
    const c = await t.match(e);
    if (c)
      return c;
    throw a;
  }
}
n.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const t = new URL(e.request.url), a = t.protocol.startsWith("http"), c = t.hostname === self.location.hostname && t.port !== self.location.port, o = g.has(t.href), l = e.request.cache === "only-if-cached" && !o;
  a && !c && !l && e.respondWith(
    (async () => o && await caches.match(e.request) || j(e.request))()
  );
});
