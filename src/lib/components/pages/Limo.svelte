<script lang="ts">
  import { T, Three, useFrame, useTexture } from "@threlte/core";
  import { useGltf } from "@threlte/extras";
  import type { Mesh, Object3D } from "three";
  import { MeshBasicMaterial } from "three";

  const { gltf } = useGltf("/limo-merged.glb");

  let limoTop: Object3D | undefined;
  let limoMid: Object3D | undefined;
  let limoBottom: Object3D | undefined;
  let limoLB: Object3D | undefined;
  let limoRB: Object3D | undefined;
  let limoLF: Object3D | undefined;
  let limoRF: Object3D | undefined;

  $: if ($gltf) {
    limoTop = $gltf.nodes["Model_11"] as Mesh;
    limoMid = $gltf.nodes["Model_10"] as Mesh;
    limoBottom = $gltf.nodes["Model_4"] as Mesh;
    limoLB = $gltf.nodes["Model_15"] as Mesh;
    limoRB = $gltf.nodes["Model_13"] as Mesh;
    limoLF = $gltf.nodes["Model_1"] as Mesh;
    limoRF = $gltf.nodes["Model_17"] as Mesh;
  }

  let rotation = 0;
  useFrame(() => {
    rotation += 0.01;
  });
</script>

<T.Mesh scale={1.3}>
  <T.PlaneGeometry />
  <T.MeshBasicMaterial map={useTexture("/xp-window.png")} />
</T.Mesh>

<T.Group position.y={-0.1}>
  {#if limoTop}
    <Three
      type={limoTop}
      scale={0.07}
      position.z={1}
      position.y={0.2}
      rotation.z={rotation}
      rotation.x={2}
    >
      <Three type={MeshBasicMaterial} wireframe={true} color="#00ff00" />
    </Three>
  {/if}

  {#if limoMid}
    <Three
      type={limoMid}
      scale={0.07}
      position.z={1}
      rotation.z={rotation}
      rotation.x={2}
    >
      <Three type={MeshBasicMaterial} wireframe={true} color="#00ff00" />
    </Three>
  {/if}

  {#if limoBottom}
    <Three
      type={limoBottom}
      scale={0.07}
      position.z={1}
      position.y={-0.2}
      rotation.z={rotation}
      rotation.x={2}
    >
      <Three type={MeshBasicMaterial} wireframe={true} color="#00ff00" />
    </Three>
  {/if}

  {#if limoLB}
    <Three
      type={limoLB}
      scale={0.07}
      position.z={1}
      position.y={-0.2}
      rotation.z={rotation}
      rotation.x={2}
    >
      <Three type={MeshBasicMaterial} wireframe={true} color="#00ff00" />
    </Three>
  {/if}

  {#if limoRB}
    <Three
      type={limoRB}
      scale={0.07}
      position.z={1}
      position.y={-0.2}
      rotation.z={rotation}
      rotation.x={2}
    >
      <Three type={MeshBasicMaterial} wireframe={true} color="#00ff00" />
    </Three>
  {/if}

  {#if limoLF}
    <Three
      type={limoLF}
      scale={0.07}
      position.z={1}
      position.y={-0.2}
      rotation.z={rotation}
      rotation.x={2}
    >
      <Three type={MeshBasicMaterial} wireframe={true} color="#00ff00" />
    </Three>
  {/if}

  {#if limoRF}
    <Three
      type={limoRF}
      scale={0.07}
      position.z={1}
      position.y={-0.2}
      rotation.z={rotation}
      rotation.x={2}
    >
      <Three type={MeshBasicMaterial} wireframe={true} color="#00ff00" />
    </Three>
  {/if}
</T.Group>
