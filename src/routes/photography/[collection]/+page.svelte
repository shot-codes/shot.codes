<script lang="ts">
	import { activePage } from '$lib/components/Nav.svelte';
	import type { PageData } from './$types';
	import ImageSet from 'web-image-gen-svelte';

	export let data: PageData;
	let page;
	$: {
		page = $activePage;
		console.log(page);
	}
</script>

<div class="my-[200px] flex flex-wrap justify-center gap-4">
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
