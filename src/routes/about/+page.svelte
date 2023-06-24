<script lang="ts">
	import { version } from '$app/environment';

	const coverCorpURL = 'https://cover-corp.com';
	const hololiveURL = 'https://hololive.hololivepro.com/en';
	const daniruKunDiscordURL = 'http://discordapp.com/users/511267995214151721';
</script>

<div class="mx-4 my-4 space-y-4 font-geologica text-lg">
	<p class="text-4xl text-primary">HoloQuest companion app</p>

	<p>Build version <span class="font-mono">{version}</span></p>

	<p>
		Created by <a href="https://watsonindustries.live" class="link-primary link"
			>Watson Industries</a> in 🇦🇹
	</p>

	<p>
		Reach out to <a href={daniruKunDiscordURL} class="link-secondary link">@danirukun</a> for support.
	</p>

	<h2 class=" text-2xl text-secondary">Help</h2>
	<p>
		Scan the QR code found on the HoloQuest stamps to collect them. Your collected stamps will show
		up on your <b>stamp sheet</b>. Tap a stamp to see where to find it. Once you find all stamps,
		take your stamp sheet to the Fan Booth. 
	</p>

	<p>
		You can appear in the online leaderboard and scan events under your own
		name. To change your nickname, tap <b>Profile</b>, set your desired nickname, and press <b>Set Nickname</b>.
	</p>
	<h2 class="text-2xl text-secondary">Tips & Troubleshooting</h2>
	<p>
		<ul class="list-disc ml-4">
			<li class="list-item">Do not clear the browser's cache manually, or use a "privacy browser" like e.g. DuckDuckGo.</li>
			<li class="list-item">You can install the app as a PWA. Note: doing so on iOS after collecting a few stamps will NOT copy them to the PWA.</li>
			<li class="list-item">If the QR code scanner stops working, close the tab and browser completely and restart it.</li>
			<li class="list-item">To more easily find exhibitors, install the DoKomi 2023 app.</li>
		</ul>

	<h2 class="text-2xl text-secondary">Legal</h2>
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
