<script lang="ts">
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';

	let navExpanded = false;
	const pages = ['photography', 'projects', 'games', 'blog'];

	$: {
		$page;
		navExpanded = false;
	}
</script>

<nav
	class="fixed bottom-0 flex h-[50px] w-full items-center space-x-0 overflow-scroll border-t-[0.5px] px-2"
>
	<button on:click={() => (navExpanded = !navExpanded)} class="shirnk-0 flex space-x-0">
		<span>shot.codes/</span>
		{#if !$page.url.href.endsWith('/')}
			{#if $page.url.href.includes('photography') && !$page.url.href.endsWith('photography')}
				<!-- And not endsWith photography? -->
				<span class="pr-2 hover:underline"
					>photography/<span class="font-bold">{$page.url.href.split('/').pop()}</span></span
				>
			{:else}
				<span class="pr-2 font-bold hover:underline">{$page.url.href.split('/').pop()}</span>
			{/if}
		{/if}
	</button>

	{#if navExpanded}
		<div in:slide={{ axis: 'x' }} class="flex space-x-2">
			{#if $page.url.href.endsWith('/')}
				<a href="/" on:click={() => (navExpanded = !navExpanded)} class="font-bold hover:underline"
					>home</a
				>
			{:else}
				<a class="hover:underline" href="/">home</a>
			{/if}
			{#each pages as p}
				{#if !$page.url.href.endsWith(p)}
					<a class="hover:underline" href="\{p}">{p}</a>
				{/if}
			{/each}
		</div>
	{/if}
</nav>

<!--
<nav
	class="fixed bottom-0 h-[50px] w-full items-center space-x-2 border-t-[0.5px] px-2 hidden sm:flex"
>
	<a href="/" class:underline={$page.url.href.endsWith('/')}>shot.codes</a>
	<a href="photography" class:underline={$page.url.href.includes('photography')}>photography</a>
	<a href="projects" class:underline={$page.url.href.includes('projects')}>projects</a>
	<a href="games" class:underline={$page.url.href.includes('games')}>games</a>
	<a href="blog" class:underline={$page.url.href.includes('blog')}>blog</a>
</nav>
-->
