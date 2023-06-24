<script lang="ts">
	import { version } from '$app/environment';

	const coverCorpURL = 'https://cover-corp.com';
	const hololiveURL = 'https://hololive.hololivepro.com/en';
	const daniruKunDiscordURL = 'http://discordapp.com/users/511267995214151721';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@300;700&display=swap"
		rel="stylesheet" />
</svelte:head>

<div class="mx-4 my-4 space-y-4 font-geologica text-lg">
	<p class="text-4xl text-primary">HoloQuest companion app</p>

	<p>Build version <span class="font-mono">{version}</span></p>

	<p>
		Created by <a href="https://watsonindustries.live" class="link-primary link"
			>Watson Industries</a> in 🇦🇹
	</p>

	<svg
		class="light:fill-black mx-auto w-5/12 stroke-1 py-4 dark:fill-white"
		viewBox="0 0 900 458"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink">
		<g id="Watson-Industries" stroke="none" fill-rule="evenodd">
			<g id="Modern-Watson-Industries-Logo">
				<g id="Group-2" transform="translate(0, -0)" fill-rule="nonzero">
					<path
						d="M169.669207,437.793008 L169.669207,417.439589 L156.931048,414.071757 C93.5330871,397.671879 39.2128941,349.936521 15.347149,289.901255 C-12.1789866,220.787486 -2.22272478,143.473777 41.555544,84.7563584 C89.2870343,20.7675505 168.497882,-10.5679298 247.415898,3.19625315 C285.044711,9.93191714 325.016174,29.8460542 351.663815,55.3244353 L363.669896,66.8922061 L341.268307,67.0386336 L318.720302,67.0386336 L304.517988,58.2529849 C279.627333,42.8780997 254.151016,34.5317335 225.453556,31.8960388 C174.793753,27.5032145 123.841119,45.3673668 86.6515532,80.656389 C44.7766875,120.484663 24.4249171,178.909227 32.6241915,235.430233 C44.0446094,312.597514 102.903686,373.657773 179.039806,386.982673 C195.438355,389.764795 224.135815,389.764795 240.387948,386.982673 C278.163177,380.393437 313.44934,361.504292 339.657735,333.975926 C351.810231,320.943881 366.744624,299.711896 371.283508,288.729835 L373.918989,282.287026 L391.049616,282.287026 C410.815724,282.287026 409.790814,280.237042 400.127384,300.590461 C373.479742,356.672185 318.866718,401.332566 260.154056,414.950321 L248.733638,417.586016 L248.733638,437.793008 L248.733638,458 L209.201423,458 L169.669207,458 L169.669207,437.793008 Z"
						id="Path"
						transform="translate(203.4176, 229) scale(-1, 1) rotate(-180) translate(-203.4176, -229)" />
					<path
						d="M166.448063,383.10273 L161.030685,380.17418 L185.92134,329.510273 C201.880642,297.003372 210.226332,278.114228 209.347838,277.089235 C208.762176,276.210671 199.245161,259.664366 188.410405,240.335938 C177.429234,221.007511 160.298607,190.404168 150.049514,172.393589 C139.946837,154.383009 131.893978,139.154551 132.333225,138.568841 C133.650965,136.518857 141.996655,133.736734 143.16798,135.054582 C143.900058,135.786719 156.19897,157.165131 170.401285,182.497085 C184.750015,207.829038 202.905551,239.896656 210.811994,253.807266 L225.160725,278.992793 L198.805914,332.58525 C184.310768,362.017173 172.304688,386.031279 172.158272,386.031279 C172.011856,385.884852 169.376375,384.567004 166.448063,383.10273 Z"
						id="Path"
						transform="translate(178.7384, 260.3723) scale(-1, 1) rotate(-180) translate(-178.7384, -260.3723)" />
				</g>
				<text
					id="WATSON"
					font-family="Inter-Regular_Bold-Italic, Inter"
					font-size="130"
					font-style="italic"
					font-weight="bold"
					letter-spacing="4.8">
					<tspan x="266.185712" y="290">WATSON</tspan>
				</text>
				<text
					id="INDUSTRIES"
					font-family="Inter-Regular_Light, Inter"
					font-size="78"
					font-weight="300"
					letter-spacing="12.2">
					<tspan x="283.632005" y="370">INDUSTRIES</tspan>
				</text>
			</g>
		</g>
	</svg>

	<p>
		Reach out to <a href={daniruKunDiscordURL} class="link-secondary link">@danirukun</a> for inquiries.
	</p>

	<h2 class=" text-2xl text-secondary">Help</h2>
	<p>
		Scan the QR code found on the HoloQuest stamps to collect them. Your collected stamps will show
		up on your <b>stamp sheet</b>. Tap a stamp to see where to find it. Once you find all stamps,
		take your stamp sheet to the Fan Booth.
	</p>

	<p>
		You can appear in the online leaderboard and scan events under your own name. To change your
		nickname, tap <b>Profile</b>, set your desired nickname, and press <b>Set Nickname</b>.
	</p>
	<h2 class="text-2xl text-secondary">Tips & Troubleshooting</h2>
	<p />
	<ul class="ml-4 list-disc">
		<li class="list-item">
			Do not clear the browser's cache manually, or use a "privacy browser" like e.g. DuckDuckGo.
		</li>
		<li class="list-item">
			You can install the app as a PWA. Note: doing so on iOS after collecting a few stamps will NOT
			copy them to the PWA.
		</li>
		<li class="list-item">
			If the QR code scanner stops working, close the tab and browser completely and restart it.
		</li>
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
