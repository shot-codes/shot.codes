<script lang="ts">
  import { T } from "@threlte/core";
  import { GLTF } from "@threlte/extras";
  import { PointLight } from "three";

  export const supressRestPropTypeError = null;
</script>

<T.Group {...$$restProps}>
  <GLTF url="/lamp.glb" receiveShadow castShadow />
  <T.Group position={[0.02, 0.17, 0]}>
    <!-- <T.AxesHelper/> -->
    <!-- <T.PointLight intensity={1}/> -->
  </T.Group>
</T.Group>
