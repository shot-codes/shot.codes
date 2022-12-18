<script lang="ts">
  import { T, useTexture } from "@threlte/core";
</script>

<T.Mesh position.x={-0.3}>
  <T.PlaneGeometry />
  <T.MeshBasicMaterial map={useTexture("/xp-sb.png")} />
</T.Mesh>

<T.Mesh position.x={0.4} position.y={-0.2}>
  <T.PlaneGeometry />
  <T.MeshBasicMaterial map={useTexture("/xp-image.png")} />
</T.Mesh>
