<script lang="ts">
	import Stamp from "$lib/components/Stamp.svelte";

  let stamps = [
    { id: 1, subtitle: 'Stamp 1' },
    { id: 2, subtitle: 'Stamp 2' },
    { id: 3, subtitle: 'Stamp 3' },
    { id: 4, subtitle: 'Stamp 4' },
    { id: 5, subtitle: 'Stamp 5' },
  ];
	
</script>

<div class="grid grid-cols-2 gap-4 p-4">
  {#each stamps as stamp}
    <Stamp {...stamp} />
  {/each}
</div>
