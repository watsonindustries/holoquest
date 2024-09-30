export const csr = true;

import type { LayoutLoad } from './$types';

import { setToast } from '$lib/stores/toasts';
import { TOAST_TYPE } from '../custom';
import { updateExpectedStamps } from '../stamps';
import { supabase, fetchEvents } from '../supabase-client';
import { eventInfo } from '$lib/stores/event';
import { get } from 'svelte/store';

export const load = (async ({ url }) => {
	let res;

	const eventId = url.searchParams.get('eventId');
	if (eventId) {
		res = await startupTasks(parseInt(eventId));
	} else {
		res = await startupTasks();
	}

	setupPresence();

	return res;
}) satisfies LayoutLoad;

// Startup tasks
async function startupTasks(eventId = 0) {
	console.log('Running startup tasks...');

	try {
		// External link with included event ID
		if (eventId > 0) {
			const {data: event} = await supabase.from('events').select('id, name, metadata').eq('id', eventId).single();
			console.log('Setting event:', event);
			eventInfo.set(event || {});
			return
		}

		// Still no event data locally
		if (Object.keys(get(eventInfo)).length === 0) {
			const events = await fetchEvents();
			return { events };
		}
	} catch (error) {
		console.error('Error fetching event data:', error);
		setToast({ message: 'Error fetching event data', type: TOAST_TYPE.ERROR });
	}

	try {
		await updateExpectedStamps(get(eventInfo).id);
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
