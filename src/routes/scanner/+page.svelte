<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	import QrScanner from 'qr-scanner';

    let videoElem: HTMLVideoElement;
    let qrScanner: QrScanner;
    let token = '';

    function onResult(result: QrScanner.ScanResult) {
        console.log('decoded qr code:', result);
        token = result.data;
    }


    onMount(() => {
        videoElem = document.querySelector('video') as HTMLVideoElement;
        console.log(videoElem);
        qrScanner = new QrScanner(videoElem, onResult, {
            highlightScanRegion: true,
            highlightCodeOutline: true,
	});

    })

	export let data: PageData;
</script>

<h1 class="text-4xl">Scanner</h1>
<p>Detected code: {token}</p>

<button on:click={() => qrScanner.start()} class="p-4 text-xl">Start</button>
<button on:click={() => qrScanner.destroy()} class="p-4 text-xl">Stop</button>

<div id="scanner-preview-area" class="min-h-screen bg-slate-800">
    <video></video>
</div>

