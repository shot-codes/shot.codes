<script lang="ts">
  import { T } from "@threlte/core";
  import { GLTF } from "@threlte/extras";

  export const supressRestPropTypeError = null;
</script>

<T.Group {...$$restProps}>
  <GLTF url="/keyboard.glb" receiveShadow castShadow />
</T.Group>
