<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { GACHA_STATE, type GachaState, type Holomem } from '../../custom';
	import { holomemGachaPool } from '../../const';
	import { nickname } from '../../store';

	let gachaState: GachaState = GACHA_STATE.NOT_PLAYED;
	let result: Holomem;
	let resultIndex: number;
	const gachaPullDuration = 3000; // ms

	function pickMemberIndex(): number {
		const min = 0;
		const max = holomemGachaPool.length - 1;
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	// Main gacha implementation
	function handlePlayGacha() {
		gachaState = GACHA_STATE.PLAYING;
		setTimeout(() => {
			resultIndex = pickMemberIndex();
			result = holomemGachaPool[resultIndex] as Holomem;
			gachaState = GACHA_STATE.PLAYED;
		}, gachaPullDuration);
	}

	onMount(() => {
		// Recover gacha state
		if (localStorage.getItem('gachaPlayed') === 'yes') {
			gachaState = GACHA_STATE.PLAYED;
			resultIndex = parseInt(localStorage.getItem('gachaResultIndex') as string);
			result = holomemGachaPool[resultIndex] as Holomem;
		}
	});

	$: if (gachaState === GACHA_STATE.PLAYED) {
		// Dump state to localStorage
		localStorage.setItem('gachaPlayed', 'yes');
		localStorage.setItem('gachaResultIndex', resultIndex.toString());
	}
</script>

<h1 class="text-center font-geologica text-4xl font-bold text-primary">Thank you!</h1>
<h2 class="text-center font-geologica text-xl font-semibold text-secondary">
	You have completed the quest!
</h2>

{#if gachaState === GACHA_STATE.NOT_PLAYED}
	<button class="btn-secondary btn animate-pulse rounded-full" on:click={handlePlayGacha}
		>Play Gacha</button
	>
{:else if gachaState === GACHA_STATE.PLAYING}
	<span class="loading-xl loading loading-dots" />
	<p class="font-geologica">Warming up the gacha...</p>
{:else if gachaState === GACHA_STATE.PLAYED}
	{#if result}
		<div
			class="card image-full -z-10 w-10/12 bg-base-100 text-center shadow-lg"
			in:fade|global={{ delay: 500 }}
		>
			<figure><img src={result.photo} alt={result.english_name} /></figure>
			<div class="card-body items-center font-geologica">
				<h2 class="card-title text-xl text-slate-100">{$nickname} got {result.english_name}!</h2>
				<p class="text-slate-100">{result.group}</p>
				<div class="card-actions justify-end">
					<a
						class="btn-secondary btn rounded-full text-slate-50"
						href="https://holodex.net/channel/{result.id}/clips">Explore Channel</a
					>
				</div>
			</div>
		</div>
	{/if}
{/if}
