<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Home, QrCode, QuestionMarkCircle, Cog } from '@steeze-ui/heroicons';
	import ConnectionIndicator from './ConnectionIndicator.svelte';
</script>

<div class="drawer">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- Navbar -->
		<div class="navbar mb-4 flex w-full justify-between bg-base-300">
			<div class="flex-none lg:hidden">
				<label for="my-drawer-3" class="btn-ghost btn-square btn">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block h-6 w-6 stroke-current">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</label>
			</div>
			<div class="flex">
				<a
					class="btn-ghost btn bg-gradient-to-br from-primary to-secondary bg-clip-text font-geologica text-xl normal-case text-transparent"
					href="/">
					HoloQuest
				</a>
			</div>
			<div class="flex">
				<ConnectionIndicator />
			</div>
		</div>

		<!-- Page content here -->
		<slot />
	</div>
	<div class="drawer-side">
		<label for="my-drawer-3" class="drawer-overlay" />
		<ul class="menu h-full w-60 bg-base-200 p-4">
			<!-- Sidebar content here -->
			<li><a href="/"><Icon src={Home} theme="solid" class="color-gray-900" size=20 />Home</a></li>
			<li>
				<a href="/scanner">
					<Icon src={QrCode} theme="solid" class="color-gray-900" size=20 />Scanner
				</a>
			</li>
			<li>
				<a href="/settings">
					<Icon src={Cog} theme="solid" class="color-gray-900" size=20 />Settings
				</a>
			</li>
			<li>
				<a href="/about">
					<Icon src={QuestionMarkCircle} theme="solid" class="color-gray-900" size=20 />About
				</a>
			</li>
		</ul>
	</div>
</div>
