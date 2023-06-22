<script lang="ts">
	import LeaderboardRow from '$lib/components/LeaderboardRow.svelte';
	import type { PageData } from './$types';

	import { fade } from 'svelte/transition';

	export let data: PageData;

	const { leaderboard } = data;
</script>

<div
	class="w-screen space-y-4 overflow-x-auto font-geologica text-lg text-secondary z-0"
	in:fade={{ delay: 500 }}>
	<h1 class="mx-4 my-4 text-4xl font-bold text-primary">Leaderboard</h1>
	<table class="table w-full">
		<tbody>
			{#each leaderboard as { nickname, stamps_collected }, i}
				<LeaderboardRow rank={i + 1} entryNickname={nickname} {stamps_collected} />
			{/each}
		</tbody>
	</table>
</div>
