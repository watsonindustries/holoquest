import { expectedStamps } from '$lib/stores/stamps';
import { fetchStamps } from './supabase-client';

/**
 * Updates the expected stamps in the store by fetching stamp data from Supabase.
 * The fetched stamp data is transformed into an object with the hash as the key and the rest of the stamp data as the value.
 * The updated stamps data is then set in the expectedStamps store.
 */

export async function updateExpectedStamps(): Promise<void> {
	console.log('Fetching stamp data...');
	const stamps = await fetchStamps();

	const stampsData = stamps?.reduce((acc, stamp) => {
		const { hash, ...rest } = stamp;
		acc[hash] = rest;
		return acc;
	}, {});
	expectedStamps.set(stampsData || {});
}
