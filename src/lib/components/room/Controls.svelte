<script lang="ts">
  import { T, InteractiveObject } from "@threlte/core";
  import { Float } from "@threlte/extras";
  import { Page } from "$lib/types";
  import { activePage } from "$lib/stores";

  export const supressRestPropTypeError = null;
</script>

<T.Group {...$$restProps}>
  <Float speed={0}>
    <T.Mesh let:ref position={[-0.5, -0.4, 1]}>
      <InteractiveObject
        object={ref}
        interactive
        on:click={() => {
          $activePage = Page.Home;
        }}
      />
      <T.SphereGeometry args={[0.2]} />
      <T.MeshStandardMaterial color="#ffff00" />
    </T.Mesh>
  </Float>

  <T.Mesh let:ref position={[0.5, -0.4, 1]}>
    <InteractiveObject
      object={ref}
      interactive
      on:click={() => {
        $activePage = Page.About;
      }}
    />
    <T.SphereGeometry args={[0.2]} />
    <T.MeshStandardMaterial color="#ff00ff" />
  </T.Mesh>
</T.Group>
