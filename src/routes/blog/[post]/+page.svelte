<script lang="ts">
	export let data;
</script>

<div
	class="mx-auto mb-20 mt-8 flex max-w-[600px] flex-col items-center justify-center space-y-2 text-center text-neutral-900 dark:text-neutral-100"
>
	<div class="font-bold">{data.meta.title}</div>
	<div>{data.meta.description}</div>
	<div class="text-sm">{data.meta.date}</div>
</div>

<div class="prose prose-neutral mx-auto mb-20 max-w-[600px] font-serif dark:prose-invert">
	<svelte:component this={data.content} />
</div>

<style>
	:root {
		--shiki-color-text: #101010;
		--shiki-color-background: #ffffff;
		--shiki-token-constant: #9d24a9;
		--shiki-token-string: #770000;
		--shiki-token-comment: #707070;
		--shiki-token-keyword: #101010;
		--shiki-token-parameter: #101010;
		--shiki-token-function: #0000bb;
		--shiki-token-string-expression: #008b00;
		--shiki-token-punctuation: #303030;
		--shiki-token-link: #101010;
	}
	@media (prefers-color-scheme: dark) {
		:root {
			--shiki-color-text: #eeeeee;
			--shiki-color-background: #080600;
			--shiki-token-constant: #9852d5;
			--shiki-token-string: #00bb00;
			--shiki-token-comment: #5b5b5b;
			--shiki-token-keyword: #aaaaaa;
			--shiki-token-parameter: #aa0000;
			--shiki-token-function: #6080fb;
			--shiki-token-string-expression: #40bb40;
			--shiki-token-punctuation: #aaaaaa;
			--shiki-token-link: #eeeeee;
		}
	}
</style>
