<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { Canvas, T } from '@threlte/core';
	import { DEG2RAD } from 'three/src/math/MathUtils';
	import Eyeball from '$lib/models/Scene.svelte';
	import { type Spring, spring } from 'svelte/motion';

	let eyeRotation: Spring<[number, number, number]> = spring([0, 0, 0]);
	let pointer = {
		x: 0,
		y: 0
	};

	$: {
		eyeRotation.set([0 + pointer.y, 0 + pointer.x, 0]);
	}

	const updatePointer = (event: MouseEvent) => {
		const centerX = window.innerWidth / 2;
		const centerY = (window.innerHeight * 1) / 5;
		const x = (event.clientX - centerX) / centerX;
		const y = (event.clientY - centerY) / (centerY * 3);
		pointer = { x, y };
	};

	onMount(() => {
		if (browser) window.addEventListener('mousemove', updatePointer);
	});
	onDestroy(() => {
		if (browser) window.removeEventListener('mousemove', updatePointer);
	});
</script>

<Canvas>
	<T.PerspectiveCamera makeDefault position={[0, 10, 200]} fov={50} />
	<T.DirectionalLight position={[10, 8, 15]} intensity={1.5} />
	<T.AmbientLight intensity={0.2} />

	<T.Group position={[0, 60, 0]}>
		<T.Group rotation={$eyeRotation} position={[15, 0, 0]}>
			<Eyeball scale={0.1} rotation={[0, 180 * DEG2RAD, 0]} />
		</T.Group>

		<T.Group rotation={$eyeRotation} position={[-15, 0, 0]}>
			<Eyeball scale={0.1} rotation={[0, 180 * DEG2RAD, 0]} />
		</T.Group>
	</T.Group>
</Canvas>
