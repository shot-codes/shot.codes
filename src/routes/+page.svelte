<script lang="ts">
	import SkeletonScene from '$lib/components/three/SkeletonScene.svelte';
</script>

<svelte:head>
	<title>shot.codes</title>
</svelte:head>
<p class="relative z-50 mt-16 text-center">Hi, I'm Shot. I make stuff.</p>

<div class="fixed left-0 top-0 z-10 h-full w-full">
	<SkeletonScene />
</div>
