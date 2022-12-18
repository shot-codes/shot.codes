<script lang="ts">
  import {
    T,
    OrbitControls,
    TransformableObject,
    useThrelte,
  } from "@threlte/core";
  import { Vector3 } from "three";
  import { spring } from "svelte/motion";

  const { pointer } = useThrelte();
  let zoom = 1;
  let windowWidth: number;
  let cameraOrigin = new Vector3(0, 2, 6);
  let cameraPosition = new Vector3(0, 2, 6);
  const cameraPositionSpring = spring([0, 2, 6]);

  $: {
    cameraPositionSpring.set([
      cameraOrigin.x + 0.4 * $pointer.x,
      cameraOrigin.y + 0.4 * $pointer.y,
      cameraOrigin.z,
    ]);
  }
  $: {
    cameraPosition.set(
      $cameraPositionSpring[0],
      $cameraPositionSpring[1],
      $cameraPositionSpring[2]
    );
    cameraPosition = cameraPosition;
  }

  // TODO: Check aspect ratio, not absolute width
  $: {
    if (windowWidth < 900 && windowWidth >= 700) {
      zoom = 0.8;
    } else if (windowWidth < 700) {
      zoom = 0.6;
    } else {
      zoom = 1;
    }
  }
</script>

<svelte:window bind:innerWidth={windowWidth} />

<T.PerspectiveCamera let:ref makeDefault fov={30} {zoom}>
  <TransformableObject
    object={ref}
    lookAt={{ y: 0.8 }}
    position={cameraPosition}
  />
  <!-- <OrbitControls target={{y: 0.8}}/> -->
</T.PerspectiveCamera>
