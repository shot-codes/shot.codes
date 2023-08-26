<script lang="ts">
	import type { LayoutData } from './$types';
	import { page } from '$app/stores';
	import { onMount, onDestroy } from 'svelte';
	import '../app.css';
	import { activeBackgroundColor, navBorderColor, activeTextColor, pointer } from '$lib/stores';
	import Navigation from '$lib/components/Nav.svelte';
	import DotNav from '$lib/components/DotNav.svelte';
	import { browser } from '$app/environment';
	import { Canvas, T } from '@threlte/core';
	import { DEG2RAD } from 'three/src/math/MathUtils';
	import Eyeball from '$lib/models/Scene.svelte';
	import { type Spring, spring } from 'svelte/motion';

	export let data: LayoutData;

	let eyeRotation: Spring<[number, number, number]> = spring([0, 0, 0]);

	$: {
		eyeRotation.set([0 + $pointer.y, 0 + $pointer.x, 0]);
	}

	$: {
		switch ($page.route.id) {
			case '/':
				activeBackgroundColor.set('#ffffff');
				navBorderColor.set('#000000');
				activeTextColor.set('#000000');
				break;
			case '/photography':
				activeBackgroundColor.set('#000000');
				activeTextColor.set('#ffffff');
				break;
			case '/projects':
				activeBackgroundColor.set('#0000ff');
				activeTextColor.set('#ffffff');
				break;
			case '/games':
				activeBackgroundColor.set('#ff0000');
				activeTextColor.set('#ffffff');
				break;
			case '/blog':
				activeBackgroundColor.set('#ffff00');
				activeTextColor.set('#000000');
				break;
		}
	}

	const updatePointer = (event: MouseEvent) => {
		const centerX = window.innerWidth / 2;
		const centerY = window.innerHeight / 2;
		const x = (event.clientX - centerX) / centerX;
		const y = (event.clientY - centerY) / centerY;
		pointer.set({ x, y });
	};

	onMount(() => {
		if (browser) window.addEventListener('mousemove', updatePointer);
	});
	onDestroy(() => {
		if (browser) window.removeEventListener('mousemove', updatePointer);
	});
</script>

<svelte:head>
	<style>
		html {
			background-color: var(--bg-home);
			color: var(--text-home);
		}
	</style>
</svelte:head>

<div class="grid h-full grid-rows-[100px_1fr]">
	<div class="h-full">
		<Navigation collections={data.photographyCollections} posts={data.blogPosts} />
	</div>
	<div class="z-20 p-2">
		<slot />
	</div>
</div>

<div class="pointer-events-none absolute left-0 top-0 z-10 h-full w-full">
	<Canvas>
		<T.PerspectiveCamera makeDefault position={[0, 10, 200]} fov={50} />
		<T.DirectionalLight position={[10, 8, 15]} intensity={1.5} />
		<T.AmbientLight intensity={0.2} />

		<T.Group rotation={$eyeRotation} position={[0, 10, 0]}>
			<Eyeball scale={0.3} rotation={[0, 180 * DEG2RAD, 0]} />
		</T.Group>
	</Canvas>
</div>

<div class="z-30">
	<DotNav />
</div>

<style>
	:root {
		--bg-home: #ffffff;
		--text-home: #000000;
		--bg-photography: #000000;
		--text-photography: #ffffff;
		--bg-projects: #0000ff;
		--text-projects: #ffffff;
		--bg-games: #ff0000;
		--text-games: #ffffff;
		--bg-blog: #ffff00;
		--text-blog: #000000;
	}
</style>
