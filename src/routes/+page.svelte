<script lang="ts">
  import Scene from "$lib/components/Scene.svelte";
  import { Canvas } from "@threlte/core";
</script>

<div>
  <Canvas>
    <Scene />
  </Canvas>
</div>

<style>
  div {
    position: absolute;
    width: 100vw;
    height: 100vh;
  }
</style>
