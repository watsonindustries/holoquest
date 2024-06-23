<script lang="ts">
	import { onMount } from 'svelte';
	import { setToast } from '$lib/stores/toasts';
	import { nickname } from '$lib/stores/userinfo';
	import { TOAST_TYPE } from '../../custom';

	let userToken = '';

	let handleSetNickname = async () => {};

	function isNicknameValid(nickname: string) {
		return nickname.length > 2 && nickname.length <= 20;
	}

	onMount(async () => {
		userToken = localStorage.getItem('userToken') || '';
		handleSetNickname = async () => {
			const newNickname = document.getElementById('nickname') as HTMLInputElement;
			let newNicknameValue = newNickname.value;

			if (!isNicknameValid(newNicknameValue)) {
				setToast({
					type: TOAST_TYPE.ERROR,
					message: 'Nickname must be between 3 and 20 characters long'
				});
				return;
			}

			nickname.set(newNicknameValue);

			if (userToken !== '' && userToken !== null) {
				setToast({
					type: TOAST_TYPE.SUCCESS,
					message: 'Nickname updated successfully'
				});
			} else {
				setToast({
					type: TOAST_TYPE.ERROR,
					message: 'User token not found'
				});
			}
		};
	});
</script>

<h1
	class="mx-4 my-4 font-geologica text-4xl font-bold text-primary"
>
	Profile
</h1>

<div class="mx-4 my-4 space-y-4">
	<label class="font-geologica text-xl font-bold text-secondary" for="nickname">Nickname</label>
	<input
		type="text"
		id="nickname"
		name="nickname"
		placeholder="E.g. smol_ame"
		bind:value={$nickname}
		class="input-bordered input-secondary input w-full max-w-xs"
	/>
	<!-- <button class="btn-secondary btn rounded-full" on:click={handleSetNickname}>
		Set nickname
	</button> -->

	<!-- <p>Your nickname is used to identify you in the leaderboards and realtime events.</p> -->
</div>
