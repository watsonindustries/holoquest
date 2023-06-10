<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Bars2, Home, QrCode, QuestionMarkCircle, UserCircle } from '@steeze-ui/heroicons';
	import ConnectionIndicator from './ConnectionIndicator.svelte';
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<button class="btn-ghost btn-circle btn">
				<Icon src={Bars2} size=24 style="solid"></Icon>
			</button>
			<ul
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
				<ConnectionIndicator />
			</div>
		</button>
	</div>
</div>
