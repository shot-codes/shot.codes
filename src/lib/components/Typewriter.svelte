<script lang="ts">
	import { activePage } from './Nav.svelte';

	let text = '';
	let targetText = '';

	$: {
		targetText = $activePage;
	}
</script>

<span>
	{text}
</span>
