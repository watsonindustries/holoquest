<script lang="ts">
	import Stamp from "$lib/components/Stamp.svelte";
	import { expectedStamps } from "../const";

</script>

<!-- TODO: for each stamp, check localstorage by hash as key to see if the stamp is saved
If it is, render the stamp as collected -->
<div class="grid grid-cols-2 gap-4 p-4">
  {#each expectedStamps as stamp}
    <Stamp {...stamp} />
  {/each}
</div>
