<script lang="ts">
	import { page } from '$app/stores';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<svelte:head>
	<title>shot.codes/blog</title>
	<style>
		html {
			background-color: var(--bg-blog);
			color: var(--text-blog);
		}
	</style>
</svelte:head>

<div class="flex items-end px-10 pb-20 pt-24">
	<div class="flex h-full w-full flex-wrap items-end justify-center">
		{#each data.blogPosts as post}
			<a
				href="/blog/{post}"
				class=" mx-2 hover:underline"
				title={post.toUpperCase()}
				class:italic={$page.url.href.includes(post)}
				class:font-bold={$page.url.href.includes(post)}
			>
				{post.toUpperCase()}
			</a>
		{/each}
	</div>
</div>

<slot />

<style>
	a {
		display: inline-block;
		text-align: center;
	}
	a::before {
		display: block;
		content: attr(title);
		font-weight: bold;
		height: 1px;
		color: transparent;
		overflow: hidden;
		visibility: hidden;
	}
</style>
