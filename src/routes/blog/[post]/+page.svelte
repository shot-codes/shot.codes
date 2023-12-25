<script lang="ts">
	export let data;
</script>

<div
	class="dark: mx-auto mb-20 mt-8 flex max-w-[600px] flex-col items-center justify-center space-y-2 text-center text-neutral-900 dark:text-neutral-100"
>
	<div class="font-bold">{data.meta.title}</div>
	<div>{data.meta.description}</div>
	<div class="text-sm">{data.meta.date}</div>
</div>

<div class="prose prose-neutral mx-auto mb-20 max-w-[600px] font-serif dark:prose-invert">
	<svelte:component this={data.content} />
</div>
