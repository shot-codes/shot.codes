<script lang="ts">
	import SkeletonScene from '$lib/components/three/SkeletonScene.svelte';
</script>

<svelte:head>
	<title>shot.codes</title>
</svelte:head>
<div class="mt-16 flex w-full justify-center">
	<p class="relative z-50 bg-[var(--bg-home)]">Hi, I'm Shot. I make stuff.</p>
</div>
<div class="fixed left-0 top-0 z-10 h-full w-full">
	<SkeletonScene />
</div>
