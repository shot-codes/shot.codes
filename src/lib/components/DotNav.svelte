<script lang="ts">
	import { goto } from '$app/navigation';
	import { Page, activePage } from './Nav.svelte';
	import Scene from '$lib/components/Scene.svelte';

	let pointerOffset = 0;

	$: {
		switch ($activePage) {
			case Page.Index:
				pointerOffset = 0;
				break;
			case Page.Photography:
				pointerOffset = 80;
				break;
			case Page.Projects:
				pointerOffset = 110;
				break;
			case Page.Games:
				pointerOffset = 180;
				break;
			case Page.Blog:
				pointerOffset = 250;
		}
	}
</script>

<div
	class="pointer-events-none fixed bottom-0 z-30 h-20 w-20"
	class:right-[223px]={$activePage == Page.Index}
	class:right-[167px]={$activePage == Page.Photography}
	class:right-[111px]={$activePage == Page.Projects}
	class:right-[55px]={$activePage == Page.Games}
	class:right-[-1px]={$activePage == Page.Blog}
>
	<Scene {pointerOffset} />
</div>

<div class="fixed bottom-4 right-[15px] z-40 flex space-x-2">
	<button
		on:click={() => {
			goto('/');
		}}
		class:opacity-0={$activePage == Page.Index}
		disabled={$activePage == Page.Index}
		class="h-12 w-12 rounded-full bg-[var(--bg-home)]"
	/>
	<button
		on:click={() => {
			goto('/photography');
		}}
		class:opacity-0={$activePage == Page.Photography}
		disabled={$activePage == Page.Photography}
		class="h-12 w-12 rounded-full bg-[var(--bg-photography)]"
	/>
	<button
		on:click={() => {
			goto('/projects');
		}}
		class:opacity-0={$activePage == Page.Projects}
		disabled={$activePage == Page.Projects}
		class="h-12 w-12 rounded-full bg-[var(--bg-projects)]"
	/>
	<button
		on:click={() => {
			goto('/games');
		}}
		class:opacity-0={$activePage == Page.Games}
		disabled={$activePage == Page.Games}
		class="h-12 w-12 rounded-full bg-[var(--bg-games)]"
	/>
	<button
		on:click={() => {
			goto('/blog');
		}}
		class:opacity-0={$activePage == Page.Blog}
		disabled={$activePage == Page.Blog}
		class="h-12 w-12 rounded-full bg-[var(--bg-blog)]"
	/>
</div>
