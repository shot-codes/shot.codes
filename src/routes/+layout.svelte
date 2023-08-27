<script lang="ts">
	import type { LayoutData } from './$types';
	import '../app.css';
	import Navigation from '$lib/components/Nav.svelte';
	import DotNav from '$lib/components/DotNav.svelte';
	import Scene from '$lib/components/Scene.svelte';

	export let data: LayoutData;
</script>

<svelte:head>
	<style>
		html {
			background-color: var(--bg-home);
			color: var(--text-home);
		}
	</style>
</svelte:head>

<div class="grid h-full grid-rows-[100px_1fr]">
	<div class="z-40 h-full">
		<Navigation collections={data.photographyCollections} posts={data.blogPosts} />
	</div>
	<div class="z-20 p-2">
		<slot />
	</div>
</div>

<div class="pointer-events-none absolute left-0 top-0 z-10 h-full w-full">
	<Scene />
</div>

<div class="z-30">
	<DotNav />
</div>
