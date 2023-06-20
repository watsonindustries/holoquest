<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { setNickname } from '../../client';
	import { setToast, nickname } from '../../store';
	import { ToastType } from '../../custom';

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
					type: ToastType.ERROR,
					message: 'Nickname must be between 3 and 20 characters long'
				});
				return;
			}

			$nickname = newNicknameValue;

			if (userToken !== '' && userToken !== null) {
				const res = await setNickname(userToken, newNicknameValue);
				if (res.errors) {
					console.log(res.errors);
					setToast({
						type: ToastType.ERROR,
						message: 'Nickname invalid'
					});
					return;
				}
				setToast({
					type: ToastType.SUCCESS,
					message: 'Nickname updated successfully'
				});
			} else {
				setToast({
					type: ToastType.ERROR,
					message: 'User token not found'
				});
			}
		};
	});
</script>

<h1 class="mx-4 my-4 font-geologica text-4xl font-bold text-primary" in:fade={{ delay: 500 }}>
	Profile
</h1>

<div class="mx-4 my-4 space-y-4" in:fade={{ delay: 500 }}>
	<label class="font-geologica text-xl font-bold text-secondary" for="nickname">Nickname</label>
	<input
		type="text"
		id="nickname"
		name="nickname"
		placeholder="E.g. smol_ame"
		bind:value={$nickname}
		class="input-bordered input-secondary input w-full max-w-xs" />
	<button class="btn-secondary btn rounded-full" on:click={handleSetNickname}>
		Set nickname
	</button>

	<p>Your nickname is used to identify you in the leaderboards and realtime events.</p>
</div>
