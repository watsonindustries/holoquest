export const csr = true;

import type { LayoutLoad } from './$types';

import { collectedStamps, expectedStamps } from '$lib/stores/stamps';
import { setToast } from '$lib/stores/toasts';
import { get } from 'svelte/store';
import { TOAST_TYPE } from '../custom';
import { supabase } from '../supabase-client';

export const load = (async () => {
	await startupTasks();
	return {};
}) satisfies LayoutLoad;

// Startup tasks
async function startupTasks() {
	console.log('Running startup tasks...');
	get(collectedStamps);
	try {
		await updateExpectedStamps();
	} catch (error) {
		console.error('Error fetching stamp data:', error);
		setToast({ message: 'Error fetching stamp data', type: TOAST_TYPE.ERROR });
	}
	setToast({ message: 'Updated stamp data', type: TOAST_TYPE.SUCCESS });
}

// Fetched expected stamp data from supabase and creates object in store
// With hash as key and rest of stamp data as value
async function updateExpectedStamps() {
	console.log('Fetching stamp data...');
	const { data } = await supabase
		.from('stamps')
		.select('booth_id, name, description, image_url, external_url, hash, nsfw');

	const stampsData = data?.reduce((acc, stamp) => {
		const { hash, ...rest } = stamp;
		acc[hash] = rest;
		return acc;
	}, {});
	expectedStamps.set(stampsData || {});
}
