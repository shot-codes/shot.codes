<script lang="ts">
	export let data;
</script>

<div>
	{#each data.topics as topic}
		<div>
			{topic}
		</div>
	{/each}
</div>

<div class="prose">
	{@html data.readme}
</div>
