const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), h = [
  s + "/_app/immutable/entry/app.92c27e4a.js",
  s + "/_app/immutable/assets/0.da9b280a.css",
  s + "/_app/immutable/nodes/0.234f0faa.js",
  s + "/_app/immutable/nodes/1.56a28a01.js",
  s + "/_app/immutable/nodes/2.bf8e92a1.js",
  s + "/_app/immutable/nodes/3.19c5773a.js",
  s + "/_app/immutable/nodes/4.ca0710de.js",
  s + "/_app/immutable/nodes/5.708338ad.js",
  s + "/_app/immutable/chunks/const.96e908ff.js",
  s + "/_app/immutable/chunks/crypto.6f6cc81d.js",
  s + "/_app/immutable/chunks/index.b3b488b5.js",
  s + "/_app/immutable/chunks/index.e342b214.js",
  s + "/_app/immutable/chunks/preload-helper.41c905a7.js",
  s + "/_app/immutable/chunks/qr-scanner.min.4880ecae.js",
  s + "/_app/immutable/chunks/singletons.ea2bf3a4.js",
  s + "/_app/immutable/entry/start.cd55f88a.js",
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
], i = "1685889933626", n = self, p = `cache${i}`, r = `offline${i}`, d = ["/", "/result", "/scanner", "/about"], f = [
  "https://4.bp.blogspot.com/-ZMzPgyP64Zg/WFuJyby0eDI/AAAAAAABAmk/I_UtFowN0ecaQiqgYGpTsKGTqFzMLESdwCLcB/s800/nenga_hanko_kingashinnen_maru.png"
], b = (e) => e.map((t) => self.location.origin + t), _ = b([
  ...u.filter((e) => !/\/icons\/(apple.*?|original.png)/.test(e)),
  ...h,
  ...d
]), l = [..._, ...f], g = new Set(l);
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
async function A(e) {
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
  const t = new URL(e.request.url), a = t.protocol.startsWith("http"), c = t.hostname === self.location.hostname && t.port !== self.location.port, o = g.has(t.href), m = e.request.cache === "only-if-cached" && !o;
  a && !c && !m && e.respondWith(
    (async () => o && await caches.match(e.request) || A(e.request))()
  );
});
