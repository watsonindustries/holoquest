const u = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), q = [
  u + "/_app/immutable/entry/app.708b906d.js",
  u + "/_app/immutable/assets/0.c4530fc8.css",
  u + "/_app/immutable/nodes/0.8cacf068.js",
  u + "/_app/immutable/nodes/1.57f48323.js",
  u + "/_app/immutable/nodes/2.f0453491.js",
  u + "/_app/immutable/nodes/3.6d901ef0.js",
  u + "/_app/immutable/nodes/4.2427faf7.js",
  u + "/_app/immutable/nodes/5.7f59020c.js",
  u + "/_app/immutable/nodes/6.fa2d3be6.js",
  u + "/_app/immutable/chunks/client.2f60997e.js",
  u + "/_app/immutable/chunks/const.e86bc028.js",
  u + "/_app/immutable/chunks/crypto.6f6cc81d.js",
  u + "/_app/immutable/chunks/custom.b03ad683.js",
  u + "/_app/immutable/chunks/index.452c6ad5.js",
  u + "/_app/immutable/chunks/index.a116848c.js",
  u + "/_app/immutable/chunks/index.f2e2f952.js",
  u + "/_app/immutable/chunks/index.f45b4d2e.js",
  u + "/_app/immutable/chunks/preload-helper.41c905a7.js",
  u + "/_app/immutable/chunks/qr-scanner.min.4880ecae.js",
  u + "/_app/immutable/chunks/singletons.0b113062.js",
  u + "/_app/immutable/chunks/store.76160239.js",
  u + "/_app/immutable/entry/start.59a84af7.js",
  u + "/_app/immutable/chunks/qr-scanner-worker.min.5f44a019.js"
], K = [
  u + "/favicon.png",
  u + "/fonts/Geologica.ttf",
  u + "/icons/android-chrome-192x192.png",
  u + "/icons/android-chrome-512x512.png",
  u + "/icons/apple-touch-icon.png",
  u + "/icons/favicon-16x16.png",
  u + "/icons/favicon-32x32.png",
  u + "/icons/favicon.ico",
  u + "/icons/logo_192.png",
  u + "/logo_512.png",
  u + "/manifest.json",
  u + "/robots.txt"
], j = [
  u + "/"
], A = "1686994206376";
try {
  self["workbox:core:7.0.0"] && _();
} catch {
}
const S = {
  "invalid-value": ({ paramName: r, validValueDescription: e, value: t }) => {
    if (!r || !e)
      throw new Error("Unexpected input to 'invalid-value' error.");
    return `The '${r}' parameter was given a value with an unexpected value. ${e} Received a value of ${JSON.stringify(t)}.`;
  },
  "not-an-array": ({ moduleName: r, className: e, funcName: t, paramName: s }) => {
    if (!r || !e || !t || !s)
      throw new Error("Unexpected input to 'not-an-array' error.");
    return `The parameter '${s}' passed into '${r}.${e}.${t}()' must be an array.`;
  },
  "incorrect-type": ({ expectedType: r, paramName: e, moduleName: t, className: s, funcName: n }) => {
    if (!r || !e || !t || !n)
      throw new Error("Unexpected input to 'incorrect-type' error.");
    const o = s ? `${s}.` : "";
    return `The parameter '${e}' passed into '${t}.${o}${n}()' must be of type ${r}.`;
  },
  "incorrect-class": ({ expectedClassName: r, paramName: e, moduleName: t, className: s, funcName: n, isReturnValueProblem: o }) => {
    if (!r || !t || !n)
      throw new Error("Unexpected input to 'incorrect-class' error.");
    const a = s ? `${s}.` : "";
    return o ? `The return value from '${t}.${a}${n}()' must be an instance of class ${r}.` : `The parameter '${e}' passed into '${t}.${a}${n}()' must be an instance of class ${r}.`;
  },
  "missing-a-method": ({ expectedMethod: r, paramName: e, moduleName: t, className: s, funcName: n }) => {
    if (!r || !e || !t || !s || !n)
      throw new Error("Unexpected input to 'missing-a-method' error.");
    return `${t}.${s}.${n}() expected the '${e}' parameter to expose a '${r}' method.`;
  },
  "add-to-cache-list-unexpected-type": ({ entry: r }) => `An unexpected entry was passed to 'workbox-precaching.PrecacheController.addToCacheList()' The entry '${JSON.stringify(r)}' isn't supported. You must supply an array of strings with one or more characters, objects with a url property or Request objects.`,
  "add-to-cache-list-conflicting-entries": ({ firstEntry: r, secondEntry: e }) => {
    if (!r || !e)
      throw new Error("Unexpected input to 'add-to-cache-list-duplicate-entries' error.");
    return `Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${r} but different revision details. Workbox is unable to cache and version the asset correctly. Please remove one of the entries.`;
  },
  "plugin-error-request-will-fetch": ({ thrownErrorMessage: r }) => {
    if (!r)
      throw new Error("Unexpected input to 'plugin-error-request-will-fetch', error.");
    return `An error was thrown by a plugins 'requestWillFetch()' method. The thrown error message was: '${r}'.`;
  },
  "invalid-cache-name": ({ cacheNameId: r, value: e }) => {
    if (!r)
      throw new Error("Expected a 'cacheNameId' for error 'invalid-cache-name'");
    return `You must provide a name containing at least one character for setCacheDetails({${r}: '...'}). Received a value of '${JSON.stringify(e)}'`;
  },
  "unregister-route-but-not-found-with-method": ({ method: r }) => {
    if (!r)
      throw new Error("Unexpected input to 'unregister-route-but-not-found-with-method' error.");
    return `The route you're trying to unregister was not  previously registered for the method type '${r}'.`;
  },
  "unregister-route-route-not-registered": () => "The route you're trying to unregister was not previously registered.",
  "queue-replay-failed": ({ name: r }) => `Replaying the background sync queue '${r}' failed.`,
  "duplicate-queue-name": ({ name: r }) => `The Queue name '${r}' is already being used. All instances of backgroundSync.Queue must be given unique names.`,
  "expired-test-without-max-age": ({ methodName: r, paramName: e }) => `The '${r}()' method can only be used when the '${e}' is used in the constructor.`,
  "unsupported-route-type": ({ moduleName: r, className: e, funcName: t, paramName: s }) => `The supplied '${s}' parameter was an unsupported type. Please check the docs for ${r}.${e}.${t} for valid input types.`,
  "not-array-of-class": ({ value: r, expectedClass: e, moduleName: t, className: s, funcName: n, paramName: o }) => `The supplied '${o}' parameter must be an array of '${e}' objects. Received '${JSON.stringify(r)},'. Please check the call to ${t}.${s}.${n}() to fix the issue.`,
  "max-entries-or-age-required": ({ moduleName: r, className: e, funcName: t }) => `You must define either config.maxEntries or config.maxAgeSecondsin ${r}.${e}.${t}`,
  "statuses-or-headers-required": ({ moduleName: r, className: e, funcName: t }) => `You must define either config.statuses or config.headersin ${r}.${e}.${t}`,
  "invalid-string": ({ moduleName: r, funcName: e, paramName: t }) => {
    if (!t || !r || !e)
      throw new Error("Unexpected input to 'invalid-string' error.");
    return `When using strings, the '${t}' parameter must start with 'http' (for cross-origin matches) or '/' (for same-origin matches). Please see the docs for ${r}.${e}() for more info.`;
  },
  "channel-name-required": () => "You must provide a channelName to construct a BroadcastCacheUpdate instance.",
  "invalid-responses-are-same-args": () => "The arguments passed into responsesAreSame() appear to be invalid. Please ensure valid Responses are used.",
  "expire-custom-caches-only": () => "You must provide a 'cacheName' property when using the expiration plugin with a runtime caching strategy.",
  "unit-must-be-bytes": ({ normalizedRangeHeader: r }) => {
    if (!r)
      throw new Error("Unexpected input to 'unit-must-be-bytes' error.");
    return `The 'unit' portion of the Range header must be set to 'bytes'. The Range header provided was "${r}"`;
  },
  "single-range-only": ({ normalizedRangeHeader: r }) => {
    if (!r)
      throw new Error("Unexpected input to 'single-range-only' error.");
    return `Multiple ranges are not supported. Please use a  single start value, and optional end value. The Range header provided was "${r}"`;
  },
  "invalid-range-values": ({ normalizedRangeHeader: r }) => {
    if (!r)
      throw new Error("Unexpected input to 'invalid-range-values' error.");
    return `The Range header is missing both start and end values. At least one of those values is needed. The Range header provided was "${r}"`;
  },
  "no-range-header": () => "No Range header was found in the Request provided.",
  "range-not-satisfiable": ({ size: r, start: e, end: t }) => `The start (${e}) and end (${t}) values in the Range are not satisfiable by the cached response, which is ${r} bytes.`,
  "attempt-to-cache-non-get-request": ({ url: r, method: e }) => `Unable to cache '${r}' because it is a '${e}' request and only 'GET' requests can be cached.`,
  "cache-put-with-no-response": ({ url: r }) => `There was an attempt to cache '${r}' but the response was not defined.`,
  "no-response": ({ url: r, error: e }) => {
    let t = `The strategy could not generate a response for '${r}'.`;
    return e && (t += ` The underlying error is ${e}.`), t;
  },
  "bad-precaching-response": ({ url: r, status: e }) => `The precaching request for '${r}' failed` + (e ? ` with an HTTP status of ${e}.` : "."),
  "non-precached-url": ({ url: r }) => `createHandlerBoundToURL('${r}') was called, but that URL is not precached. Please pass in a URL that is precached instead.`,
  "add-to-cache-list-conflicting-integrities": ({ url: r }) => `Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${r} with different integrity values. Please remove one of them.`,
  "missing-precache-entry": ({ cacheName: r, url: e }) => `Unable to find a precached response in ${r} for ${e}.`,
  "cross-origin-copy-response": ({ origin: r }) => `workbox-core.copyResponse() can only be used with same-origin responses. It was passed a response with origin ${r}.`,
  "opaque-streams-source": ({ type: r }) => {
    const e = `One of the workbox-streams sources resulted in an '${r}' response.`;
    return r === "opaqueredirect" ? `${e} Please do not use a navigation request that results in a redirect as a source.` : `${e} Please ensure your sources are CORS-enabled.`;
  }
}, I = (r, ...e) => {
  let t = r;
  return e.length > 0 && (t += ` :: ${JSON.stringify(e)}`), t;
}, M = (r, e = {}) => {
  const t = S[r];
  if (!t)
    throw new Error(`Unable to find message for code '${r}'.`);
  return t(e);
}, W = process.env.NODE_ENV === "production" ? I : M;
class h extends Error {
  /**
   *
   * @param {string} errorCode The error code that
   * identifies this particular error.
   * @param {Object=} details Any relevant arguments
   * that will help developers identify issues should
   * be added as a key on the context object.
   */
  constructor(e, t) {
    const s = W(e, t);
    super(s), this.name = e, this.details = t;
  }
}
const F = (r, e) => {
  if (!Array.isArray(r))
    throw new h("not-an-array", e);
}, H = (r, e, t) => {
  if (typeof r[e] !== "function")
    throw t.expectedMethod = e, new h("missing-a-method", t);
}, B = (r, e, t) => {
  if (typeof r !== e)
    throw t.expectedType = e, new h("incorrect-type", t);
}, G = (r, e, t) => {
  if (!(r instanceof e))
    throw t.expectedClassName = e.name, new h("incorrect-class", t);
}, J = (r, e, t) => {
  if (!e.includes(r))
    throw t.validValueDescription = `Valid values are ${JSON.stringify(e)}.`, new h("invalid-value", t);
}, Y = (r, e, t) => {
  const s = new h("not-array-of-class", t);
  if (!Array.isArray(r))
    throw s;
  for (const n of r)
    if (!(n instanceof e))
      throw s;
}, p = process.env.NODE_ENV === "production" ? null : {
  hasMethod: H,
  isArray: F,
  isInstance: G,
  isOneOf: J,
  isType: B,
  isArrayOfClass: Y
}, m = {
  googleAnalytics: "googleAnalytics",
  precache: "precache-v2",
  prefix: "workbox",
  runtime: "runtime",
  suffix: typeof registration < "u" ? registration.scope : ""
}, $ = (r) => [m.prefix, r, m.suffix].filter((e) => e && e.length > 0).join("-"), Q = (r) => {
  for (const e of Object.keys(m))
    r(e);
}, x = {
  updateDetails: (r) => {
    Q((e) => {
      typeof r[e] == "string" && (m[e] = r[e]);
    });
  },
  getGoogleAnalyticsName: (r) => r || $(m.googleAnalytics),
  getPrecacheName: (r) => r || $(m.precache),
  getPrefix: () => m.prefix,
  getRuntimeName: (r) => r || $(m.runtime),
  getSuffix: () => m.suffix
}, c = process.env.NODE_ENV === "production" ? null : (() => {
  "__WB_DISABLE_DEV_LOGS" in globalThis || (self.__WB_DISABLE_DEV_LOGS = !1);
  let r = !1;
  const e = {
    debug: "#7f8c8d",
    log: "#2ecc71",
    warn: "#f39c12",
    error: "#c0392b",
    groupCollapsed: "#3498db",
    groupEnd: null
    // No colored prefix on groupEnd
  }, t = function(o, a) {
    if (self.__WB_DISABLE_DEV_LOGS)
      return;
    if (o === "groupCollapsed" && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      console[o](...a);
      return;
    }
    const i = [
      `background: ${e[o]}`,
      "border-radius: 0.5em",
      "color: white",
      "font-weight: bold",
      "padding: 2px 0.5em"
    ], l = r ? [] : ["%cworkbox", i.join(";")];
    console[o](...l, ...a), o === "groupCollapsed" && (r = !0), o === "groupEnd" && (r = !1);
  }, s = {}, n = Object.keys(e);
  for (const o of n) {
    const a = o;
    s[a] = (...i) => {
      t(a, i);
    };
  }
  return s;
})();
function T(r, e) {
  const t = e();
  return r.waitUntil(t), t;
}
try {
  self["workbox:precaching:7.0.0"] && _();
} catch {
}
const X = "__WB_REVISION__";
function Z(r) {
  if (!r)
    throw new h("add-to-cache-list-unexpected-type", { entry: r });
  if (typeof r == "string") {
    const o = new URL(r, location.href);
    return {
      cacheKey: o.href,
      url: o.href
    };
  }
  const { revision: e, url: t } = r;
  if (!t)
    throw new h("add-to-cache-list-unexpected-type", { entry: r });
  if (!e) {
    const o = new URL(t, location.href);
    return {
      cacheKey: o.href,
      url: o.href
    };
  }
  const s = new URL(t, location.href), n = new URL(t, location.href);
  return s.searchParams.set(X, e), {
    cacheKey: s.href,
    url: n.href
  };
}
class z {
  constructor() {
    this.updatedURLs = [], this.notUpdatedURLs = [], this.handlerWillStart = async ({ request: e, state: t }) => {
      t && (t.originalRequest = e);
    }, this.cachedResponseWillBeUsed = async ({ event: e, state: t, cachedResponse: s }) => {
      if (e.type === "install" && t && t.originalRequest && t.originalRequest instanceof Request) {
        const n = t.originalRequest.url;
        s ? this.notUpdatedURLs.push(n) : this.updatedURLs.push(n);
      }
      return s;
    };
  }
}
class ee {
  constructor({ precacheController: e }) {
    this.cacheKeyWillBeUsed = async ({ request: t, params: s }) => {
      const n = (s == null ? void 0 : s.cacheKey) || this._precacheController.getCacheKeyForURL(t.url);
      return n ? new Request(n, { headers: t.headers }) : t;
    }, this._precacheController = e;
  }
}
const te = (r, e) => {
  c.groupCollapsed(r);
  for (const t of e)
    c.log(t);
  c.groupEnd();
};
function re(r) {
  const e = r.length;
  e > 0 && (c.groupCollapsed(`During precaching cleanup, ${e} cached request${e === 1 ? " was" : "s were"} deleted.`), te("Deleted Cache Requests", r), c.groupEnd());
}
function O(r, e) {
  if (e.length !== 0) {
    c.groupCollapsed(r);
    for (const t of e)
      c.log(t);
    c.groupEnd();
  }
}
function se(r, e) {
  const t = r.length, s = e.length;
  if (t || s) {
    let n = `Precaching ${t} file${t === 1 ? "" : "s"}.`;
    s > 0 && (n += ` ${s} file${s === 1 ? " is" : "s are"} already cached.`), c.groupCollapsed(n), O("View newly precached URLs.", r), O("View previously precached URLs.", e), c.groupEnd();
  }
}
let R;
function ne() {
  if (R === void 0) {
    const r = new Response("");
    if ("body" in r)
      try {
        new Response(r.body), R = !0;
      } catch {
        R = !1;
      }
    R = !1;
  }
  return R;
}
async function oe(r, e) {
  let t = null;
  if (r.url && (t = new URL(r.url).origin), t !== self.location.origin)
    throw new h("cross-origin-copy-response", { origin: t });
  const s = r.clone(), n = {
    headers: new Headers(s.headers),
    status: s.status,
    statusText: s.statusText
  }, o = e ? e(n) : n, a = ne() ? s.body : await s.blob();
  return new Response(a, o);
}
const d = (r) => new URL(String(r), location.href).href.replace(new RegExp(`^${location.origin}`), "");
function L(r, e) {
  const t = new URL(r);
  for (const s of e)
    t.searchParams.delete(s);
  return t.href;
}
async function ae(r, e, t, s) {
  const n = L(e.url, t);
  if (e.url === n)
    return r.match(e, s);
  const o = Object.assign(Object.assign({}, s), { ignoreSearch: !0 }), a = await r.keys(e, o);
  for (const i of a) {
    const l = L(i.url, t);
    if (n === l)
      return r.match(i, s);
  }
}
class ie {
  /**
   * Creates a promise and exposes its resolve and reject functions as methods.
   */
  constructor() {
    this.promise = new Promise((e, t) => {
      this.resolve = e, this.reject = t;
    });
  }
}
const D = /* @__PURE__ */ new Set();
async function ce() {
  process.env.NODE_ENV !== "production" && c.log(`About to run ${D.size} callbacks to clean up caches.`);
  for (const r of D)
    await r(), process.env.NODE_ENV !== "production" && c.log(r, "is complete.");
  process.env.NODE_ENV !== "production" && c.log("Finished running callbacks.");
}
function ue(r) {
  return new Promise((e) => setTimeout(e, r));
}
try {
  self["workbox:strategies:7.0.0"] && _();
} catch {
}
function v(r) {
  return typeof r == "string" ? new Request(r) : r;
}
class le {
  /**
   * Creates a new instance associated with the passed strategy and event
   * that's handling the request.
   *
   * The constructor also initializes the state that will be passed to each of
   * the plugins handling this request.
   *
   * @param {workbox-strategies.Strategy} strategy
   * @param {Object} options
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params] The return value from the
   *     {@link workbox-routing~matchCallback} (if applicable).
   */
  constructor(e, t) {
    this._cacheKeys = {}, process.env.NODE_ENV !== "production" && p.isInstance(t.event, ExtendableEvent, {
      moduleName: "workbox-strategies",
      className: "StrategyHandler",
      funcName: "constructor",
      paramName: "options.event"
    }), Object.assign(this, t), this.event = t.event, this._strategy = e, this._handlerDeferred = new ie(), this._extendLifetimePromises = [], this._plugins = [...e.plugins], this._pluginStateMap = /* @__PURE__ */ new Map();
    for (const s of this._plugins)
      this._pluginStateMap.set(s, {});
    this.event.waitUntil(this._handlerDeferred.promise);
  }
  /**
   * Fetches a given request (and invokes any applicable plugin callback
   * methods) using the `fetchOptions` (for non-navigation requests) and
   * `plugins` defined on the `Strategy` object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - `requestWillFetch()`
   * - `fetchDidSucceed()`
   * - `fetchDidFail()`
   *
   * @param {Request|string} input The URL or request to fetch.
   * @return {Promise<Response>}
   */
  async fetch(e) {
    const { event: t } = this;
    let s = v(e);
    if (s.mode === "navigate" && t instanceof FetchEvent && t.preloadResponse) {
      const a = await t.preloadResponse;
      if (a)
        return process.env.NODE_ENV !== "production" && c.log(`Using a preloaded navigation response for '${d(s.url)}'`), a;
    }
    const n = this.hasCallback("fetchDidFail") ? s.clone() : null;
    try {
      for (const a of this.iterateCallbacks("requestWillFetch"))
        s = await a({ request: s.clone(), event: t });
    } catch (a) {
      if (a instanceof Error)
        throw new h("plugin-error-request-will-fetch", {
          thrownErrorMessage: a.message
        });
    }
    const o = s.clone();
    try {
      let a;
      a = await fetch(s, s.mode === "navigate" ? void 0 : this._strategy.fetchOptions), process.env.NODE_ENV !== "production" && c.debug(`Network request for '${d(s.url)}' returned a response with status '${a.status}'.`);
      for (const i of this.iterateCallbacks("fetchDidSucceed"))
        a = await i({
          event: t,
          request: o,
          response: a
        });
      return a;
    } catch (a) {
      throw process.env.NODE_ENV !== "production" && c.log(`Network request for '${d(s.url)}' threw an error.`, a), n && await this.runCallbacks("fetchDidFail", {
        error: a,
        event: t,
        originalRequest: n.clone(),
        request: o.clone()
      }), a;
    }
  }
  /**
   * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
   * the response generated by `this.fetch()`.
   *
   * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
   * so you do not have to manually call `waitUntil()` on the event.
   *
   * @param {Request|string} input The request or URL to fetch and cache.
   * @return {Promise<Response>}
   */
  async fetchAndCachePut(e) {
    const t = await this.fetch(e), s = t.clone();
    return this.waitUntil(this.cachePut(e, s)), t;
  }
  /**
   * Matches a request from the cache (and invokes any applicable plugin
   * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
   * defined on the strategy object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - cacheKeyWillByUsed()
   * - cachedResponseWillByUsed()
   *
   * @param {Request|string} key The Request or URL to use as the cache key.
   * @return {Promise<Response|undefined>} A matching response, if found.
   */
  async cacheMatch(e) {
    const t = v(e);
    let s;
    const { cacheName: n, matchOptions: o } = this._strategy, a = await this.getCacheKey(t, "read"), i = Object.assign(Object.assign({}, o), { cacheName: n });
    s = await caches.match(a, i), process.env.NODE_ENV !== "production" && (s ? c.debug(`Found a cached response in '${n}'.`) : c.debug(`No cached response found in '${n}'.`));
    for (const l of this.iterateCallbacks("cachedResponseWillBeUsed"))
      s = await l({
        cacheName: n,
        matchOptions: o,
        cachedResponse: s,
        request: a,
        event: this.event
      }) || void 0;
    return s;
  }
  /**
   * Puts a request/response pair in the cache (and invokes any applicable
   * plugin callback methods) using the `cacheName` and `plugins` defined on
   * the strategy object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - cacheKeyWillByUsed()
   * - cacheWillUpdate()
   * - cacheDidUpdate()
   *
   * @param {Request|string} key The request or URL to use as the cache key.
   * @param {Response} response The response to cache.
   * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
   * not be cached, and `true` otherwise.
   */
  async cachePut(e, t) {
    const s = v(e);
    await ue(0);
    const n = await this.getCacheKey(s, "write");
    if (process.env.NODE_ENV !== "production") {
      if (n.method && n.method !== "GET")
        throw new h("attempt-to-cache-non-get-request", {
          url: d(n.url),
          method: n.method
        });
      const f = t.headers.get("Vary");
      f && c.debug(`The response for ${d(n.url)} has a 'Vary: ${f}' header. Consider setting the {ignoreVary: true} option on your strategy to ensure cache matching and deletion works as expected.`);
    }
    if (!t)
      throw process.env.NODE_ENV !== "production" && c.error(`Cannot cache non-existent response for '${d(n.url)}'.`), new h("cache-put-with-no-response", {
        url: d(n.url)
      });
    const o = await this._ensureResponseSafeToCache(t);
    if (!o)
      return process.env.NODE_ENV !== "production" && c.debug(`Response '${d(n.url)}' will not be cached.`, o), !1;
    const { cacheName: a, matchOptions: i } = this._strategy, l = await self.caches.open(a), w = this.hasCallback("cacheDidUpdate"), y = w ? await ae(
      // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
      // feature. Consider into ways to only add this behavior if using
      // precaching.
      l,
      n.clone(),
      ["__WB_REVISION__"],
      i
    ) : null;
    process.env.NODE_ENV !== "production" && c.debug(`Updating the '${a}' cache with a new Response for ${d(n.url)}.`);
    try {
      await l.put(n, w ? o.clone() : o);
    } catch (f) {
      if (f instanceof Error)
        throw f.name === "QuotaExceededError" && await ce(), f;
    }
    for (const f of this.iterateCallbacks("cacheDidUpdate"))
      await f({
        cacheName: a,
        oldResponse: y,
        newResponse: o.clone(),
        request: n,
        event: this.event
      });
    return !0;
  }
  /**
   * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
   * executes any of those callbacks found in sequence. The final `Request`
   * object returned by the last plugin is treated as the cache key for cache
   * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
   * been registered, the passed request is returned unmodified
   *
   * @param {Request} request
   * @param {string} mode
   * @return {Promise<Request>}
   */
  async getCacheKey(e, t) {
    const s = `${e.url} | ${t}`;
    if (!this._cacheKeys[s]) {
      let n = e;
      for (const o of this.iterateCallbacks("cacheKeyWillBeUsed"))
        n = v(await o({
          mode: t,
          request: n,
          event: this.event,
          // params has a type any can't change right now.
          params: this.params
          // eslint-disable-line
        }));
      this._cacheKeys[s] = n;
    }
    return this._cacheKeys[s];
  }
  /**
   * Returns true if the strategy has at least one plugin with the given
   * callback.
   *
   * @param {string} name The name of the callback to check for.
   * @return {boolean}
   */
  hasCallback(e) {
    for (const t of this._strategy.plugins)
      if (e in t)
        return !0;
    return !1;
  }
  /**
   * Runs all plugin callbacks matching the given name, in order, passing the
   * given param object (merged ith the current plugin state) as the only
   * argument.
   *
   * Note: since this method runs all plugins, it's not suitable for cases
   * where the return value of a callback needs to be applied prior to calling
   * the next callback. See
   * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
   * below for how to handle that case.
   *
   * @param {string} name The name of the callback to run within each plugin.
   * @param {Object} param The object to pass as the first (and only) param
   *     when executing each callback. This object will be merged with the
   *     current plugin state prior to callback execution.
   */
  async runCallbacks(e, t) {
    for (const s of this.iterateCallbacks(e))
      await s(t);
  }
  /**
   * Accepts a callback and returns an iterable of matching plugin callbacks,
   * where each callback is wrapped with the current handler state (i.e. when
   * you call each callback, whatever object parameter you pass it will
   * be merged with the plugin's current state).
   *
   * @param {string} name The name fo the callback to run
   * @return {Array<Function>}
   */
  *iterateCallbacks(e) {
    for (const t of this._strategy.plugins)
      if (typeof t[e] == "function") {
        const s = this._pluginStateMap.get(t);
        yield (o) => {
          const a = Object.assign(Object.assign({}, o), { state: s });
          return t[e](a);
        };
      }
  }
  /**
   * Adds a promise to the
   * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
   * of the event event associated with the request being handled (usually a
   * `FetchEvent`).
   *
   * Note: you can await
   * {@link workbox-strategies.StrategyHandler~doneWaiting}
   * to know when all added promises have settled.
   *
   * @param {Promise} promise A promise to add to the extend lifetime promises
   *     of the event that triggered the request.
   */
  waitUntil(e) {
    return this._extendLifetimePromises.push(e), e;
  }
  /**
   * Returns a promise that resolves once all promises passed to
   * {@link workbox-strategies.StrategyHandler~waitUntil}
   * have settled.
   *
   * Note: any work done after `doneWaiting()` settles should be manually
   * passed to an event's `waitUntil()` method (not this handler's
   * `waitUntil()` method), otherwise the service worker thread my be killed
   * prior to your work completing.
   */
  async doneWaiting() {
    let e;
    for (; e = this._extendLifetimePromises.shift(); )
      await e;
  }
  /**
   * Stops running the strategy and immediately resolves any pending
   * `waitUntil()` promises.
   */
  destroy() {
    this._handlerDeferred.resolve(null);
  }
  /**
   * This method will call cacheWillUpdate on the available plugins (or use
   * status === 200) to determine if the Response is safe and valid to cache.
   *
   * @param {Request} options.request
   * @param {Response} options.response
   * @return {Promise<Response|undefined>}
   *
   * @private
   */
  async _ensureResponseSafeToCache(e) {
    let t = e, s = !1;
    for (const n of this.iterateCallbacks("cacheWillUpdate"))
      if (t = await n({
        request: this.request,
        response: t,
        event: this.event
      }) || void 0, s = !0, !t)
        break;
    return s || (t && t.status !== 200 && (t = void 0), process.env.NODE_ENV !== "production" && t && t.status !== 200 && (t.status === 0 ? c.warn(`The response for '${this.request.url}' is an opaque response. The caching strategy that you're using will not cache opaque responses by default.`) : c.debug(`The response for '${this.request.url}' returned a status code of '${e.status}' and won't be cached as a result.`))), t;
  }
}
class he {
  /**
   * Creates a new instance of the strategy and sets all documented option
   * properties as public instance properties.
   *
   * Note: if a custom strategy class extends the base Strategy class and does
   * not need more than these properties, it does not need to define its own
   * constructor.
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to the cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] The
   * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
   * for any `cache.match()` or `cache.put()` calls made by this strategy.
   */
  constructor(e = {}) {
    this.cacheName = x.getRuntimeName(e.cacheName), this.plugins = e.plugins || [], this.fetchOptions = e.fetchOptions, this.matchOptions = e.matchOptions;
  }
  /**
   * Perform a request strategy and returns a `Promise` that will resolve with
   * a `Response`, invoking all relevant plugin callbacks.
   *
   * When a strategy instance is registered with a Workbox
   * {@link workbox-routing.Route}, this method is automatically
   * called when the route matches.
   *
   * Alternatively, this method can be used in a standalone `FetchEvent`
   * listener by passing it to `event.respondWith()`.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   */
  handle(e) {
    const [t] = this.handleAll(e);
    return t;
  }
  /**
   * Similar to {@link workbox-strategies.Strategy~handle}, but
   * instead of just returning a `Promise` that resolves to a `Response` it
   * it will return an tuple of `[response, done]` promises, where the former
   * (`response`) is equivalent to what `handle()` returns, and the latter is a
   * Promise that will resolve once any promises that were added to
   * `event.waitUntil()` as part of performing the strategy have completed.
   *
   * You can await the `done` promise to ensure any extra work performed by
   * the strategy (usually caching responses) completes successfully.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   * @return {Array<Promise>} A tuple of [response, done]
   *     promises that can be used to determine when the response resolves as
   *     well as when the handler has completed all its work.
   */
  handleAll(e) {
    e instanceof FetchEvent && (e = {
      event: e,
      request: e.request
    });
    const t = e.event, s = typeof e.request == "string" ? new Request(e.request) : e.request, n = "params" in e ? e.params : void 0, o = new le(this, { event: t, request: s, params: n }), a = this._getResponse(o, s, t), i = this._awaitComplete(a, o, s, t);
    return [a, i];
  }
  async _getResponse(e, t, s) {
    await e.runCallbacks("handlerWillStart", { event: s, request: t });
    let n;
    try {
      if (n = await this._handle(t, e), !n || n.type === "error")
        throw new h("no-response", { url: t.url });
    } catch (o) {
      if (o instanceof Error) {
        for (const a of e.iterateCallbacks("handlerDidError"))
          if (n = await a({ error: o, event: s, request: t }), n)
            break;
      }
      if (n)
        process.env.NODE_ENV !== "production" && c.log(`While responding to '${d(t.url)}', an ${o instanceof Error ? o.toString() : ""} error occurred. Using a fallback response provided by a handlerDidError plugin.`);
      else
        throw o;
    }
    for (const o of e.iterateCallbacks("handlerWillRespond"))
      n = await o({ event: s, request: t, response: n });
    return n;
  }
  async _awaitComplete(e, t, s, n) {
    let o, a;
    try {
      o = await e;
    } catch {
    }
    try {
      await t.runCallbacks("handlerDidRespond", {
        event: n,
        request: s,
        response: o
      }), await t.doneWaiting();
    } catch (i) {
      i instanceof Error && (a = i);
    }
    if (await t.runCallbacks("handlerDidComplete", {
      event: n,
      request: s,
      response: o,
      error: a
    }), t.destroy(), a)
      throw a;
  }
}
class b extends he {
  /**
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to the cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] {@link https://developers.google.com/web/tools/workbox/guides/using-plugins|Plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters|init}
   * of all fetch() requests made by this strategy.
   * @param {Object} [options.matchOptions] The
   * {@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions|CacheQueryOptions}
   * for any `cache.match()` or `cache.put()` calls made by this strategy.
   * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
   * get the response from the network if there's a precache miss.
   */
  constructor(e = {}) {
    e.cacheName = x.getPrecacheName(e.cacheName), super(e), this._fallbackToNetwork = e.fallbackToNetwork !== !1, this.plugins.push(b.copyRedirectedCacheableResponsesPlugin);
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(e, t) {
    const s = await t.cacheMatch(e);
    return s || (t.event && t.event.type === "install" ? await this._handleInstall(e, t) : await this._handleFetch(e, t));
  }
  async _handleFetch(e, t) {
    let s;
    const n = t.params || {};
    if (this._fallbackToNetwork) {
      process.env.NODE_ENV !== "production" && c.warn(`The precached response for ${d(e.url)} in ${this.cacheName} was not found. Falling back to the network.`);
      const o = n.integrity, a = e.integrity, i = !a || a === o;
      if (s = await t.fetch(new Request(e, {
        integrity: e.mode !== "no-cors" ? a || o : void 0
      })), o && i && e.mode !== "no-cors") {
        this._useDefaultCacheabilityPluginIfNeeded();
        const l = await t.cachePut(e, s.clone());
        process.env.NODE_ENV !== "production" && l && c.log(`A response for ${d(e.url)} was used to "repair" the precache.`);
      }
    } else
      throw new h("missing-precache-entry", {
        cacheName: this.cacheName,
        url: e.url
      });
    if (process.env.NODE_ENV !== "production") {
      const o = n.cacheKey || await t.getCacheKey(e, "read");
      c.groupCollapsed("Precaching is responding to: " + d(e.url)), c.log(`Serving the precached url: ${d(o instanceof Request ? o.url : o)}`), c.groupCollapsed("View request details here."), c.log(e), c.groupEnd(), c.groupCollapsed("View response details here."), c.log(s), c.groupEnd(), c.groupEnd();
    }
    return s;
  }
  async _handleInstall(e, t) {
    this._useDefaultCacheabilityPluginIfNeeded();
    const s = await t.fetch(e);
    if (!await t.cachePut(e, s.clone()))
      throw new h("bad-precaching-response", {
        url: e.url,
        status: s.status
      });
    return s;
  }
  /**
   * This method is complex, as there a number of things to account for:
   *
   * The `plugins` array can be set at construction, and/or it might be added to
   * to at any time before the strategy is used.
   *
   * At the time the strategy is used (i.e. during an `install` event), there
   * needs to be at least one plugin that implements `cacheWillUpdate` in the
   * array, other than `copyRedirectedCacheableResponsesPlugin`.
   *
   * - If this method is called and there are no suitable `cacheWillUpdate`
   * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
   *
   * - If this method is called and there is exactly one `cacheWillUpdate`, then
   * we don't have to do anything (this might be a previously added
   * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
   *
   * - If this method is called and there is more than one `cacheWillUpdate`,
   * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
   * we need to remove it. (This situation is unlikely, but it could happen if
   * the strategy is used multiple times, the first without a `cacheWillUpdate`,
   * and then later on after manually adding a custom `cacheWillUpdate`.)
   *
   * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
   *
   * @private
   */
  _useDefaultCacheabilityPluginIfNeeded() {
    let e = null, t = 0;
    for (const [s, n] of this.plugins.entries())
      n !== b.copyRedirectedCacheableResponsesPlugin && (n === b.defaultPrecacheCacheabilityPlugin && (e = s), n.cacheWillUpdate && t++);
    t === 0 ? this.plugins.push(b.defaultPrecacheCacheabilityPlugin) : t > 1 && e !== null && this.plugins.splice(e, 1);
  }
}
b.defaultPrecacheCacheabilityPlugin = {
  async cacheWillUpdate({ response: r }) {
    return !r || r.status >= 400 ? null : r;
  }
};
b.copyRedirectedCacheableResponsesPlugin = {
  async cacheWillUpdate({ response: r }) {
    return r.redirected ? await oe(r) : r;
  }
};
class de {
  /**
   * Create a new PrecacheController.
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] The cache to use for precaching.
   * @param {string} [options.plugins] Plugins to use when precaching as well
   * as responding to fetch events for precached assets.
   * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
   * get the response from the network if there's a precache miss.
   */
  constructor({ cacheName: e, plugins: t = [], fallbackToNetwork: s = !0 } = {}) {
    this._urlsToCacheKeys = /* @__PURE__ */ new Map(), this._urlsToCacheModes = /* @__PURE__ */ new Map(), this._cacheKeysToIntegrities = /* @__PURE__ */ new Map(), this._strategy = new b({
      cacheName: x.getPrecacheName(e),
      plugins: [
        ...t,
        new ee({ precacheController: this })
      ],
      fallbackToNetwork: s
    }), this.install = this.install.bind(this), this.activate = this.activate.bind(this);
  }
  /**
   * @type {workbox-precaching.PrecacheStrategy} The strategy created by this controller and
   * used to cache assets and respond to fetch events.
   */
  get strategy() {
    return this._strategy;
  }
  /**
   * Adds items to the precache list, removing any duplicates and
   * stores the files in the
   * {@link workbox-core.cacheNames|"precache cache"} when the service
   * worker installs.
   *
   * This method can be called multiple times.
   *
   * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
   */
  precache(e) {
    this.addToCacheList(e), this._installAndActiveListenersAdded || (self.addEventListener("install", this.install), self.addEventListener("activate", this.activate), this._installAndActiveListenersAdded = !0);
  }
  /**
   * This method will add items to the precache list, removing duplicates
   * and ensuring the information is valid.
   *
   * @param {Array<workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
   *     Array of entries to precache.
   */
  addToCacheList(e) {
    process.env.NODE_ENV !== "production" && p.isArray(e, {
      moduleName: "workbox-precaching",
      className: "PrecacheController",
      funcName: "addToCacheList",
      paramName: "entries"
    });
    const t = [];
    for (const s of e) {
      typeof s == "string" ? t.push(s) : s && s.revision === void 0 && t.push(s.url);
      const { cacheKey: n, url: o } = Z(s), a = typeof s != "string" && s.revision ? "reload" : "default";
      if (this._urlsToCacheKeys.has(o) && this._urlsToCacheKeys.get(o) !== n)
        throw new h("add-to-cache-list-conflicting-entries", {
          firstEntry: this._urlsToCacheKeys.get(o),
          secondEntry: n
        });
      if (typeof s != "string" && s.integrity) {
        if (this._cacheKeysToIntegrities.has(n) && this._cacheKeysToIntegrities.get(n) !== s.integrity)
          throw new h("add-to-cache-list-conflicting-integrities", {
            url: o
          });
        this._cacheKeysToIntegrities.set(n, s.integrity);
      }
      if (this._urlsToCacheKeys.set(o, n), this._urlsToCacheModes.set(o, a), t.length > 0) {
        const i = `Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;
        process.env.NODE_ENV === "production" ? console.warn(i) : c.warn(i);
      }
    }
  }
  /**
   * Precaches new and updated assets. Call this method from the service worker
   * install event.
   *
   * Note: this method calls `event.waitUntil()` for you, so you do not need
   * to call it yourself in your event handlers.
   *
   * @param {ExtendableEvent} event
   * @return {Promise<workbox-precaching.InstallResult>}
   */
  install(e) {
    return T(e, async () => {
      const t = new z();
      this.strategy.plugins.push(t);
      for (const [o, a] of this._urlsToCacheKeys) {
        const i = this._cacheKeysToIntegrities.get(a), l = this._urlsToCacheModes.get(o), w = new Request(o, {
          integrity: i,
          cache: l,
          credentials: "same-origin"
        });
        await Promise.all(this.strategy.handleAll({
          params: { cacheKey: a },
          request: w,
          event: e
        }));
      }
      const { updatedURLs: s, notUpdatedURLs: n } = t;
      return process.env.NODE_ENV !== "production" && se(s, n), { updatedURLs: s, notUpdatedURLs: n };
    });
  }
  /**
   * Deletes assets that are no longer present in the current precache manifest.
   * Call this method from the service worker activate event.
   *
   * Note: this method calls `event.waitUntil()` for you, so you do not need
   * to call it yourself in your event handlers.
   *
   * @param {ExtendableEvent} event
   * @return {Promise<workbox-precaching.CleanupResult>}
   */
  activate(e) {
    return T(e, async () => {
      const t = await self.caches.open(this.strategy.cacheName), s = await t.keys(), n = new Set(this._urlsToCacheKeys.values()), o = [];
      for (const a of s)
        n.has(a.url) || (await t.delete(a), o.push(a.url));
      return process.env.NODE_ENV !== "production" && re(o), { deletedURLs: o };
    });
  }
  /**
   * Returns a mapping of a precached URL to the corresponding cache key, taking
   * into account the revision information for the URL.
   *
   * @return {Map<string, string>} A URL to cache key mapping.
   */
  getURLsToCacheKeys() {
    return this._urlsToCacheKeys;
  }
  /**
   * Returns a list of all the URLs that have been precached by the current
   * service worker.
   *
   * @return {Array<string>} The precached URLs.
   */
  getCachedURLs() {
    return [...this._urlsToCacheKeys.keys()];
  }
  /**
   * Returns the cache key used for storing a given URL. If that URL is
   * unversioned, like `/index.html', then the cache key will be the original
   * URL with a search parameter appended to it.
   *
   * @param {string} url A URL whose cache key you want to look up.
   * @return {string} The versioned URL that corresponds to a cache key
   * for the original URL, or undefined if that URL isn't precached.
   */
  getCacheKeyForURL(e) {
    const t = new URL(e, location.href);
    return this._urlsToCacheKeys.get(t.href);
  }
  /**
   * @param {string} url A cache key whose SRI you want to look up.
   * @return {string} The subresource integrity associated with the cache key,
   * or undefined if it's not set.
   */
  getIntegrityForCacheKey(e) {
    return this._cacheKeysToIntegrities.get(e);
  }
  /**
   * This acts as a drop-in replacement for
   * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
   * with the following differences:
   *
   * - It knows what the name of the precache is, and only checks in that cache.
   * - It allows you to pass in an "original" URL without versioning parameters,
   * and it will automatically look up the correct cache key for the currently
   * active revision of that URL.
   *
   * E.g., `matchPrecache('index.html')` will find the correct precached
   * response for the currently active service worker, even if the actual cache
   * key is `'/index.html?__WB_REVISION__=1234abcd'`.
   *
   * @param {string|Request} request The key (without revisioning parameters)
   * to look up in the precache.
   * @return {Promise<Response|undefined>}
   */
  async matchPrecache(e) {
    const t = e instanceof Request ? e.url : e, s = this.getCacheKeyForURL(t);
    if (s)
      return (await self.caches.open(this.strategy.cacheName)).match(s);
  }
  /**
   * Returns a function that looks up `url` in the precache (taking into
   * account revision information), and returns the corresponding `Response`.
   *
   * @param {string} url The precached URL which will be used to lookup the
   * `Response`.
   * @return {workbox-routing~handlerCallback}
   */
  createHandlerBoundToURL(e) {
    const t = this.getCacheKeyForURL(e);
    if (!t)
      throw new h("non-precached-url", { url: e });
    return (s) => (s.request = new Request(e), s.params = Object.assign({ cacheKey: t }, s.params), this.strategy.handle(s));
  }
}
let k;
const P = () => (k || (k = new de()), k);
try {
  self["workbox:routing:7.0.0"] && _();
} catch {
}
const V = "GET", pe = [
  "DELETE",
  "GET",
  "HEAD",
  "PATCH",
  "POST",
  "PUT"
], C = (r) => r && typeof r == "object" ? (process.env.NODE_ENV !== "production" && p.hasMethod(r, "handle", {
  moduleName: "workbox-routing",
  className: "Route",
  funcName: "constructor",
  paramName: "handler"
}), r) : (process.env.NODE_ENV !== "production" && p.isType(r, "function", {
  moduleName: "workbox-routing",
  className: "Route",
  funcName: "constructor",
  paramName: "handler"
}), { handle: r });
class N {
  /**
   * Constructor for Route class.
   *
   * @param {workbox-routing~matchCallback} match
   * A callback function that determines whether the route matches a given
   * `fetch` event by returning a non-falsy value.
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(e, t, s = V) {
    process.env.NODE_ENV !== "production" && (p.isType(e, "function", {
      moduleName: "workbox-routing",
      className: "Route",
      funcName: "constructor",
      paramName: "match"
    }), s && p.isOneOf(s, pe, { paramName: "method" })), this.handler = C(t), this.match = e, this.method = s;
  }
  /**
   *
   * @param {workbox-routing-handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response
   */
  setCatchHandler(e) {
    this.catchHandler = C(e);
  }
}
class fe extends N {
  /**
   * If the regular expression contains
   * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
   * the captured values will be passed to the
   * {@link workbox-routing~handlerCallback} `params`
   * argument.
   *
   * @param {RegExp} regExp The regular expression to match against URLs.
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(e, t, s) {
    process.env.NODE_ENV !== "production" && p.isInstance(e, RegExp, {
      moduleName: "workbox-routing",
      className: "RegExpRoute",
      funcName: "constructor",
      paramName: "pattern"
    });
    const n = ({ url: o }) => {
      const a = e.exec(o.href);
      if (a) {
        if (o.origin !== location.origin && a.index !== 0) {
          process.env.NODE_ENV !== "production" && c.debug(`The regular expression '${e.toString()}' only partially matched against the cross-origin URL '${o.toString()}'. RegExpRoute's will only handle cross-origin requests if they match the entire URL.`);
          return;
        }
        return a.slice(1);
      }
    };
    super(n, t, s);
  }
}
class ge {
  /**
   * Initializes a new Router.
   */
  constructor() {
    this._routes = /* @__PURE__ */ new Map(), this._defaultHandlerMap = /* @__PURE__ */ new Map();
  }
  /**
   * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
   * method name ('GET', etc.) to an array of all the corresponding `Route`
   * instances that are registered.
   */
  get routes() {
    return this._routes;
  }
  /**
   * Adds a fetch event listener to respond to events when a route matches
   * the event's request.
   */
  addFetchListener() {
    self.addEventListener("fetch", (e) => {
      const { request: t } = e, s = this.handleRequest({ request: t, event: e });
      s && e.respondWith(s);
    });
  }
  /**
   * Adds a message event listener for URLs to cache from the window.
   * This is useful to cache resources loaded on the page prior to when the
   * service worker started controlling it.
   *
   * The format of the message data sent from the window should be as follows.
   * Where the `urlsToCache` array may consist of URL strings or an array of
   * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
   *
   * ```
   * {
   *   type: 'CACHE_URLS',
   *   payload: {
   *     urlsToCache: [
   *       './script1.js',
   *       './script2.js',
   *       ['./script3.js', {mode: 'no-cors'}],
   *     ],
   *   },
   * }
   * ```
   */
  addCacheListener() {
    self.addEventListener("message", (e) => {
      if (e.data && e.data.type === "CACHE_URLS") {
        const { payload: t } = e.data;
        process.env.NODE_ENV !== "production" && c.debug("Caching URLs from the window", t.urlsToCache);
        const s = Promise.all(t.urlsToCache.map((n) => {
          typeof n == "string" && (n = [n]);
          const o = new Request(...n);
          return this.handleRequest({ request: o, event: e });
        }));
        e.waitUntil(s), e.ports && e.ports[0] && s.then(() => e.ports[0].postMessage(!0));
      }
    });
  }
  /**
   * Apply the routing rules to a FetchEvent object to get a Response from an
   * appropriate Route's handler.
   *
   * @param {Object} options
   * @param {Request} options.request The request to handle.
   * @param {ExtendableEvent} options.event The event that triggered the
   *     request.
   * @return {Promise<Response>|undefined} A promise is returned if a
   *     registered route can handle the request. If there is no matching
   *     route and there's no `defaultHandler`, `undefined` is returned.
   */
  handleRequest({ request: e, event: t }) {
    process.env.NODE_ENV !== "production" && p.isInstance(e, Request, {
      moduleName: "workbox-routing",
      className: "Router",
      funcName: "handleRequest",
      paramName: "options.request"
    });
    const s = new URL(e.url, location.href);
    if (!s.protocol.startsWith("http")) {
      process.env.NODE_ENV !== "production" && c.debug("Workbox Router only supports URLs that start with 'http'.");
      return;
    }
    const n = s.origin === location.origin, { params: o, route: a } = this.findMatchingRoute({
      event: t,
      request: e,
      sameOrigin: n,
      url: s
    });
    let i = a && a.handler;
    const l = [];
    process.env.NODE_ENV !== "production" && i && (l.push(["Found a route to handle this request:", a]), o && l.push([
      "Passing the following params to the route's handler:",
      o
    ]));
    const w = e.method;
    if (!i && this._defaultHandlerMap.has(w) && (process.env.NODE_ENV !== "production" && l.push(`Failed to find a matching route. Falling back to the default handler for ${w}.`), i = this._defaultHandlerMap.get(w)), !i) {
      process.env.NODE_ENV !== "production" && c.debug(`No route found for: ${d(s)}`);
      return;
    }
    process.env.NODE_ENV !== "production" && (c.groupCollapsed(`Router is responding to: ${d(s)}`), l.forEach((g) => {
      Array.isArray(g) ? c.log(...g) : c.log(g);
    }), c.groupEnd());
    let y;
    try {
      y = i.handle({ url: s, request: e, event: t, params: o });
    } catch (g) {
      y = Promise.reject(g);
    }
    const f = a && a.catchHandler;
    return y instanceof Promise && (this._catchHandler || f) && (y = y.catch(async (g) => {
      if (f) {
        process.env.NODE_ENV !== "production" && (c.groupCollapsed(`Error thrown when responding to:  ${d(s)}. Falling back to route's Catch Handler.`), c.error("Error thrown by:", a), c.error(g), c.groupEnd());
        try {
          return await f.handle({ url: s, request: e, event: t, params: o });
        } catch (U) {
          U instanceof Error && (g = U);
        }
      }
      if (this._catchHandler)
        return process.env.NODE_ENV !== "production" && (c.groupCollapsed(`Error thrown when responding to:  ${d(s)}. Falling back to global Catch Handler.`), c.error("Error thrown by:", a), c.error(g), c.groupEnd()), this._catchHandler.handle({ url: s, request: e, event: t });
      throw g;
    })), y;
  }
  /**
   * Checks a request and URL (and optionally an event) against the list of
   * registered routes, and if there's a match, returns the corresponding
   * route along with any params generated by the match.
   *
   * @param {Object} options
   * @param {URL} options.url
   * @param {boolean} options.sameOrigin The result of comparing `url.origin`
   *     against the current origin.
   * @param {Request} options.request The request to match.
   * @param {Event} options.event The corresponding event.
   * @return {Object} An object with `route` and `params` properties.
   *     They are populated if a matching route was found or `undefined`
   *     otherwise.
   */
  findMatchingRoute({ url: e, sameOrigin: t, request: s, event: n }) {
    const o = this._routes.get(s.method) || [];
    for (const a of o) {
      let i;
      const l = a.match({ url: e, sameOrigin: t, request: s, event: n });
      if (l)
        return process.env.NODE_ENV !== "production" && l instanceof Promise && c.warn(`While routing ${d(e)}, an async matchCallback function was used. Please convert the following route to use a synchronous matchCallback function:`, a), i = l, (Array.isArray(i) && i.length === 0 || l.constructor === Object && // eslint-disable-line
        Object.keys(l).length === 0 || typeof l == "boolean") && (i = void 0), { route: a, params: i };
    }
    return {};
  }
  /**
   * Define a default `handler` that's called when no routes explicitly
   * match the incoming request.
   *
   * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
   *
   * Without a default handler, unmatched requests will go against the
   * network as if there were no service worker present.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to associate with this
   * default handler. Each method has its own default.
   */
  setDefaultHandler(e, t = V) {
    this._defaultHandlerMap.set(t, C(e));
  }
  /**
   * If a Route throws an error while handling a request, this `handler`
   * will be called and given a chance to provide a response.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   */
  setCatchHandler(e) {
    this._catchHandler = C(e);
  }
  /**
   * Registers a route with the router.
   *
   * @param {workbox-routing.Route} route The route to register.
   */
  registerRoute(e) {
    process.env.NODE_ENV !== "production" && (p.isType(e, "object", {
      moduleName: "workbox-routing",
      className: "Router",
      funcName: "registerRoute",
      paramName: "route"
    }), p.hasMethod(e, "match", {
      moduleName: "workbox-routing",
      className: "Router",
      funcName: "registerRoute",
      paramName: "route"
    }), p.isType(e.handler, "object", {
      moduleName: "workbox-routing",
      className: "Router",
      funcName: "registerRoute",
      paramName: "route"
    }), p.hasMethod(e.handler, "handle", {
      moduleName: "workbox-routing",
      className: "Router",
      funcName: "registerRoute",
      paramName: "route.handler"
    }), p.isType(e.method, "string", {
      moduleName: "workbox-routing",
      className: "Router",
      funcName: "registerRoute",
      paramName: "route.method"
    })), this._routes.has(e.method) || this._routes.set(e.method, []), this._routes.get(e.method).push(e);
  }
  /**
   * Unregisters a route with the router.
   *
   * @param {workbox-routing.Route} route The route to unregister.
   */
  unregisterRoute(e) {
    if (!this._routes.has(e.method))
      throw new h("unregister-route-but-not-found-with-method", {
        method: e.method
      });
    const t = this._routes.get(e.method).indexOf(e);
    if (t > -1)
      this._routes.get(e.method).splice(t, 1);
    else
      throw new h("unregister-route-route-not-registered");
  }
}
let E;
const me = () => (E || (E = new ge(), E.addFetchListener(), E.addCacheListener()), E);
function we(r, e, t) {
  let s;
  if (typeof r == "string") {
    const o = new URL(r, location.href);
    if (process.env.NODE_ENV !== "production") {
      if (!(r.startsWith("/") || r.startsWith("http")))
        throw new h("invalid-string", {
          moduleName: "workbox-routing",
          funcName: "registerRoute",
          paramName: "capture"
        });
      const i = r.startsWith("http") ? o.pathname : r, l = "[*:?+]";
      new RegExp(`${l}`).exec(i) && c.debug(`The '$capture' parameter contains an Express-style wildcard character (${l}). Strings are now always interpreted as exact matches; use a RegExp for partial or wildcard matches.`);
    }
    const a = ({ url: i }) => (process.env.NODE_ENV !== "production" && i.pathname === o.pathname && i.origin !== o.origin && c.debug(`${r} only partially matches the cross-origin URL ${i.toString()}. This route will only handle cross-origin requests if they match the entire URL.`), i.href === o.href);
    s = new N(a, e, t);
  } else if (r instanceof RegExp)
    s = new fe(r, e, t);
  else if (typeof r == "function")
    s = new N(r, e, t);
  else if (r instanceof N)
    s = r;
  else
    throw new h("unsupported-route-type", {
      moduleName: "workbox-routing",
      funcName: "registerRoute",
      paramName: "capture"
    });
  return me().registerRoute(s), s;
}
function ye(r, e = []) {
  for (const t of [...r.searchParams.keys()])
    e.some((s) => s.test(t)) && r.searchParams.delete(t);
  return r;
}
function* be(r, { ignoreURLParametersMatching: e = [/^utm_/, /^fbclid$/], directoryIndex: t = "index.html", cleanURLs: s = !0, urlManipulation: n } = {}) {
  const o = new URL(r, location.href);
  o.hash = "", yield o.href;
  const a = ye(o, e);
  if (yield a.href, t && a.pathname.endsWith("/")) {
    const i = new URL(a.href);
    i.pathname += t, yield i.href;
  }
  if (s) {
    const i = new URL(a.href);
    i.pathname += ".html", yield i.href;
  }
  if (n) {
    const i = n({ url: o });
    for (const l of i)
      yield l.href;
  }
}
class Re extends N {
  /**
   * @param {PrecacheController} precacheController A `PrecacheController`
   * instance used to both match requests and respond to fetch events.
   * @param {Object} [options] Options to control how requests are matched
   * against the list of precached URLs.
   * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
   * check cache entries for a URLs ending with '/' to see if there is a hit when
   * appending the `directoryIndex` value.
   * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
   * array of regex's to remove search params when looking for a cache match.
   * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
   * check the cache for the URL with a `.html` added to the end of the end.
   * @param {workbox-precaching~urlManipulation} [options.urlManipulation]
   * This is a function that should take a URL and return an array of
   * alternative URLs that should be checked for precache matches.
   */
  constructor(e, t) {
    const s = ({ request: n }) => {
      const o = e.getURLsToCacheKeys();
      for (const a of be(n.url, t)) {
        const i = o.get(a);
        if (i) {
          const l = e.getIntegrityForCacheKey(i);
          return { cacheKey: i, integrity: l };
        }
      }
      process.env.NODE_ENV !== "production" && c.debug("Precaching did not find a match for " + d(n.url));
    };
    super(s, e.strategy);
  }
}
function _e(r) {
  const e = P(), t = new Re(e, r);
  we(t);
}
function Ee(r) {
  P().precache(r);
}
function Ne(r, e) {
  Ee(r), _e(e);
}
const ve = [
  ...q,
  ...K,
  ...j
].map((r) => ({
  url: r,
  revision: A
}));
Ne(ve);
