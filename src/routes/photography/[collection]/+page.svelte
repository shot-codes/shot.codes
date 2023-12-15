<script lang="ts">
	import { lockScroll } from '$lib/stores';
	import { fade } from 'svelte/transition';
	import type { PageData } from './$types';
	import ImageSet from 'web-image-gen-svelte';
	import { clickOutside } from '$lib/utils/clickOutside';

	export let data: PageData;
	let src: string;
	let showSourceImage = false;
</script>

<div class="mb-20 mt-10 flex flex-wrap justify-center gap-4">
	{#key data.collectionConfig}
		{#each Object.entries(data.collectionConfig) as [_, set], index}
			<button
				tabindex="0"
				class="h-fit w-[350px]"
				disabled
				on:click={() => {
					lockScroll.set(true);
					showSourceImage = true;
					src = data.collectionSources[index];
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
		class="fixed left-0 top-0 flex h-full w-full flex-col items-center justify-center backdrop-blur md:p-6"
	>
		<img
			{src}
			alt="Full resolution source"
			class="shadow-xl"
			use:clickOutside
			on:click_outside={() => {
				src = '';
				showSourceImage = false;
				lockScroll.set(false);
			}}
		/>
		<button class="mt-2 bg-[var(--bg-photography)] p-2 px-4 shadow">close</button>
	</div>
{/if}

<style>
	figure :global(.web-image-gen-img) {
		width: 100%;
	}
</style>
