<script lang="ts">
  import { T, useTexture } from "@threlte/core";
</script>

<T.Mesh scale={1.0} position.y={0.4} position.x={0.3}>
  <T.PlaneGeometry />
  <T.MeshBasicMaterial map={useTexture("/xp-limo.png")} />
</T.Mesh>
