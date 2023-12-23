<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="mb-12 flex flex-col items-center justify-center space-y-2 text-center">
	<div class="font-bold">{data.meta.title}</div>
	<div>{data.meta.description}</div>
	<div class="text-sm">{data.meta.date}</div>
</div>

<div class="prose prose-yellow mx-auto mb-20 max-w-[600px] dark:prose-invert">
	<svelte:component this={data.content} />
</div>
