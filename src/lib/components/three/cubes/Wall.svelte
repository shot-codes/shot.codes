<script lang="ts">
	import { T } from '@threlte/core';
	import { Collider } from '@threlte/rapier';

	export let x_pos: number;
	export let x_rot: number;
</script>

<T.Group position={[0, 1, x_pos]} rotation.x={x_rot}>
	<Collider shape={'cuboid'} args={[10, 10, 0.01]} />
</T.Group>
