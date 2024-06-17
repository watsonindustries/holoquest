import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const { id } = params;

	// const partner = expectedStamps.find((stamp) => stamp.id === Number(id)) as object | undefined;

	// if (!partner) {
	// 	return error(404, 'Not found');
	// }

	// return { partner };

	return error(404, 'Not impleneted yet');
}) satisfies PageLoad;
