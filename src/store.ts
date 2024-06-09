import type { Channel, Socket } from 'phoenix';
import { writable } from 'svelte/store';
import type { Toast } from './custom';

export const nickname = writable<string>('anonymous');
export const userToken = writable<string | null>(null);
export const socket = writable<Socket | null>(null);
export const notificationsChannel = writable<Channel | null>(null);
export const toastStore = writable<Toast | null>(null);

/**
 * Sets a toast in the toast store, which will be displayed in the UI
 * Automatically removes the toast after 5 seconds
 * @param toast A toast object
 */
export function setToast(toast: Toast) {
	toastStore.set(toast);
	setTimeout(() => toastStore.set(null), 5000);
}
