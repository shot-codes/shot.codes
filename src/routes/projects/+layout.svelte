<script lang="ts">
	import { page } from '$app/stores';
	export let data;
</script>

<svelte:head>
	<title>shot.codes/projects</title>
	<style>
		html {
			background-color: var(--bg-projects);
			color: var(--text-projects);
		}
	</style>
</svelte:head>

<slot />

<div class="flex items-end px-10 pb-16 pt-16">
	<div class="flex h-full w-full flex-wrap items-end justify-center">
		{#each data.repos as collection}
			<a
				href="/projects/{collection.name}"
				class=" mx-2 hover:underline"
				title={collection.name.toUpperCase()}
				class:italic={$page.url.href.includes(collection.name)}
				class:font-bold={$page.url.href.includes(collection.name)}
			>
				{collection.name.toUpperCase()}
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
