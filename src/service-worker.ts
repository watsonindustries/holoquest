/// <reference types="@sveltejs/kit" />
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />

const sw = self as unknown as ServiceWorkerGlobalScope;

import { build, files, prerendered, version } from '$service-worker';
import { precacheAndRoute } from 'workbox-precaching';

const precache_list = [...build, ...files, ...prerendered].map((s) => ({
	url: s,
	revision: version
}));

precacheAndRoute(precache_list);

sw.addEventListener("install", event => {
	// forces a service worker to activate immediately
	console.log("installing service worker version: ", version);
	sw.skipWaiting();
});

sw.addEventListener("activate", event => {
	// when this SW becomes activated, we claim all the opened clients
	// they can be standalone PWA windows or browser tabs
	event.waitUntil(sw.clients.claim());
});
