<script lang="ts">
  import { Page } from "$lib/types";
  import {
    OrbitControls,
    T,
    Three,
    InteractiveObject,
    useFrame,
  } from "@threlte/core";
  import { useGltf } from "@threlte/extras";
  import {
    WebGLRenderTarget,
    Mesh,
    type MeshStandardMaterial,
    Color,
    OrthographicCamera,
  } from "three";
  import { DEG2RAD } from "three/src/math/MathUtils";
  import SubScene from "./SubScene.svelte";
  import { get } from "svelte/store";
  import { onMount } from "svelte";

  let subSceneRenderTarget = new WebGLRenderTarget(720, 720);
  let page: Page = Page.Home;
  let camera: OrthographicCamera;

  const { gltf } = useGltf<{
    nodes: {
      Model: Mesh;
      Nodes: Mesh;
      Nodes_1: Mesh;
      Nodes_2: Mesh;
    };
    materials: {
      ["Monitor White Plastic"]: MeshStandardMaterial;
      ["Screen Surface"]: MeshStandardMaterial;
    };
  }>("/monitor.glb");

  $: nodes = $gltf?.nodes;
  $: materials = $gltf?.materials;

  onMount(() => {
    camera.updateProjectionMatrix();
  });

  useFrame(({ renderer, scene }) => {
    if (renderer) {
      // Add passes - chroma, glitch?, scanlines
      renderer.setRenderTarget(subSceneRenderTarget);
      renderer.render(scene, camera);
      renderer.setRenderTarget(null);
    }
  });
</script>

<T.PerspectiveCamera makeDefault position={[0, 0, 3]} fov={50}>
  <OrbitControls />
</T.PerspectiveCamera>

<T.DirectionalLight castShadow position={[3, 10, 10]} />
<T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
<T.AmbientLight intensity={0.2} />

<T.Mesh position.y={0.51} position.z={-6.2} position.x={0.04}>
  <T.SphereGeometry
    args={[
      5.2,
      20,
      20,
      (8 * Math.PI) / 18,
      (2 * Math.PI) / 18,
      (1.02 * (2 * Math.PI)) / 5,
      (0.95 * Math.PI) / 10,
    ]}
  />
  <T.MeshBasicMaterial map={subSceneRenderTarget.texture} />
</T.Mesh>

<T.AxesHelper />

<T.Group position={[0, -3, 0]}>
  <T.OrthographicCamera
    left={-1}
    right={1}
    top={1}
    bottom={-1}
    manual
    bind:ref={camera}
    position={[0, 0, 10]}
  />
</T.Group>

{#if nodes && materials}
  <T.Group rotation.y={270 * DEG2RAD}>
    <Three
      type={Mesh}
      geometry={nodes.Nodes.geometry}
      material={materials["Monitor White Plastic"]}
    />
    <!-- <Three
      type={Mesh}
      geometry={nodes.Nodes_1.geometry}
      material={materials["Screen Surface"]}
    /> -->
  </T.Group>
{/if}

<T.Mesh let:ref position={[-0.5, -0.4, 1]}>
  <InteractiveObject
    object={ref}
    interactive
    on:click={() => {
      page = Page.Home;
    }}
  />
  <T.SphereGeometry args={[0.2]} />
  <T.MeshStandardMaterial color="#ffff00" />
</T.Mesh>

<T.Mesh let:ref position={[0.5, -0.4, 1]}>
  <InteractiveObject
    object={ref}
    interactive
    on:click={() => {
      page = Page.About;
    }}
  />
  <T.SphereGeometry args={[0.2]} />
  <T.MeshStandardMaterial color="#ff00ff" />
</T.Mesh>

<SubScene bind:renderTarget={subSceneRenderTarget} {page} />
