<script lang="ts">
  import type { OrthographicCamera } from "three";
  import { T, useFrame, useTexture } from "@threlte/core";
  import { onMount } from "svelte";
  import { Page } from "$lib/types";
  import { renderTarget, activePage } from "$lib/stores";
  import Home from "./pages/Home.svelte";
  import Limo from "./pages/Limo.svelte";
  import About from "./pages/About.svelte";

  export const supressRestPropTypeError = null;

  let camera: OrthographicCamera;

  useFrame(({ renderer, scene }) => {
    if (!renderer) return;
    renderer.setRenderTarget($renderTarget);
    // composer.render()
    renderer.render(scene, camera);
    renderer.setRenderTarget(null);
  });

  onMount(() => {
    camera.updateProjectionMatrix();
  });
</script>

<T.Group let:ref {...$$restProps}>
  <!-- Background -->
  <T.Group position={[0, 0, -2]} scale={2.4}>
    <T.Mesh>
      <T.PlaneGeometry />
      <T.MeshBasicMaterial map={useTexture("/bliss.png")} />
    </T.Mesh>
  </T.Group>

  <T.OrthographicCamera
    left={-1.2}
    right={1.2}
    top={1.1}
    bottom={-1.1}
    manual
    bind:ref={camera}
    position={[0, 0, 10]}
  />

  {#if $activePage == Page.Home}
    <Home />
  {/if}

  {#if $activePage == Page.Limo}
    <Limo />
  {/if}

  {#if $activePage == Page.About}
    <About />
  {/if}
</T.Group>
