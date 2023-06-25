<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { GachaState, type Holomem } from '../../custom';
	import { holomemGachaPool } from '../../const';

	let gachaState = GachaState.NOT_PLAYED;
	let result: Holomem;
	let resultIndex: number;

	function pickMemberIndex(): number {
		const min = 0;
		const max = holomemGachaPool.length - 1;
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	// Main gacha implementation
	function handlePlayGacha() {
		gachaState = GachaState.PLAYING;
		setTimeout(() => {
			resultIndex = pickMemberIndex();
			result = holomemGachaPool[resultIndex] as Holomem;
			gachaState = GachaState.PLAYED;
		}, 3000);
	}

	onMount(() => {
		// Recover gacha state
		if (localStorage.getItem('gachaPlayed') === 'yes') {
			gachaState = GachaState.PLAYED;
			resultIndex = parseInt(localStorage.getItem('gachaResultIndex') as string);
			result = holomemGachaPool[resultIndex] as Holomem;
		}
	});

	$: if (gachaState === GachaState.PLAYED) {
		// Dump state to localStorage
		localStorage.setItem('gachaPlayed', 'yes');
		localStorage.setItem('gachaResultIndex', resultIndex.toString());
	}
</script>

<h1 class="text-center font-geologica text-4xl font-bold text-primary">Thank you!</h1>
<h2 class="text-center font-geologica text-xl font-semibold text-secondary">
	You have completed the quest!
</h2>

{#if gachaState === GachaState.NOT_PLAYED}
	<button class="btn-secondary btn animate-pulse rounded-full" on:click={handlePlayGacha}
		>Play Gacha</button>
{:else if gachaState === GachaState.PLAYING}
	<span class="loading-xl loading loading-dots" />
{:else if gachaState === GachaState.PLAYED}
	{#if result}
		<div
			class="card image-full -z-10 w-10/12 bg-base-100 text-center shadow-lg"
			in:fade={{ delay: 500 }}>
			<figure><img src={result.photo} alt={result.english_name} /></figure>
			<div class="card-body items-center font-geologica">
				<h2 class="card-title text-xl text-slate-100">You got {result.english_name}!</h2>
				<p class="text-slate-100">{result.group}</p>
				<div class="card-actions justify-end">
					<a
						class="btn-secondary btn rounded-full text-slate-50"
						href="https://holodex.net/channel/{result.id}/clips">Explore Channel</a>
				</div>
			</div>
		</div>
	{/if}
{/if}
