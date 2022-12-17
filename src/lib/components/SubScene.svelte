<script lang="ts">
  import { Page } from "$lib/types";
  import { T, useFrame } from "@threlte/core";
  import type { OrthographicCamera, WebGLRenderTarget } from "three";
  import Home from "./pages/Home.svelte";
  import About from "./pages/About.svelte";
  import { onMount } from "svelte";

  export let renderTarget: WebGLRenderTarget;
  export let page: Page;

  let camera: OrthographicCamera;
  const frustum = 1;
  const frustumAspect = 1.18;

  onMount(() => {
    camera.updateProjectionMatrix();
  });

  // useFrame(({ renderer, scene }) => {
  //   if (renderer) {
  //     // Add passes - chroma, glitch?, scanlines
  //     renderer.setRenderTarget(renderTarget);
  //     renderer.render(scene, camera);
  //     renderer.setRenderTarget(null);
  //   }
  // });
</script>

<T.Group position={[0, -3, 0]}>
  <T.OrthographicCamera
    left={-frustum * frustumAspect}
    right={frustum * frustumAspect}
    top={frustum}
    bottom={-frustum}
    manual
    bind:ref={camera}
    position={[0, 0, 10]}
  />

  {#if page == Page.Home}
    <Home />
  {/if}

  {#if page == Page.About}
    <About />
  {/if}
</T.Group>
