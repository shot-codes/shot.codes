<script lang="ts">
	import { Page, activePage } from './Nav.svelte';
	import Typewriter from './Typewriter.svelte';
</script>

<div />

<div
	class="fixed z-50 flex w-full justify-center py-2 font-mono text-[20pt]"
	class:index={$activePage == Page.Index}
	class:photography={$activePage == Page.Photography}
	class:projects={$activePage == Page.Projects}
	class:games={$activePage == Page.Games}
	class:blog={$activePage == Page.Blog}
>
	<span>shot.codes/</span>
	<span><Typewriter /></span>
</div>

<style lang="postcss">
	.index {
		background-color: var(--bg-home);
	}
	.photography {
		@apply bg-black bg-opacity-50 backdrop-blur-lg;
	}
	.projects {
		background-color: var(--bg-projects);
	}
	.games {
		background-color: var(--bg-games);
	}
	.blog {
		background-color: var(--bg-blog);
	}
</style>
