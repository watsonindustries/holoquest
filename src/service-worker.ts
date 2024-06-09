/// <reference types="@sveltejs/kit" />
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />

const sw = self as unknown as ServiceWorkerGlobalScope;

import { build, files, prerendered, version } from '$service-worker';
import { BackgroundSyncPlugin } from 'workbox-background-sync';
import * as navigationPreload from 'workbox-navigation-preload';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { NetworkOnly } from 'workbox-strategies';

navigationPreload.enable();

const precache_list = [...build, ...files, ...prerendered].map((s) => ({
	url: s,
	revision: version
}));

precacheAndRoute(precache_list);

const bgSyncPlugin = new BackgroundSyncPlugin('takoRequests', {
	maxRetentionTime: 24 * 60 // Retry for max of 24 Hours (specified in minutes)
});

const networkOnly = new NetworkOnly({ plugins: [bgSyncPlugin] });

registerRoute(/\/api\/.*\/*.json/, networkOnly, 'POST');

registerRoute(/\/api\/.*\/*.json/, networkOnly, 'PATCH');

sw.addEventListener('install', (event) => {
	// forces a service worker to activate immediately
	console.log('installing service worker version: ', version);
	sw.skipWaiting();
});

sw.addEventListener('activate', (event) => {
	// when this SW becomes activated, we claim all the opened clients
	// they can be standalone PWA windows or browser tabs
	event.waitUntil(sw.clients.claim());
});
