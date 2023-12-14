<script lang="ts" context="module">
	let h = 0.125;
	const points = [
		new Vector3(-h, -h, h),
		new Vector3(h, -h, h),
		new Vector3(h, h, h),
		new Vector3(-h, h, h),
		new Vector3(-h, -h, h),

		new Vector3(-h, -h, -h),
		new Vector3(h, -h, -h),
		new Vector3(h, h, -h),
		new Vector3(-h, h, -h),
		new Vector3(-h, -h, -h),

		new Vector3(-h, -h, h),
		new Vector3(-h, h, h),
		new Vector3(-h, h, -h),

		new Vector3(h, h, -h),
		new Vector3(h, h, h),
		new Vector3(h, -h, h),
		new Vector3(h, -h, -h)
	];
	const geometry = new BufferGeometry().setFromPoints(points);
</script>

<script lang="ts">
	import { T } from '@threlte/core';
	import { Collider, RigidBody } from '@threlte/rapier';
	import { type Euler, BufferGeometry, Vector3 } from 'three';
	import ShadowParticle from './ShadowParticle.svelte';

	export let position: Parameters<Vector3['set']>;
	export let rotation: Parameters<Euler['set']>;
</script>

<T.Group {position} {rotation}>
	<RigidBody>
		<Collider shape={'cuboid'} restitution={1} args={[0.125, 0.125, 0.125]} />
		<T.Line {geometry}>
			<T.LineBasicMaterial color={[0, 1, 0]} />
		</T.Line>
		<ShadowParticle />
	</RigidBody>
</T.Group>
