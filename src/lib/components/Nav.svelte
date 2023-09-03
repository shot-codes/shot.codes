<script lang="ts" context="module">
	import { writable } from 'svelte/store';

	export enum Page {
		Index = 'index',
		Photography = 'photography',
		Projects = 'projects',
		Blog = 'blog',
		Contact = 'contact'
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
		if (route.includes('/blog')) {
			$activePage = Page.Blog;
			pointerOffset = 270;
		}
		if (route.includes('/contact')) {
			$activePage = Page.Contact;
			pointerOffset = 215;
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
	class:right-[55px]={$activePage == Page.Blog}
	class:right-[-1px]={$activePage == Page.Contact}
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
		aria-label="link to index"
	/>
	<button
		on:click={() => {
			goto('/photography');
		}}
		class:opacity-0={$activePage == Page.Photography}
		disabled={$activePage == Page.Photography}
		class="h-12 w-12 rounded-full bg-[var(--bg-nav-photography)]"
		aria-label="link to photography"
	/>
	<button
		on:click={() => {
			goto('/projects');
		}}
		class:opacity-0={$activePage == Page.Projects}
		disabled={$activePage == Page.Projects}
		class="h-12 w-12 rounded-full bg-[var(--bg-nav-projects)]"
		aria-label="link to projects"
	/>

	<button
		on:click={() => {
			goto('/blog');
		}}
		class:opacity-0={$activePage == Page.Blog}
		disabled={$activePage == Page.Blog}
		class="h-12 w-12 rounded-full bg-[var(--bg-nav-blog)]"
		aria-label="link to blog"
	/>
	<button
		on:click={() => {
			goto('/contact');
		}}
		class:opacity-0={$activePage == Page.Contact}
		disabled={$activePage == Page.Contact}
		class="h-12 w-12 rounded-full bg-[var(--bg-nav-contact)]"
		aria-label="link to contact"
	/>
</div>
