<script lang="ts">
	import { useFrame } from '@threlte/core';
	import { interactivity } from '@threlte/extras';
	import type { Euler, Vector3 } from 'three';
	import Particle from './Particle.svelte';

	const getId = () => {
		return Math.random().toString(16).slice(2);
	};
	const getRandomPosition = (): Parameters<Vector3['set']> => {
		return [0.5 - Math.random() * 3, 5 - Math.random() * 1 + 1, 0];
	};
	const getRandomRotation = (): Parameters<Euler['set']> => {
		return [Math.random() * 10, Math.random() * 10, Math.random() * 10];
	};
	type Body = {
		id: string;
		mounted: number;
		position: Parameters<Vector3['set']>;
		rotation: Parameters<Euler['set']>;
	};
	let bodies: Body[] = [];
	let lastBodyMounted = 0;
	let bodyEveryMilliseconds = 3000;
	let longevityMilliseconds = 24000;
	useFrame(() => {
		if (lastBodyMounted + bodyEveryMilliseconds < Date.now()) {
			const body: Body = {
				id: getId(),
				mounted: Date.now(),
				position: getRandomPosition(),
				rotation: getRandomRotation()
			};
			bodies.unshift(body);
			lastBodyMounted = Date.now();
			bodies = bodies;
		}
		const deleteIds: string[] = [];
		bodies.forEach((body) => {
			if (body.mounted + longevityMilliseconds < Date.now()) {
				deleteIds.push(body.id);
			}
		});
		if (deleteIds.length) {
			deleteIds.forEach((id) => {
				const index = bodies.findIndex((body) => body.id === id);
				if (index !== -1) bodies.splice(index, 1);
			});
			bodies = bodies;
		}
	});
	interactivity();
</script>

{#each bodies as body (body.id)}
	<Particle position={body.position} rotation={body.rotation} />
{/each}
