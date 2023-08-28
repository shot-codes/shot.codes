<script lang="ts">
	import { Page, activePage } from './Nav.svelte';
</script>

<div />

<div
	class="fixed z-50 w-full py-2 text-center font-mono text-[20pt]"
	class:index={$activePage == Page.Index}
	class:photography={$activePage == Page.Photography}
	class:projects={$activePage == Page.Projects}
	class:games={$activePage == Page.Games}
	class:blog={$activePage == Page.Blog}
>
	shot.codes
</div>

<style lang="postcss">
	.index {
		background-color: var(--bg-home);
	}
	.photography {
		@apply bg-black bg-opacity-10 backdrop-blur-lg;
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
