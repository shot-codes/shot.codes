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

<div class="flex items-end px-10 pb-16 pt-16">
	<div class="flex h-full w-full flex-wrap items-end justify-center">
		{#each data.photographyCollections as collection}
			<a
				href="/photography/{collection}"
				class=" mx-2 hover:underline"
				title={collection.toUpperCase()}
				class:italic={$page.url.href.includes(collection)}
				class:font-bold={$page.url.href.includes(collection)}
			>
				{collection.toUpperCase()}
			</a>
		{/each}
	</div>
</div>

<slot />

<style>
	a {
		display: inline-block;
		text-align: center;
	}
	a::before {
		display: block;
		content: attr(title);
		font-weight: bold;
		height: 1px;
		color: transparent;
		overflow: hidden;
		visibility: hidden;
	}
</style>
