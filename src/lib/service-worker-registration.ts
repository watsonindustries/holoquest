import { browser } from '$app/environment';

export interface ServiceWorkerUpdate {
	available: boolean;
	registration?: ServiceWorkerRegistration;
}

let updateAvailableCallback: ((update: ServiceWorkerUpdate) => void) | null = null;

export function onUpdateAvailable(callback: (update: ServiceWorkerUpdate) => void) {
	updateAvailableCallback = callback;
}

export async function registerServiceWorker() {
	if (!browser || !('serviceWorker' in navigator)) {
		return;
	}

	try {
		const registration = await navigator.serviceWorker.register('/service-worker.js');
		
		// Check for updates immediately
		registration.update();

		// Listen for waiting service worker (update available)
		registration.addEventListener('updatefound', () => {
			const newWorker = registration.installing;
			if (!newWorker) return;

			newWorker.addEventListener('statechange', () => {
				if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
					// New version available
					if (updateAvailableCallback) {
						updateAvailableCallback({
							available: true,
							registration
						});
					}
				}
			});
		});

		// Handle controller change (new SW activated)
		navigator.serviceWorker.addEventListener('controllerchange', () => {
			// Reload to use the new service worker
			window.location.reload();
		});

		// Check if there's already a waiting service worker
		if (registration.waiting) {
			if (updateAvailableCallback) {
				updateAvailableCallback({
					available: true,
					registration
				});
			}
		}

		return registration;
	} catch (error) {
		console.error('Service worker registration failed:', error);
	}
}

export function activateUpdate(registration: ServiceWorkerRegistration) {
	if (registration.waiting) {
		// Tell the waiting service worker to become active
		registration.waiting.postMessage({ type: 'SKIP_WAITING' });
	}
}

export function checkForUpdates() {
	if (!browser || !('serviceWorker' in navigator)) {
		return;
	}

	navigator.serviceWorker.getRegistration().then((registration) => {
		if (registration) {
			registration.update();
		}
	});
} 