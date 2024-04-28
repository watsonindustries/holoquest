<script lang="ts">
	import LeaderboardRow from '$lib/components/LeaderboardRow.svelte';
	import type { PageData } from './$types';

	import { fade } from 'svelte/transition';

	export let data: PageData;

	function lastUpdatedFormatted() {
		const date = new Date();
		let hours: number | string = date.getHours();
		let minutes: number | string = date.getMinutes();

		// Pad single digit hours and minutes with a leading zero
		if (hours < 10) {
			hours = `0${hours}`;
		}

		// Pad single digit minutes with a leading zero
		if (minutes < 10) {
			minutes = `0${minutes}`;
		}

		return 'Last updated ' + hours + ':' + minutes;
	}

	const { leaderboard } = data;
</script>

<div
	class="z-0 w-screen space-y-4 overflow-x-auto font-geologica text-lg text-secondary"
	in:fade|global={{ delay: 500 }}>
	<h1 class="mx-4 my-4 text-4xl font-bold text-primary">Leaderboard</h1>
	<h2 class="mx-4 text-lg font-bold">{lastUpdatedFormatted()}</h2>
	<table class="table w-full">
		<tbody>
			{#each leaderboard as { nickname, stamps_collected }, i}
				<LeaderboardRow rank={i + 1} entryNickname={nickname} {stamps_collected} />
			{/each}
		</tbody>
	</table>
</div>
