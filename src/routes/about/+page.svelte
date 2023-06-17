<script lang="ts">
	import { version } from '$app/environment';

	const coverCorpURL = 'https://cover-corp.com';
	const hololiveURL = 'https://hololive.hololivepro.com/en';
</script>

<div class="mx-4 my-4 space-y-4 text-lg">
	<p class="font-geologica text-2xl text-primary">HoloQuest companion app</p>

	<p>Build version <span class="font-mono">{version}</span></p>

	<p>
		Developed by <a href="https://watsonindustries.live" class="link-primary link"
			>Watson Industries</a
		>.
	</p>

	<p>
		Reach out to <a href="https://twitter.com/DaniruKun" class="link-secondary link">@danirukun</a> for
		support.
	</p>

	<h2 class="font-geologica text-2xl text-secondary">Legal</h2>
	<p>
		This is a fan project for the DoKomi 2023 Hololive fan booth after approval by <a
			href={coverCorpURL}
			class="link-primary link">COVER Corp.</a> within the rules of the fan work guidelines.
	</p>
	<p>
		Not affiliated in any formal way with <a href={coverCorpURL} class="link-primary link"
			>COVER Corp.</a>
		or <a href={hololiveURL} class="link-primary link">holopro.</a>
	</p>
</div>
