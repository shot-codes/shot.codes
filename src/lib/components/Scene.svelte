<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { Canvas, T } from '@threlte/core';
	import { DEG2RAD } from 'three/src/math/MathUtils';
	import Eyeball from '$lib/models/Scene.svelte';
	import { type Spring, spring } from 'svelte/motion';
	import { page } from '$app/stores';

	export let pointerOffset = 0;

	let eyeRotation: Spring<[number, number, number]> = spring([0, 0, 0]);
	let pointer = {
		x: 0,
		y: 0
	};

	$: {
		eyeRotation.set([0 + pointer.y, 0 + pointer.x, 0]);
	}

	$: {
		$page;
		eyeRotation.set([0, 0, 0]);
	}

	const updatePointer = (event: MouseEvent) => {
		const centerX = window.innerWidth - 320 + pointerOffset;
		const centerY = window.innerHeight - 40;
		const x = (event.clientX - centerX) / (window.innerWidth * 1.2);
		const y = (event.clientY - centerY) / (window.innerHeight * 1.2);
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
	<T.PerspectiveCamera makeDefault position={[0, 0, 200]} fov={32} />
	<T.DirectionalLight position={[10, 8, 15]} intensity={1.5} />
	<T.AmbientLight intensity={0.2} />

	<T.Group rotation={$eyeRotation} position={[0, 0, 0]}>
		<Eyeball scale={0.47} rotation={[0, 180 * DEG2RAD, 0]} />
	</T.Group>
</Canvas>
