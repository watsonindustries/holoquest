<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import {
		Ticket,
		QrCode,
		QuestionMarkCircle,
		UserCircle,
		BugAnt,
		Trophy
	} from '@steeze-ui/heroicons';
	import { onMount } from 'svelte';

	let drawerToggle: HTMLInputElement;
	let isDebug = true;

	onMount(() => {
		drawerToggle = document.querySelector('.drawer-toggle') as HTMLInputElement;
		isDebug = localStorage.getItem('debug') === 'true';
	});
</script>

<div class="drawer">
	<input id="drawer-nav" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- Navbar -->
		<div class="navbar relative mb-4 flex w-full justify-center bg-base-300">
			<div class="absolute left-1 flex-none lg:hidden">
				<label for="drawer-nav" class="btn-ghost btn-square btn">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block h-6 w-6 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</label>
			</div>
			<div class="flex">
				<a
					class="btn-ghost btn bg-gradient-to-br from-primary to-secondary bg-clip-text font-geologica text-xl normal-case text-transparent"
					href="/"
				>
					HoloQuest
				</a>
			</div>
			<div class="absolute right-1 flex">
				<a href="/profile" class="btn-ghost btn-circle btn">
					<Icon src={UserCircle} size="20" theme="solid" />
				</a>
			</div>
		</div>

		<!-- Page content here -->
		<slot />
	</div>
	<div class="drawer-side">
		<label for="drawer-nav" class="drawer-overlay" />
		<ul class="menu h-full w-60 bg-base-200 p-4 text-xl">
			<!-- Sidebar content here -->
			<li>
				<a
					href="/"
					on:click={() => {
						drawerToggle.checked = false;
					}}><Icon src={Ticket} theme="solid" class="color-gray-900" size="20" />Stamp Sheet</a
				>
			</li>
			<li>
				<a
					href="/scanner"
					on:click={() => {
						drawerToggle.checked = false;
					}}
				>
					<Icon src={QrCode} theme="solid" class="color-gray-900" size="20" />Scanner
				</a>
			</li>
			<li>
				<a
					href="/profile"
					on:click={() => {
						drawerToggle.checked = false;
					}}
				>
					<Icon src={UserCircle} theme="solid" class="color-gray-900" size="20" />Profile
				</a>
			</li>
			<li>
				<a
					href="/about"
					on:click={() => {
						drawerToggle.checked = false;
					}}
				>
					<Icon src={QuestionMarkCircle} theme="solid" class="color-gray-900" size="20" />About
				</a>
			</li>
			{#if isDebug}
				<li>
					<a
						href="/debug"
						on:click={() => {
							drawerToggle.checked = false;
						}}
					>
						<Icon src={BugAnt} theme="solid" class="color-gray-900" size="20" />Debug
					</a>
				</li>
			{/if}
		</ul>
	</div>
</div>
