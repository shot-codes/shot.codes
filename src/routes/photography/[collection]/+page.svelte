<script lang="ts">
	import { fade } from 'svelte/transition';
	import ImageSet from 'web-image-gen-svelte';
	import type { ImageSet as ImgSet } from 'web-image-gen-svelte';

	export let data;
	let src: string;
	let showSourceImage = false;
	let activeImage: ImgSet;
</script>

<div class="mb-20 mt-10 flex flex-wrap justify-center gap-4">
	{#key data.collectionConfig}
		{#each Object.entries(data.collectionConfig) as [_, set], index}
			<button
				tabindex="0"
				class="h-fit w-[350px]"
				on:click={() => {
					showSourceImage = true;
					src = data.collectionSources[index];
					activeImage = set;
				}}
			>
				<figure>
					<ImageSet {set} pictureClass="object-contain" imgClass="h-full w-full" />
				</figure>
			</button>
		{/each}
	{/key}
</div>

{#if showSourceImage}
	<div
		transition:fade
		class="fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center backdrop-blur md:p-6"
	>
		<ImageSet set={activeImage} imgClass="max-h-[80vh] shadow-lg" />
		<div class="flex h-12 gap-2 p-2">
			<button
				class="flex h-full items-center bg-[var(--bg-photography)] px-4 shadow-lg"
				on:click={() => {
					showSourceImage = false;
				}}
			>
				close
			</button>
			<a href={src} class="flex h-full items-center bg-[var(--bg-photography)] px-4 shadow-lg"
				>Full Resolution</a
			>
		</div>
	</div>
{/if}
