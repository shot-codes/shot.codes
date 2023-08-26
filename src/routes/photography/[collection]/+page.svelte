<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="mt-[200px] flex flex-col">
	{#each data.images as image}
		<img
			src={`/images/${data.collection}/${image}`}
			alt={`${image} from collection ${data.collection}`}
		/>
	{/each}
</div>
