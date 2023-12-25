<script lang="ts">
	export let data;
</script>

<div
	class="mx-auto mb-20 mt-8 flex max-w-[600px] flex-col items-center justify-center space-y-2 text-center"
>
	<div class="text-sm">TAGS</div>
	<div class="flex gap-4 font-bold">
		{#each data.topics as topic}
			<span>
				{topic.toUpperCase()}
			</span>
		{/each}
	</div>
</div>

<div class="prose prose-neutral mx-auto mb-20 max-w-[600px] font-sans dark:prose-invert">
	<!-- safe to ignore this warning as I am not rendering user generated content. -->
	<!-- eslint-disable-next-line  svelte/no-at-html-tags-->
	{@html data.readme}
</div>
