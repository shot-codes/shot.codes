<script lang="ts">
	import '../app.css';
	import TitleBar from '$lib/components/TitleBar.svelte';
	import Nav from '$lib/components/Nav.svelte';
</script>

<svelte:head>
	<style>
		html {
			background-color: var(--bg-home);
			color: var(--text-home);
		}
	</style>
</svelte:head>

<div class="grid h-full grid-rows-[40px_1fr]">
	<TitleBar />
	<div class="z-20 p-2">
		<slot />
	</div>
</div>

<div class="z-30">
	<Nav />
</div>
