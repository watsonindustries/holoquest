<script lang="ts">
	import { nickname } from '../../store';
	export let rank: number;
	export let entryNickname: string;
	export let stamps_collected: number;

	const ribbonIcon = `
	<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="m387-412 35-114-92-74h114l36-112 36 112h114l-93 74 35 114-92-71-93 71ZM240-40v-309q-38-42-59-96t-21-115q0-134 93-227t227-93q134 0 227 93t93 227q0 61-21 115t-59 96v309l-240-80-240 80Zm240-280q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Z"/></svg>
	`;
</script>

<tr class:font-bold={entryNickname === $nickname}>
	<th class="font-mono font-normal">
		<span class="flex gap-2 align-middle">
			# {rank}
			{#if rank < 4}
				<span
					class="flex items-center"
					class:fill-yellow-400={rank === 1}
					class:fill-slate-400={rank === 2}
					class:fill-amber-500={rank === 3}>
					{@html ribbonIcon}
				</span>
			{/if}
		</span>
	</th>
	<td>{entryNickname}</td>
	<td>{stamps_collected}</td>
</tr>
