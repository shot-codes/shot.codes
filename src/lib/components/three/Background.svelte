<script lang="ts">
	import { page } from '$app/stores';
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';

	let fullscreen = false;
	let width = 0;
	let height = 0;
	let innerHeight: number;
	let innerWidth: number;

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
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div
	class="pointer-events-none fixed bottom-0 left-0 z-[-9999]"
	style=" height: {height}px; width: {width}px;"
>
	<Canvas>
		<Scene />
	</Canvas>
</div>
