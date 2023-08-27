<script lang="ts">
	import { page } from '$app/stores';
	import { clickOutside } from '$lib/utils/click_outside';
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	export let collections: Array<string>;
	export let posts: Array<string>;

	enum Page {
		Index = 'index',
		Photography = 'photography',
		Projects = 'projects',
		Games = 'games',
		Blog = 'blog'
	}

	const pageArray: Page[] = Object.values(Page);

	let activeBackgroundColor = '#ffffff';
	let activeTextColor = '#000000';
	let activePage = Page.Index;
	let pageNavOpen = false;
	let photoNavOpen = false;
	let inPhotoCollection = false;
	let activePhotoCollection = '';
	let documentStyle: CSSStyleDeclaration;

	onMount(() => {
		documentStyle = getComputedStyle(document.body);
	});

	$: {
		if (documentStyle) {
			pageNavOpen = false;
			if ($page.url.href.endsWith('/')) {
				activePage = Page.Index;
				activeBackgroundColor = documentStyle.getPropertyValue('--bg-home');
				activeTextColor = documentStyle.getPropertyValue('--text-home');
			}
			if ($page.url.href.includes('photography')) {
				activePage = Page.Photography;
				activeBackgroundColor = documentStyle.getPropertyValue('--bg-photography');
				activeTextColor = documentStyle.getPropertyValue('--text-photography');
			}
			if ($page.url.href.includes('projects')) {
				activePage = Page.Projects;
				activeBackgroundColor = documentStyle.getPropertyValue('--bg-projects');
				activeTextColor = documentStyle.getPropertyValue('--text-projects');
			}
			if ($page.url.href.includes('games')) {
				activePage = Page.Games;
				activeBackgroundColor = documentStyle.getPropertyValue('--bg-games');
				activeTextColor = documentStyle.getPropertyValue('--text-games');
			}
			if ($page.url.href.includes('blog')) {
				activePage = Page.Blog;
				activeBackgroundColor = documentStyle.getPropertyValue('--bg-blog');
				activeTextColor = documentStyle.getPropertyValue('--text-blog');
			}

			inPhotoCollection =
				$page.url.href.includes('photography') && !$page.url.href.endsWith('photography')
					? true
					: false;
			if (inPhotoCollection) {
				const match = $page.url.href.match(/\/photography\/(\w+)/);
				if (match) {
					activePhotoCollection = match[1];
				}
			}
		}
	}
</script>

<nav
	style:background-color={activeBackgroundColor}
	class="flex w-full items-center bg-opacity-0 px-2 font-title text-[40pt] backdrop-blur"
>
	<a href="/" class:pointer-events-none={activePage == Page.Index} class="hover:underline"
		>SHOT.CODES</a
	>
	{#if activePage != Page.Index}
		/
	{/if}
	<div class="relative">
		<button
			on:click={() => (pageNavOpen = true)}
			class:pointer-events-none={pageNavOpen}
			class="hover:underline">{activePage == Page.Index ? '' : activePage.toUpperCase()}</button
		>

		{#if pageNavOpen}
			<div
				transition:slide={{ duration: 400 }}
				use:clickOutside
				on:clickOutside={() => (pageNavOpen = false)}
				style:color={activeTextColor}
				class="absolute top-[64px] z-10 flex flex-col leading-[35pt]"
			>
				{#each pageArray as page}
					{#if !(page == activePage) && !(page == Page.Index)}
						<a href="/{page.toLowerCase()}" class="hover:underline">{page.toUpperCase()}</a>
					{/if}
				{/each}
			</div>
		{/if}
	</div>
	{#if inPhotoCollection}
		<p>/</p>
		<div class="relative">
			<button
				class="hover:underline"
				on:click={() => (photoNavOpen = true)}
				class:pointer-events-none={photoNavOpen}
			>
				{activePhotoCollection.toUpperCase()}
			</button>

			{#if photoNavOpen}
				<div
					transition:slide={{ duration: 400 }}
					use:clickOutside
					on:clickOutside={() => (photoNavOpen = false)}
					style:color={activeTextColor}
					class="absolute top-[64px] z-10 flex flex-col leading-[35pt]"
				>
					{#each collections as collection}
						{#if !(collection == activePhotoCollection)}
							<a
								href="/photography/{collection}"
								on:click={() => (photoNavOpen = false)}
								class="hover:underline">{collection.toUpperCase()}</a
							>
						{/if}
					{/each}
				</div>
			{/if}
		</div>
	{/if}
</nav>
