<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';

	//import as many icons from a Icon Pack
	import { Home, QrCode, QuestionMarkCircle, UserCircle } from '@steeze-ui/heroicons';
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<label tabindex="0" class="btn-ghost btn-circle btn">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h7"
					/></svg
				>
			</label>
			<ul
				tabindex="0"
				class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
			>
				<li><a href="/"><Icon src={Home} theme="solid" class="color-gray-900 w-4" />Home</a></li>
				<li>
					<a href="/scanner">
						<Icon src={QrCode} theme="solid" class="color-gray-900 w-4" />Scanner
					</a>
				</li>
				<li>
					<a href="/about">
						<Icon src={QuestionMarkCircle} theme="solid" class="color-gray-900 w-4" />About
					</a>
				</li>
			</ul>
		</div>
	</div>
	<div class="navbar-center">
		<a
			class="btn-ghost btn bg-gradient-to-br from-primary to-secondary bg-clip-text font-geologica text-xl normal-case text-transparent"
			href="/">HoloQuest</a
		>
	</div>
	<div class="navbar-end">
		<button class="btn-ghost btn-circle btn">
			<div class="indicator relative">
				<Icon src={UserCircle} theme="solid" class="color-gray-900" size="20" />
				<!-- TODO: Extract into separate component, change the color based on the socket ConnectionState -->
				<span class="absolute -right-1 -top-1 flex h-3 w-3">
					<span
						class="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75"
					/>
					<span class="relative inline-flex h-3 w-3 rounded-full bg-success" />
				</span>
			</div>
		</button>
	</div>
</div>
