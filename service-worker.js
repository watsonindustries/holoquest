const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), u = [
  s + "/_app/immutable/entry/app.e58456f7.js",
  s + "/_app/immutable/assets/0.66bfccba.css",
  s + "/_app/immutable/nodes/0.407714a9.js",
  s + "/_app/immutable/nodes/1.53500e4b.js",
  s + "/_app/immutable/nodes/2.de641064.js",
  s + "/_app/immutable/nodes/3.f019bb16.js",
  s + "/_app/immutable/nodes/4.e5bc49d5.js",
  s + "/_app/immutable/nodes/5.a548aad4.js",
  s + "/_app/immutable/chunks/const.96e908ff.js",
  s + "/_app/immutable/chunks/crypto.6f6cc81d.js",
  s + "/_app/immutable/chunks/index.11e3f03e.js",
  s + "/_app/immutable/chunks/index.d92546bf.js",
  s + "/_app/immutable/chunks/preload-helper.41c905a7.js",
  s + "/_app/immutable/chunks/qr-scanner.min.4880ecae.js",
  s + "/_app/immutable/chunks/singletons.ed9c8d7d.js",
  s + "/_app/immutable/entry/start.e22bce2a.js",
  s + "/_app/immutable/chunks/qr-scanner-worker.min.5f44a019.js"
], h = [
  s + "/favicon.png",
  s + "/icons/logo_192.png",
  s + "/logo_512.png",
  s + "/manifest.json",
  s + "/robots.txt"
], i = "1685836315590", n = self, p = `cache${i}`, r = `offline${i}`, d = ["/", "/result", "/scanner", "/about"], b = [
  "https://4.bp.blogspot.com/-ZMzPgyP64Zg/WFuJyby0eDI/AAAAAAABAmk/I_UtFowN0ecaQiqgYGpTsKGTqFzMLESdwCLcB/s800/nenga_hanko_kingashinnen_maru.png"
], f = (e) => e.map((t) => self.location.origin + t), _ = f([
  ...h.filter((e) => !/\/icons\/(apple.*?|original.png)/.test(e)),
  ...u,
  ...d
]), l = [..._, ...b], A = new Set(l);
n.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(p).then((t) => t.addAll(l)).then(() => {
      n.skipWaiting();
    })
  );
});
n.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (t) => {
      for (const a of t)
        a !== p && a !== r && await caches.delete(a);
      n.clients.claim();
    })
  );
});
async function g(e) {
  const t = await caches.open(r);
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
  const t = new URL(e.request.url), a = t.protocol.startsWith("http"), c = t.hostname === self.location.hostname && t.port !== self.location.port, o = A.has(t.href), m = e.request.cache === "only-if-cached" && !o;
  a && !c && !m && e.respondWith(
    (async () => o && await caches.match(e.request) || g(e.request))()
  );
});
