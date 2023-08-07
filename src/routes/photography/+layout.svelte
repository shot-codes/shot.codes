<script lang="ts">
	import Title from '$lib/components/Title.svelte';

	export let data;
</script>

<svelte:head>
	<style>
		html {
			background-color: var(--bg-photography);
		}
	</style>
</svelte:head>

<Title />

<div class="mx-auto my-4 flex w-[300px] justify-center space-x-2">
	{#each data.collections as collection}
		<a href="/photography/{collection}" class="hover:underline">{collection}</a>
	{/each}
</div>

<slot />
