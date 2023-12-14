<script lang="ts">
	import { T } from '@threlte/core';
	import Emitter from './Emitter.svelte';
	import Floor from './Floor.svelte';
	import Wall from './Wall.svelte';
	import InitialParticles from './InitialParticles.svelte';

	let canvas_w = 1;
	let canvas_h = 1;
	let aspect = 1;
	let frustumSize = 3;

	$: {
		aspect = canvas_w / canvas_h;
	}
</script>

<svelte:window bind:innerHeight={canvas_h} bind:innerWidth={canvas_w} />

<T.OrthographicCamera
	makeDefault
	manual
	args={[(frustumSize * aspect) / -2, (frustumSize * aspect) / 2, frustumSize, 0, 1, 1000]}
/>

<T.DirectionalLight castShadow position={[-8, 20, 3]} />

<T.AmbientLight intensity={0.2} />

<T.Group position.z={-5}>
	<InitialParticles position={[0, 5, 0]} />

	<Emitter />
	<Floor />
	<Wall x_pos={0.35} x_rot={0.1} />
	<Wall x_pos={-0.35} x_rot={-0.1} />
</T.Group>
