<script lang="ts">
	import { Canvas, T } from '@threlte/core';
	import { DEG2RAD } from 'three/src/math/MathUtils';
	import Eyeball from '$lib/models/Scene.svelte';
	import { pointer } from '$lib/stores';
	import { type Spring, spring } from 'svelte/motion';

	let eyeRotation: Spring<[number, number, number]> = spring([0, 0, 0]);

	$: {
		eyeRotation.set([0 + $pointer.y, 0 + $pointer.x, 0]);
	}
</script>

<!---->
<!-- <div class="pointer-events-none absolute left-0 top-0 h-full w-full"> -->
<!-- 	<Canvas> -->
<!-- 		<T.PerspectiveCamera makeDefault position={[0, 10, 200]} fov={50} /> -->
<!-- 		<T.DirectionalLight position={[10, 8, 15]} intensity={1.5} /> -->
<!-- 		<T.AmbientLight intensity={0.2} /> -->
<!---->
<!-- 		<T.Group rotation={$eyeRotation} position={[0, 10, 0]}> -->
<!-- 			<Eyeball scale={0.3} rotation={[0, 180 * DEG2RAD, 0]} /> -->
<!-- 		</T.Group> -->
<!-- 	</Canvas> -->
<!-- </div> -->

<div class="flex h-full items-center px-20 pb-[100px] pt-[100px]">
	<div class="-mt-[100px] flex h-full w-full flex-col justify-between space-y-4 font-sans">
		<a href="photography" class="text-right hover:underline">PHOTOGRAPHY</a>
		<a href="projects" class="hover:underline">PROJECTS</a>
		<a href="games" class="text-right hover:underline">GAMES</a>
		<a href="blog" class="hover:underline">BLOG</a>
	</div>
</div>
