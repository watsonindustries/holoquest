import { writable } from 'svelte/store';
import type { Socket, Channel } from 'phoenix';

export const nickname = writable<string>('anonymous');
export const userToken = writable<string | null>(null);
export const socket = writable<Socket | null>(null);
export const scansChannel = writable<Channel | null>(null);
