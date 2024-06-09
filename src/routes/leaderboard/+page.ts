import { fetchLeaderboard } from '../../legacy-client';
import type { PageLoad } from './$types';

export const load = (async () => {
	try {
		const leaderboard = await fetchLeaderboard();

		const filteredLeaderboard = leaderboard.data
			.filter((user) => user.nickname !== null)
			.sort((a, b) => b.stamps_collected - a.stamps_collected);

		return { leaderboard: filteredLeaderboard };
	} catch (error) {
		console.error(error);
		return { leaderboard: [] };
	}
}) satisfies PageLoad;
