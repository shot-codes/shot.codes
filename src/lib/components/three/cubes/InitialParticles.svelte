<script lang="ts">
	import { T } from '@threlte/core';
	import { interactivity } from '@threlte/extras';
	import type { Vector3, Euler } from 'three';
	import Particle from './Particle.svelte';

	export let position: Parameters<Vector3['set']>;

	interactivity();

	const getRandomPosition = (): Parameters<Vector3['set']> => {
		return [Math.random() * 10 - 5, Math.random(), 0];
	};
	const getRandomRotation = (): Parameters<Euler['set']> => {
		return [Math.random() * 10, Math.random(), Math.random() * 10];
	};

	let bodies: [Parameters<Vector3['set']>, Parameters<Euler['set']>][] = [];
	for (let i = 0; i < 50; i++) {
		bodies.push([getRandomPosition(), getRandomRotation()]);
	}
</script>

<T.Group {position}>
	{#each bodies as body}
		<Particle position={body[0]} rotation={body[1]} />
	{/each}
</T.Group>
