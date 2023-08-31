<script lang="ts">
	import { page } from '$app/stores';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<svelte:head>
	<title>shot.codes/photography</title>
	<style>
		html {
			background-color: var(--bg-photography);
			color: var(--text-photography);
		}
	</style>
</svelte:head>

<div class="flex items-end px-10 pb-20 pt-10">
	<div class="flex h-full w-full flex-wrap items-end justify-center space-y-2">
		{#each data.photographyCollections as collection}
			<a
				href="/photography/{collection}"
				class="mx-2 hover:underline"
				class:italic={$page.url.href.includes(collection)}
			>
				{collection.toUpperCase()}
			</a>
		{/each}
	</div>
</div>

<slot />
