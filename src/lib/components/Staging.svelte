<script lang="ts">
  import { T, OrbitControls, Layers, LayerableObject } from "@threlte/core";
</script>

<Layers layers={0}>
  <T.PerspectiveCamera let:ref makeDefault position={[0, 0, 3]} fov={50}>
    <LayerableObject object={ref} />
    <OrbitControls />
  </T.PerspectiveCamera>
</Layers>

<T.DirectionalLight castShadow position={[3, 10, 10]} />
<T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
<T.AmbientLight intensity={0.2} />
