<script lang="ts" context="module">
	import { writable } from 'svelte/store';

	export enum Page {
		Index = 'index',
		Photography = 'photography',
		Projects = 'projects',
		Games = 'games',
		Blog = 'blog'
	}

	export const activePage = writable(Page.Index);
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Scene from '$lib/components/Scene.svelte';

	let pointerOffset = 0;

	const update = (route: string | null) => {
		if (route == null) return;

		if (route == '/') {
			$activePage = Page.Index;
			pointerOffset = 50;
		}
		if (route.includes('/photography')) {
			$activePage = Page.Photography;
			pointerOffset = 105;
		}
		if (route.includes('/projects')) {
			$activePage = Page.Projects;
			pointerOffset = 160;
		}
		if (route.includes('/games')) {
			$activePage = Page.Games;
			pointerOffset = 215;
		}
		if (route.includes('/blog')) {
			$activePage = Page.Blog;
			pointerOffset = 270;
		}
	};

	$: {
		update($page.route.id);
	}

	onMount(() => {
		update($page.route.id);
	});
</script>

<div
	class="pointer-events-none fixed bottom-0 z-30 h-20 w-20"
	class:right-[223px]={$activePage == Page.Index}
	class:right-[167px]={$activePage == Page.Photography}
	class:right-[111px]={$activePage == Page.Projects}
	class:right-[55px]={$activePage == Page.Games}
	class:right-[-1px]={$activePage == Page.Blog}
>
	<Scene {pointerOffset} />
</div>

<div class="fixed bottom-4 right-[15px] z-40 flex space-x-2">
	<button
		on:click={() => {
			goto('/');
		}}
		class:opacity-0={$activePage == Page.Index}
		disabled={$activePage == Page.Index}
		class="h-12 w-12 rounded-full bg-[var(--bg-nav-home)]"
	/>
	<button
		on:click={() => {
			goto('/photography');
		}}
		class:opacity-0={$activePage == Page.Photography}
		disabled={$activePage == Page.Photography}
		class="h-12 w-12 rounded-full bg-[var(--bg-nav-photography)]"
	/>
	<button
		on:click={() => {
			goto('/projects');
		}}
		class:opacity-0={$activePage == Page.Projects}
		disabled={$activePage == Page.Projects}
		class="h-12 w-12 rounded-full bg-[var(--bg-nav-projects)]"
	/>
	<button
		on:click={() => {
			goto('/games');
		}}
		class:opacity-0={$activePage == Page.Games}
		disabled={$activePage == Page.Games}
		class="h-12 w-12 rounded-full bg-[var(--bg-nav-games)]"
	/>
	<button
		on:click={() => {
			goto('/blog');
		}}
		class:opacity-0={$activePage == Page.Blog}
		disabled={$activePage == Page.Blog}
		class="h-12 w-12 rounded-full bg-[var(--bg-nav-blog)]"
	/>
</div>
