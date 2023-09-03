<script lang="ts">
	import { Page, activePage } from './Nav.svelte';
	import Typewriter from './Typewriter.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		const worker = new Worker('../utils/myWorker.js');

		worker.onmessage = function (e) {
			console.log('Message received from worker:', e.data);
			worker.postMessage('Hello, world!');
		};
	});
</script>

<div />

<div
	class="fixed z-50 flex w-full justify-center py-2 text-[20pt]"
	class:index={$activePage == Page.Index}
	class:photography={$activePage == Page.Photography}
	class:projects={$activePage == Page.Projects}
	class:blog={$activePage == Page.Blog}
	class:contact={$activePage == Page.Contact}
>
	<span>shot.codes/photography</span>
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
	.blog {
		background-color: var(--bg-blog);
	}
	.contact {
		background-color: var(--bg-contact);
	}
</style>
