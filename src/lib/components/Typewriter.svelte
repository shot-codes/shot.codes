<script lang="ts">
	import { activePage } from './Nav.svelte';

	let text = '';
	let targetText = '';

	// $: {
	// 	targetText = $activePage;
	// 	while (text != targetText) {
	//      setTimeout(() => {
	//        console.log(targetText);
	//      }, 1000)
	// 	}
	// }
</script>

<span>
	{text}
</span>
