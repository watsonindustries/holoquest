export const csr = true;

import type { LayoutLoad } from './$types';

import { collectedStamps } from '$lib/stores/stamps';
import { setToast } from '$lib/stores/toasts';
import { get } from 'svelte/store';
import { TOAST_TYPE } from '../custom';
import { updateExpectedStamps } from '../stamps';
import { supabase } from '../supabase-client';

export const load = (async () => {
	setupPresence();
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

function setupPresence() {
	const globalRoom = supabase.channel('room:global');

	globalRoom
		.on('presence', { event: 'sync' }, () => {
			const newState = globalRoom.presenceState();
			console.log('sync', newState);
		})
		.on('presence', { event: 'join' }, ({ key, newPresences }) => {
			console.log('join', key, newPresences);
		})
		.on('presence', { event: 'leave' }, ({ key, leftPresences }) => {
			console.log('leave', key, leftPresences);
		})
		.subscribe();
}
