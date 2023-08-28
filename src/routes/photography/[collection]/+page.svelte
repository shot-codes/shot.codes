<script lang="ts">
	import type { PageData } from './$types';
	import ImageSet from 'web-image-gen-svelte';

	export let data: PageData;
</script>

<div class="mb-20 mt-10 flex flex-wrap justify-center gap-4">
	{#key data.collectionConfig}
		{#each Object.values(data.collectionConfig) as set}
			<figure class="w-[350px]">
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
