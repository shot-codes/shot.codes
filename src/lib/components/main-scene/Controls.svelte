<script lang="ts">
  import { T } from "@threlte/core";
  import { Page } from "$lib/types";
  import { activePage } from "$lib/stores";
  import { GLTF } from "@threlte/extras";
  import { DEG2RAD } from "three/src/math/MathUtils";
  import { spring } from "svelte/motion";

  export const supressRestPropTypeError = null;

  const heightShot = spring(0);
  const heightLimo = spring(0);
</script>

<T.Group {...$$restProps}>
  <T.Group
    position={[-0.5, $heightLimo - 0.11, 0]}
    rotation.y={45 * DEG2RAD}
    scale={0.07}
  >
    <GLTF
      url="/limo.glb"
      castShadow
      interactive
      on:click={() => {
        $activePage = Page.Limo;
      }}
      on:pointerenter={() => ($heightLimo = 0.1)}
      on:pointerleave={() => ($heightLimo = 0)}
    />
  </T.Group>

  <T.Group
    position={[0.5, $heightShot - 0.11, 0]}
    rotation.y={150 * DEG2RAD}
    scale={0.7}
  >
    <GLTF
      url="/shot.glb"
      castShadow
      interactive
      on:click={() => {
        $activePage = Page.About;
      }}
      on:pointerenter={() => ($heightShot = 0.1)}
      on:pointerleave={() => ($heightShot = 0)}
    />
  </T.Group>
</T.Group>
