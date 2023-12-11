<script lang="ts">
	import { Page, activePage } from './Nav.svelte';
	import { onMount } from 'svelte';

	let syncWorker: Worker | undefined = undefined;
	let text = '';
	let scrollY = 0;

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
				syncWorker?.postMessage('/photography');
				break;
			case Page.Projects:
				syncWorker?.postMessage('/projects');
				break;
			case Page.Blog:
				syncWorker?.postMessage('/blog');
				break;
			case Page.Contact:
				syncWorker?.postMessage('/contact');
				break;
		}
	}
</script>

<svelte:window bind:scrollY />

<div />

<div
	class="fixed z-50 flex w-full justify-center py-1 text-[16pt]"
	class:index={$activePage == Page.Index && scrollY > 0}
	class:photography={$activePage == Page.Photography && scrollY > 0}
	class:projects={$activePage == Page.Projects && scrollY > 0}
	class:blog={$activePage == Page.Blog && scrollY > 0}
	class:contact={$activePage == Page.Contact && scrollY > 0}
>
	<a href="/">shot.codes</a>
	<span>{text}</span>
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
