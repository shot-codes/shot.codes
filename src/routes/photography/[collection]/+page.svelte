<script lang="ts">
	import type { PageData } from './$types';
	import type { ImageSet as ImageSetType } from 'web-image-gen-svelte';
	import ImageSet from 'web-image-gen-svelte';

	export let data: PageData;
</script>

<div class="mt-[200px] flex flex-col">
	{#each Object.values(data.collectionConfig) as set}
		<figure>
			<ImageSet {set} />
		</figure>
	{/each}
</div>
