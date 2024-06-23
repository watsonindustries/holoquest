import { persisted } from 'svelte-persisted-store';
import { get } from 'svelte/store';
import { tokenHash } from '../../crypto';

export const collectedStamps = persisted('collected-stamps', {});
export const expectedStamps = persisted('expected-stamps', {});

export function getExpectedStampHashes() {
	return Object.keys(get(expectedStamps));
}

export function saveStamp(token: string) {
	const newCollectedStamps = { ...get(collectedStamps) };
	const hash = tokenHash(token);
	newCollectedStamps[hash] = token;
	collectedStamps.set(newCollectedStamps);
}

export function getCollectedCount() {
	return Object.keys(get(collectedStamps)).length;
}
