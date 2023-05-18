/**
 * @module storage
 * @description High level API for persistent storage.
 */

export function get(key: string) {
	return localStorage.getItem(key);
}

export function set(key: string, value: string) {
	localStorage.setItem(key, value);
}
