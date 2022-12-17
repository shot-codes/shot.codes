<script lang="ts">
  import { T, OrbitControls, TransformableObject } from "@threlte/core";
</script>

<T.PerspectiveCamera makeDefault position={[0, 10, 6]} fov={50}>
  <OrbitControls target={{ y: 4 }} />
</T.PerspectiveCamera>

<T.DirectionalLight castShadow position={[3, 10, 10]} />
<T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
<T.AmbientLight intensity={0.2} />
