const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), u = [
  s + "/_app/immutable/entry/app.5b1b7877.js",
  s + "/_app/immutable/assets/0.02a0b574.css",
  s + "/_app/immutable/nodes/0.7b9fbba3.js",
  s + "/_app/immutable/nodes/1.1772c799.js",
  s + "/_app/immutable/nodes/2.29daa965.js",
  s + "/_app/immutable/nodes/3.75990d8e.js",
  s + "/_app/immutable/nodes/4.f00b295e.js",
  s + "/_app/immutable/nodes/5.07868d9d.js",
  s + "/_app/immutable/chunks/const.96e908ff.js",
  s + "/_app/immutable/chunks/crypto.6f6cc81d.js",
  s + "/_app/immutable/chunks/index.82b77fb4.js",
  s + "/_app/immutable/chunks/index.af4913a8.js",
  s + "/_app/immutable/chunks/preload-helper.41c905a7.js",
  s + "/_app/immutable/chunks/qr-scanner.min.4880ecae.js",
  s + "/_app/immutable/chunks/singletons.93822dc1.js",
  s + "/_app/immutable/entry/start.dda379b3.js",
  s + "/_app/immutable/chunks/qr-scanner-worker.min.5f44a019.js"
], h = [
  s + "/favicon.png",
  s + "/icons/logo_192.png",
  s + "/logo_512.png",
  s + "/manifest.json",
  s + "/robots.txt"
], i = "1685831177344", n = self, p = `cache${i}`, r = `offline${i}`, d = ["/", "/result", "/scanner", "/about"], b = [
  "https://4.bp.blogspot.com/-ZMzPgyP64Zg/WFuJyby0eDI/AAAAAAABAmk/I_UtFowN0ecaQiqgYGpTsKGTqFzMLESdwCLcB/s800/nenga_hanko_kingashinnen_maru.png"
], f = (t) => t.map((e) => self.location.origin + e), _ = f([
  ...h.filter((t) => !/\/icons\/(apple.*?|original.png)/.test(t)),
  ...u,
  ...d
]), l = [..._, ...b], A = new Set(l);
n.addEventListener("install", (t) => {
  t.waitUntil(
    caches.open(p).then((e) => e.addAll(l)).then(() => {
      n.skipWaiting();
    })
  );
});
n.addEventListener("activate", (t) => {
  t.waitUntil(
    caches.keys().then(async (e) => {
      for (const a of e)
        a !== p && a !== r && await caches.delete(a);
      n.clients.claim();
    })
  );
});
async function g(t) {
  const e = await caches.open(r);
  try {
    const a = await fetch(t);
    return e.put(t, a.clone()), a;
  } catch (a) {
    const c = await e.match(t);
    if (c)
      return c;
    throw a;
  }
}
n.addEventListener("fetch", (t) => {
  if (t.request.method !== "GET" || t.request.headers.has("range"))
    return;
  const e = new URL(t.request.url), a = e.protocol.startsWith("http"), c = e.hostname === self.location.hostname && e.port !== self.location.port, o = A.has(e.href), m = t.request.cache === "only-if-cached" && !o;
  a && !c && !m && t.respondWith(
    (async () => o && await caches.match(t.request) || g(t.request))()
  );
});
