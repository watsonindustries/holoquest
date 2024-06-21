import { generateNickname } from 'hololive-nick-gen';
import { persisted } from 'svelte-persisted-store';
import { writable } from 'svelte/store';

// export const nickname = writable<string>('anonymous');
export const nickname = persisted('nickname', generateNickname());
export const userToken = writable<string | null>(null);
