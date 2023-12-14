<script lang="ts">
	import { T } from '@threlte/core';
	import { Collider } from '@threlte/rapier';
</script>

<T.Group position={[0, 0.02, 0]}>
	<Collider shape={'cuboid'} restitution={1} args={[10, 0.001, 10]} />
</T.Group>
