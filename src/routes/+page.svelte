<script lang="ts">
	import Scene from '$lib/components/three/SkeletonScene.svelte';
</script>

<svelte:head>
	<title>shot.codes</title>
</svelte:head>

<div class="pointer-events-none fixed left-0 top-0 z-10 h-full w-full">
	<Scene />
</div>
