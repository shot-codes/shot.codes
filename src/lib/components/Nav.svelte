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
	import { onMount, type ComponentType } from 'svelte';

	let pointerOffset = 0;
	let eyeball: ComponentType;

	const update = (route: string | null) => {
		if (route == null) return;

		if (route == '/') {
			$activePage = Page.Index;
			pointerOffset = 100;
		}
		if (route.includes('/photography')) {
			$activePage = Page.Photography;
			pointerOffset = 125;
		}
		if (route.includes('/projects')) {
			$activePage = Page.Projects;
			pointerOffset = 150;
		}
		if (route.includes('/blog')) {
			$activePage = Page.Blog;
			pointerOffset = 200;
		}
		if (route.includes('/contact')) {
			$activePage = Page.Contact;
			pointerOffset = 225;
		}
	};

	$: {
		update($page.route.id);
	}

	onMount(async () => {
		update($page.route.id);
		eyeball = (await import('$lib/components/three/NavScene.svelte')).default;
	});
</script>

<div class="pointer-events-none fixed bottom-4 right-[15px] z-40 flex space-x-2">
	<div class="h-10 w-10">
		<svelte:component this={eyeball} {pointerOffset} />
	</div>
	{#if $activePage == Page.Index}
		<div class="h-10 w-10" />
	{/if}
	{#if $activePage == Page.Index || $activePage == Page.Photography}
		<div class="h-10 w-10" />
	{/if}
	{#if $activePage == Page.Index || $activePage == Page.Photography || $activePage == Page.Projects}
		<div class="h-10 w-10" />
	{/if}
	{#if $activePage == Page.Index || $activePage == Page.Photography || $activePage == Page.Projects || $activePage == Page.Blog}
		<div class="h-10 w-10" />
	{/if}
</div>

<div class="fixed bottom-4 right-[15px] z-40 flex space-x-2">
	<button
		on:click={() => {
			goto('/');
		}}
		class:opacity-0={$activePage == Page.Index}
		disabled={$activePage == Page.Index}
		class="h-10 w-10 rounded-full bg-[var(--bg-nav-home)]"
		aria-label="link to index"
	/>
	<button
		on:click={() => {
			goto('/photography');
		}}
		class:opacity-0={$activePage == Page.Photography}
		disabled={$activePage == Page.Photography}
		class="h-10 w-10 rounded-full bg-[var(--bg-nav-photography)]"
		aria-label="link to photography"
	/>
	<button
		on:click={() => {
			goto('/projects');
		}}
		class:opacity-0={$activePage == Page.Projects}
		disabled={$activePage == Page.Projects}
		class="h-10 w-10 rounded-full bg-[var(--bg-nav-projects)]"
		aria-label="link to projects"
	/>

	<button
		on:click={() => {
			goto('/blog');
		}}
		class:opacity-0={$activePage == Page.Blog}
		disabled={$activePage == Page.Blog}
		class="h-10 w-10 rounded-full bg-[var(--bg-nav-blog)]"
		aria-label="link to blog"
	/>
	<button
		on:click={() => {
			goto('/contact');
		}}
		class:opacity-0={$activePage == Page.Contact}
		disabled={$activePage == Page.Contact}
		class="h-10 w-10 rounded-full bg-[var(--bg-nav-contact)]"
		aria-label="link to contact"
	/>
</div>
