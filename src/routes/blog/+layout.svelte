<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	export let data: PageData;
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

<div class="flex items-end px-10 pb-16 pt-16">
	<div class="flex h-full w-full flex-wrap items-end justify-center gap-2">
		{#each data.posts as post}
			<a
				href="/blog/{post.slug}"
				class=" mx-2 hover:underline"
				title={post.title.toUpperCase()}
				class:italic={$page.url.href.includes(post.slug)}
				class:font-bold={$page.url.href.includes(post.slug)}
			>
				{post.title.toUpperCase()}
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
