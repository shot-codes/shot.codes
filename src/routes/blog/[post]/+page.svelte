<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="mb-12 flex flex-col items-center justify-center">
	<div>{data.meta.title}</div>
	<div>{data.meta.description}</div>
	<div>{data.meta.date}</div>
</div>

<div class="prose prose-yellow mx-auto mb-20 dark:prose-invert">
	<!-- We can safely ignore the warning for @html becayse the source data is trusted-->
	<!-- eslint-disable-next-line svelte/no-at-html-tags-->
	{@html data.content.html}
</div>
