<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { Canvas, T } from '@threlte/core';
	import Skeleton from '$lib/models/Skeleton.svelte';
	import Camera from '$lib/models/Camera.svelte';
	import Wrench from '$lib/models/Wrench.svelte';
	import Typewriter from '$lib/models/Typewriter.svelte';
	import { type Spring, spring } from 'svelte/motion';
	import { DEG2RAD } from 'three/src/math/MathUtils';

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
		const centerY = window.innerHeight / 2;
		const x = (event.clientX - centerX) / (window.innerWidth * 1.2);
		const y = (event.clientY - centerY) / (window.innerHeight * 1.2);
		pointer = { x: -x, y: -y };
	};

	let fullscreen = false;
	let width = 0;
	let height = 0;
	let innerHeight: number;
	let innerWidth: number;

	const skeletonScale = spring(0);
	const cameraScale = spring(0);
	const wrenchScale = spring(0);
	const typewriterScale = spring(0);

	$: {
		if (fullscreen) {
			width = innerWidth;
			height = innerHeight;
		} else {
			width = 100;
			height = 100;
		}
	}

	$: {
		if (
			['/', '/photography', '/blog', '/projects', '/contact'].includes($page.route.id as string)
		) {
			fullscreen = true;
		} else {
			fullscreen = false;
		}
	}

	$: {
		if ($page.route.id == '/') {
			skeletonScale.set(1);
			cameraScale.set(0);
			wrenchScale.set(0);
			typewriterScale.set(0);
		}
		if ($page.route.id == '/photography') {
			skeletonScale.set(0);
			cameraScale.set(1);
			wrenchScale.set(0);
			typewriterScale.set(0);
		}
		if ($page.route.id == '/projects') {
			skeletonScale.set(0);
			cameraScale.set(0);
			wrenchScale.set(1);
			typewriterScale.set(0);
		}
		if ($page.route.id == '/blog') {
			skeletonScale.set(0);
			cameraScale.set(0);
			wrenchScale.set(0);
			typewriterScale.set(1);
		}
		if ($page.route.id == '/contact') {
			skeletonScale.set(0);
			cameraScale.set(0);
			wrenchScale.set(0);
			typewriterScale.set(0);
		}
	}

	onMount(() => {
		if (browser) window.addEventListener('mousemove', updatePointer);
	});

	onDestroy(() => {
		if (browser) window.removeEventListener('mousemove', updatePointer);
	});
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div
	class="pointer-events-none fixed bottom-0 left-0 z-[-9999]"
	style=" height: {height}px; width: {width}px;"
>
	<Canvas>
		<T.PerspectiveCamera makeDefault position={[0, 0, 200]} fov={32} />

		<T.Group rotation={$eyeRotation} position={[0, 0, 0]} scale={$skeletonScale}>
			<Skeleton scale={1} rotation={[0, 0, 0]} />
		</T.Group>

		<T.Group rotation={$eyeRotation} scale={$cameraScale} position={[0, 0, 0]}>
			<Camera scale={10.97} position={[0, -15, 0]} rotation={[0, 270 * DEG2RAD, 0]} />
		</T.Group>

		<T.Group rotation={$eyeRotation} scale={$wrenchScale} position={[0, 0, 0]}>
			<Wrench scale={30.97} position={[0, 0, 0]} rotation={[20 * DEG2RAD, 0, 0]} />
		</T.Group>

		<T.Group rotation={$eyeRotation} scale={$typewriterScale} position={[0, 0, 0]}>
			<Typewriter
				scale={30.97}
				position={[0, -10, -20]}
				rotation={[5 * DEG2RAD, 180 * DEG2RAD, 0]}
			/>
		</T.Group>
	</Canvas>
</div>
