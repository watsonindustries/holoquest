const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), u = [
  e + "/_app/immutable/entry/app.f91edc57.js",
  e + "/_app/immutable/assets/0.e6a52ae5.css",
  e + "/_app/immutable/nodes/0.f20f278c.js",
  e + "/_app/immutable/nodes/1.4104df74.js",
  e + "/_app/immutable/nodes/2.beb068ca.js",
  e + "/_app/immutable/nodes/3.f019bb16.js",
  e + "/_app/immutable/nodes/4.e5bc49d5.js",
  e + "/_app/immutable/nodes/5.3ceed138.js",
  e + "/_app/immutable/chunks/const.96e908ff.js",
  e + "/_app/immutable/chunks/crypto.6f6cc81d.js",
  e + "/_app/immutable/chunks/index.11e3f03e.js",
  e + "/_app/immutable/chunks/index.c098f3de.js",
  e + "/_app/immutable/chunks/preload-helper.41c905a7.js",
  e + "/_app/immutable/chunks/qr-scanner.min.4880ecae.js",
  e + "/_app/immutable/chunks/singletons.8aed895e.js",
  e + "/_app/immutable/entry/start.343d0992.js",
  e + "/_app/immutable/chunks/qr-scanner-worker.min.5f44a019.js"
], h = [
  e + "/favicon.png",
  e + "/icons/logo_192.png",
  e + "/logo_512.png",
  e + "/manifest.json",
  e + "/robots.txt"
], i = "1685833845355", n = self, p = `cache${i}`, r = `offline${i}`, d = ["/", "/result", "/scanner", "/about"], f = [
  "https://4.bp.blogspot.com/-ZMzPgyP64Zg/WFuJyby0eDI/AAAAAAABAmk/I_UtFowN0ecaQiqgYGpTsKGTqFzMLESdwCLcB/s800/nenga_hanko_kingashinnen_maru.png"
], b = (s) => s.map((t) => self.location.origin + t), _ = b([
  ...h.filter((s) => !/\/icons\/(apple.*?|original.png)/.test(s)),
  ...u,
  ...d
]), l = [..._, ...f], A = new Set(l);
n.addEventListener("install", (s) => {
  s.waitUntil(
    caches.open(p).then((t) => t.addAll(l)).then(() => {
      n.skipWaiting();
    })
  );
});
n.addEventListener("activate", (s) => {
  s.waitUntil(
    caches.keys().then(async (t) => {
      for (const a of t)
        a !== p && a !== r && await caches.delete(a);
      n.clients.claim();
    })
  );
});
async function g(s) {
  const t = await caches.open(r);
  try {
    const a = await fetch(s);
    return t.put(s, a.clone()), a;
  } catch (a) {
    const c = await t.match(s);
    if (c)
      return c;
    throw a;
  }
}
n.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET" || s.request.headers.has("range"))
    return;
  const t = new URL(s.request.url), a = t.protocol.startsWith("http"), c = t.hostname === self.location.hostname && t.port !== self.location.port, o = A.has(t.href), m = s.request.cache === "only-if-cached" && !o;
  a && !c && !m && s.respondWith(
    (async () => o && await caches.match(s.request) || g(s.request))()
  );
});
