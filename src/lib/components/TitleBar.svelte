<script lang="ts">
	import { Page, activePage } from './Nav.svelte';
	import { onMount } from 'svelte';

	let syncWorker: Worker;
	let text = '';

	onMount(async () => {
		const SyncWorker = await import('$lib/utils/title.worker?worker');
		syncWorker = new SyncWorker.default();
		syncWorker.onmessage = (event: MessageEvent) => {
			text = event.data;
		};
	});

	$: {
		switch ($activePage) {
			case Page.Index:
				syncWorker?.postMessage('');
				break;
			case Page.Photography:
				syncWorker?.postMessage('/PHOTOGRAPHY');
				break;
			case Page.Projects:
				syncWorker?.postMessage('/PROJECTS');
				break;
			case Page.Blog:
				syncWorker?.postMessage('/BLOG');
				break;
			case Page.Contact:
				syncWorker?.postMessage('/CONTACT');
				break;
		}
	}
</script>

<div />

<div
	class="fixed z-50 flex w-full justify-center py-1 text-[16pt]"
	class:index={$activePage == Page.Index}
	class:photography={$activePage == Page.Photography}
	class:projects={$activePage == Page.Projects}
	class:blog={$activePage == Page.Blog}
	class:contact={$activePage == Page.Contact}
>
	<a href="/">SHOT.CODES</a>
	<span>{text}</span>
</div>

<style lang="postcss">
	.index {
		/* background-color: var(--bg-blog); */
	}
	.photography {
		@apply bg-white bg-opacity-50 backdrop-blur-lg dark:bg-black dark:bg-opacity-50;
	}
	.projects {
		@apply bg-opacity-50 backdrop-blur-lg dark:bg-opacity-50;
	}
	.blog {
		@apply bg-[(var(--bg-blog))] bg-opacity-50 backdrop-blur-lg dark:bg-opacity-50;
	}
	.contact {
		background-color: var(--bg-contact);
	}
</style>
