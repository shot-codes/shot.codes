<script lang="ts">
  import { T } from "@threlte/core";
  import { GLTF } from "@threlte/extras";

  export const supressRestPropTypeError = null;
</script>

<T.Group {...$$restProps}>
  <GLTF url="/desk.glb" receiveShadow />
</T.Group>
