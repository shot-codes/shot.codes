<script lang="ts">
	import SkeletonScene from '$lib/components/three/SkeletonScene.svelte';
	import { World } from '@threlte/rapier';
	import { Canvas } from '@threlte/core';
	import Scene from '$lib/components/three/cubes/Scene.svelte';
</script>

<svelte:head>
	<title>shot.codes</title>
</svelte:head>
<p class="relative z-50 mt-16 text-center">Hi, I'm Shot. I make stuff.</p>

<div class="fixed left-0 top-0 z-10 h-full w-full">
	<Canvas>
		<World gravity={[0, -1, 0]}>
			<Scene />
		</World>
	</Canvas>
	<SkeletonScene />
</div>
