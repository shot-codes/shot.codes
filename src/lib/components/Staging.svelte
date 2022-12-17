<script lang="ts">
  import { T, OrbitControls } from "@threlte/core";
</script>

<T.PerspectiveCamera makeDefault position={[0, 0, 3]} fov={50}>
  <OrbitControls />
</T.PerspectiveCamera>

<T.DirectionalLight castShadow position={[3, 10, 10]} />
<T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
<T.AmbientLight intensity={0.2} />
