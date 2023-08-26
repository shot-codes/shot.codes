<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex h-full items-center">
	<div class="-mt-[100px] flex w-full items-center justify-center space-x-4 font-sans">
		{#each data.collections as collection}
			<a href="/photography/{collection}" class="hover:underline">{collection.toUpperCase()}</a>
		{/each}
	</div>
</div>
