<script lang="ts">
	import type { PageData } from './$types';
	import ImageSet from 'web-image-gen-svelte';

	export let data: PageData;
</script>

<h1 class="absolute right-0 top-0">{data.collection}</h1>

<div class="mt-[200px] flex flex-col">
	{#each Object.values(data.collectionConfig) as set}
		<figure>
			<ImageSet {set} />
		</figure>
	{/each}
</div>
