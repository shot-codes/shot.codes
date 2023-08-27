<script lang="ts">
	import { goto } from '$app/navigation';
	import { Page, activePage } from './Nav.svelte';
</script>

<div class="fixed bottom-4 right-[15px] z-30 flex space-x-2">
	<button
		on:click={() => {
			goto('/');
		}}
		class:opacity-0={$activePage == Page.Index}
		disabled={$activePage == Page.Index}
		class="h-12 w-12 rounded-full bg-white"
	/>
	<button
		on:click={() => {
			goto('/photography');
		}}
		class:opacity-0={$activePage == Page.Photography}
		disabled={$activePage == Page.Photography}
		class="h-12 w-12 rounded-full bg-black"
	/>
	<button
		on:click={() => {
			goto('/projects');
		}}
		class:opacity-0={$activePage == Page.Projects}
		disabled={$activePage == Page.Projects}
		class="h-12 w-12 rounded-full bg-[#0000ff]"
	/>
	<button
		on:click={() => {
			goto('/games');
		}}
		class:opacity-0={$activePage == Page.Games}
		disabled={$activePage == Page.Games}
		class="h-12 w-12 rounded-full bg-[#ff0000]"
	/>
	<button
		on:click={() => {
			goto('/blog');
		}}
		class:opacity-0={$activePage == Page.Blog}
		disabled={$activePage == Page.Blog}
		class="h-12 w-12 rounded-full bg-[#ffff00]"
	/>
</div>
