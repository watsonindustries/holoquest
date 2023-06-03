const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), u = [
  s + "/_app/immutable/entry/app.3d3947c6.js",
  s + "/_app/immutable/assets/0.db8697fb.css",
  s + "/_app/immutable/nodes/0.e076b130.js",
  s + "/_app/immutable/nodes/1.98781a44.js",
  s + "/_app/immutable/nodes/2.96d41988.js",
  s + "/_app/immutable/nodes/3.e67998b3.js",
  s + "/_app/immutable/nodes/4.e7c97cd2.js",
  s + "/_app/immutable/nodes/5.a2383413.js",
  s + "/_app/immutable/chunks/const.96e908ff.js",
  s + "/_app/immutable/chunks/crypto.6f6cc81d.js",
  s + "/_app/immutable/chunks/index.3243155e.js",
  s + "/_app/immutable/chunks/index.5f357576.js",
  s + "/_app/immutable/chunks/preload-helper.41c905a7.js",
  s + "/_app/immutable/chunks/singletons.b71cf117.js",
  s + "/_app/immutable/entry/start.c93c31db.js",
  s + "/_app/immutable/chunks/qr-scanner-worker.min.5f44a019.js"
], h = [
  s + "/favicon.png",
  s + "/icons/logo_192.png",
  s + "/logo_512.png",
  s + "/manifest.json",
  s + "/robots.txt"
], i = "1685828010040", n = self, p = `cache${i}`, r = `offline${i}`, d = ["/", "/result", "/scanner", "/about"], f = [], b = (t) => t.map((e) => self.location.origin + e), _ = b([
  ...h.filter((t) => !/\/icons\/(apple.*?|original.png)/.test(t)),
  ...u,
  ...d
]), l = [..._, ...f], j = new Set(l);
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
async function A(t) {
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
  const e = new URL(t.request.url), a = e.protocol.startsWith("http"), c = e.hostname === self.location.hostname && e.port !== self.location.port, o = j.has(e.href), m = t.request.cache === "only-if-cached" && !o;
  a && !c && !m && t.respondWith(
    (async () => o && await caches.match(t.request) || A(t.request))()
  );
});
