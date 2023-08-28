<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex items-end px-10 pb-[100px]">
	<div class="flex h-full w-full flex-wrap items-end justify-center space-y-2 font-sans">
		{#each data.photographyCollections as collection}
			<a href="/photography/{collection}" class="mx-2 hover:underline">{collection.toUpperCase()}</a
			>
		{/each}
	</div>
</div>
