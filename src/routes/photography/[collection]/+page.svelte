<script lang="ts">
	import type { PageData } from './$types';
	import ImageSet from 'web-image-gen-svelte';

	export let data: PageData;
</script>

<div class="my-[200px] flex flex-wrap justify-center gap-4">
	{#key data.collectionConfig}
		{#each Object.values(data.collectionConfig) as set}
			<figure class="w-[400px]">
				<ImageSet {set} />
			</figure>
		{/each}
	{/key}
</div>

<style>
	figure :global(.web-image-gen-img) {
		width: 100%;
	}
</style>
