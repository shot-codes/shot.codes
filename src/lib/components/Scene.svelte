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
  import { WebGLRenderTarget, Mesh, type MeshStandardMaterial, Color, OrthographicCamera } from "three";
  import { DEG2RAD } from "three/src/math/MathUtils";
  import SubScene from "./SubScene.svelte";
  import { get } from "svelte/store";
    import { onMount } from "svelte";

  let subSceneRenderTarget = new WebGLRenderTarget(720, 720);
  let page: Page = Page.Home;
  let camera : OrthographicCamera;

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

  $: {
    if (materials) {
      console.log(materials["Screen Surface"])
      materials["Screen Surface"].map = subSceneRenderTarget.texture;
      materials["Screen Surface"].color = new Color(0xffffff);
    }
  }

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

<T.Mesh position.z={-0.39}>
  <T.SphereGeometry
    args={[
      1,
      20,
      20,
      (4 * Math.PI) / 11,
      (3 * Math.PI) / 11,
      (2 * Math.PI) / 5,
      Math.PI / 5,
    ]}
  />
  <T.MeshBasicMaterial map={subSceneRenderTarget.texture} />
</T.Mesh>

<T.AxesHelper />

<T.Group position={[0, -3, 0]}>
  <T.OrthographicCamera
    left={-5}
    right={1}
    top={1}
    bottom={-7}
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
      scale={0.5}
    />
    <Three
      type={Mesh}
      geometry={nodes.Nodes_1.geometry}
      material={materials["Screen Surface"]}
      scale={0.5}
    />
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
