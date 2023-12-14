<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import TitleBar from '$lib/components/TitleBar.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { lockScroll } from '$lib/stores';
</script>

<svelte:head>
	<meta name="homepage" />
	<style>
		html {
			background-color: var(--bg-home);
			color: var(--text-home);
		}
	</style>
</svelte:head>

<div class="grid h-full grid-rows-[10px_1fr]">
	<TitleBar />
	<div class="overflow-auto p-2" class:overflow-y-hidden={$lockScroll}>
		<ul class="relative z-50 mt-8 flex flex-wrap justify-center">
			<li>
				<a
					class=" px-2 hover:underline"
					class:italic={$page.url.href.includes('photography')}
					class:font-bold={$page.url.href.includes('photography')}
					title="PHOTOGRAPHY"
					href="/photography">PHOTOGRAPHY</a
				>
			</li>
			<li>
				<a
					class="px-2 hover:underline"
					class:italic={$page.url.href.includes('projects')}
					class:font-bold={$page.url.href.includes('projects')}
					title="PROJECTS"
					href="/projects">PROJECTS</a
				>
			</li>
			<li>
				<a
					class="px-2 hover:underline"
					class:italic={$page.url.href.includes('blog')}
					class:font-bold={$page.url.href.includes('blog')}
					title="BLOG"
					href="/blog">BLOG</a
				>
			</li>
			<li>
				<a
					class="px-2 hover:underline"
					class:italic={$page.url.href.includes('contact')}
					class:font-bold={$page.url.href.includes('contact')}
					title="CONTACT"
					href="/contact">CONTACT</a
				>
			</li>
		</ul>
		<slot />
	</div>
</div>

<div class="z-30">
	<Nav />
</div>

<style>
	li,
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
