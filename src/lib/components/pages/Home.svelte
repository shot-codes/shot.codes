<script lang="ts">
  import { T } from "@threlte/core";
</script>

<T.Group position={[0, 0, 0]} rotation.y={Math.PI / 2}>
  <T.Mesh>
    <T.SphereGeometry args={[1]} />
    <T.MeshStandardMaterial color="#ffff00" />
  </T.Mesh>
</T.Group>
