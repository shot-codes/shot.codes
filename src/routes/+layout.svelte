<script lang="ts">
	import type { LayoutData } from './$types';
	import { page } from '$app/stores';
	import '../app.css';
	import { activeBackgroundColor, navBorderColor } from '$lib/stores';
	import Navigation from './Nav.svelte';

	export let data: LayoutData;

	$: {
		switch ($page.route.id) {
			case '/':
				activeBackgroundColor.set('#431407');
				navBorderColor.set('#532417');
				break;
			case '/photography':
				activeBackgroundColor.set('#101010');
				navBorderColor.set('#202020');
				break;
			case '/projects':
				activeBackgroundColor.set('#172554');
				navBorderColor.set('#273564');
				break;
			case '/games':
				activeBackgroundColor.set('#042f2e');
				navBorderColor.set('#143f3e');
				break;
			case '/blog':
				activeBackgroundColor.set('#2e1065');
				navBorderColor.set('#3e2075');
				break;
		}
	}
</script>

<svelte:head>
	<style>
		html {
			background-color: var(--bg-home);
		}
	</style>
</svelte:head>

<div class="grid h-full grid-rows-[1fr_50px]">
	<div class="p-2">
		<slot />
	</div>
	<div class="h-full">
		<Navigation collections={data.photographyCollections} posts={data.blogPosts} />
	</div>
</div>

<style>
	:root {
		--bg-home: #431407;
		--bg-home-border: #532417;
		--bg-photography: #101010;
		--bg-photography-border: #431407;
		--bg-projects: #172554;
		--bg-projects-border: #431407;
		--bg-games: #042f2e;
		--bg-games-border: #431407;
		--bg-blog: #2e1065;
		--bg-blog-border: #431407;
	}
</style>
