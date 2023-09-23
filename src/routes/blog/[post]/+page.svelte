<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="mb-12 flex flex-col items-center justify-center">
	<div>{data.meta.title}</div>
	<div>{data.meta.description}</div>
	<div>{data.meta.date}</div>
</div>

<div class="prose prose-neutral mx-auto mb-20">
	{@html data.content.html}
</div>
