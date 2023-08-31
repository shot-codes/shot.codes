<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import TitleBar from '$lib/components/TitleBar.svelte';
	import Nav from '$lib/components/Nav.svelte';
</script>

<svelte:head>
	<style>
		html {
			background-color: var(--bg-home);
			color: var(--text-home);
		}
	</style>
</svelte:head>

<div class="grid h-full grid-rows-[40px_1fr]">
	<TitleBar />
	<div class="z-20 p-2">
		<ul class=" mt-5 flex flex-wrap justify-center space-x-4">
			<li>
				<a
					class="hover:underline"
					class:italic={$page.url.href.includes('photography')}
					class:font-bold={$page.url.href.includes('photography')}
					href="/photography">PHOTOGRAPHY</a
				>
			</li>
			<li>
				<a
					class="hover:underline"
					class:italic={$page.url.href.includes('projects')}
					class:font-bold={$page.url.href.includes('projects')}
					href="/projects">PROJECTS</a
				>
			</li>
			<li>
				<a
					class="hover:underline"
					class:italic={$page.url.href.includes('games')}
					class:font-bold={$page.url.href.includes('games')}
					href="/games">GAMES</a
				>
			</li>
			<li>
				<a
					class="hover:underline"
					class:italic={$page.url.href.includes('blog')}
					class:font-bold={$page.url.href.includes('blog')}
					href="/blog">BLOG</a
				>
			</li>
		</ul>
		<slot />
	</div>
</div>

<div class="z-30">
	<Nav />
</div>
