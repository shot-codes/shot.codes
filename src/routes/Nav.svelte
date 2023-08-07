<script lang="ts">
	import { page } from '$app/stores';
	import { clickOutside } from '$lib/utils/click_outside';
	import { activeBackgroundColor, navBorderColor } from '$lib/stores';

	export let collections: Array<string>;
	export let posts: Array<string>;

	enum Page {
		Index = '→',
		Photography = 'photography',
		Projects = 'projects',
		Games = 'games',
		Blog = 'blog'
	}

	const pageArray: Page[] = Object.values(Page);

	let activePage = Page.Index;
	let pageNavOpen = false;
	let photoNavOpen = false;
	let inPhotoCollection = false;
	let activePhotoCollection = '';

	$: {
		$page;
		pageNavOpen = false;
	}

	$: {
		if ($page.url.href.endsWith('/')) activePage = Page.Index;
		if ($page.url.href.includes('photography')) activePage = Page.Photography;
		if ($page.url.href.includes('projects')) activePage = Page.Projects;
		if ($page.url.href.includes('games')) activePage = Page.Games;
		if ($page.url.href.includes('blog')) activePage = Page.Blog;

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
</script>

<nav
	class="fixed bottom-0 flex h-[50px] w-full items-center border-t-[0.5px] p-2"
	style:background-color={$activeBackgroundColor}
>
	<a href="/" class="hover:underline">shot.codes</a>
	<p>/</p>
	<div class="relative">
		{#if activePage == Page.Index}
			<button class="px-2 hover:underline" on:click={() => (pageNavOpen = true)}>
				{activePage}
			</button>
		{:else}
			<button on:click={() => (pageNavOpen = true)} class="hover:underline">{activePage}</button>
		{/if}
		{#if pageNavOpen}
			<div
				use:clickOutside
				on:clickOutside={() => (pageNavOpen = false)}
				style:background-color={$activeBackgroundColor}
				style:border-color={$navBorderColor}
				class="absolute bottom-0 z-10 -mx-[11px] -my-[9px] flex flex-col-reverse rounded-sm border-[1px] px-[10px] py-2"
			>
				{#if !(activePage == Page.Index)}
					<a href="/{activePage}" on:click={() => (pageNavOpen = false)} class="hover:underline"
						>{activePage}</a
					>
				{:else}
					<a class="px-2 hover:underline" href="/" on:click={() => (pageNavOpen = false)}
						>{activePage}</a
					>
				{/if}
				{#each pageArray as page}
					{#if !(page == activePage) && !(page == Page.Index)}
						<a href="/{page}" class="hover:underline">{page}</a>
					{/if}
				{/each}
			</div>
		{/if}
	</div>
	{#if inPhotoCollection}
		<p>/</p>
		<div class="relative">
			<button class="hover:underline" on:click={() => (photoNavOpen = true)}>
				{activePhotoCollection}
			</button>

			{#if photoNavOpen}
				<div
					use:clickOutside
					on:clickOutside={() => (photoNavOpen = false)}
					style:background-color={$activeBackgroundColor}
					style:border-color={$navBorderColor}
					class="absolute bottom-0 z-10 -mx-[11px] -my-[9px] flex flex-col-reverse rounded-sm border-[1px] px-[10px] py-2"
				>
					<a href="/photography/{activePhotoCollection}" class="hover:underline">
						{activePhotoCollection}
					</a>

					{#each collections as collection}
						{#if !(collection == activePhotoCollection)}
							<a href="/photography/{collection}" class="hover:underline">{collection}</a>
						{/if}
					{/each}
				</div>
			{/if}
		</div>
	{/if}
</nav>
