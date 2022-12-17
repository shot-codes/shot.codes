<script lang="ts">
  import { T, Three } from "@threlte/core";
  import { useGltf } from "@threlte/extras";
  import { Mesh, type MeshStandardMaterial } from "three";
  import { DEG2RAD } from "three/src/math/MathUtils";
  import { renderTarget } from "$lib/stores";

  export const supressRestPropTypeError = null;

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

  $: nodes = $gltf?.nodes.Nodes;
  $: materials = $gltf?.materials;
</script>

<T.Group {...$$props}>
  {#if nodes && materials}
    <T.Group rotation.y={270 * DEG2RAD}>
      <Three
        type={Mesh}
        geometry={nodes.geometry}
        material={materials["Monitor White Plastic"]}
        castShadow
      />
    </T.Group>
  {/if}

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
    <T.MeshBasicMaterial map={$renderTarget.texture} />
  </T.Mesh>
</T.Group>
