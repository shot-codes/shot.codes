<script lang="ts">
  import { useThrelte } from "@threlte/core";
  import { Color } from "three";
  import Lighting from "./Lighting.svelte";
  import ScreenRender from "./ScreenRender.svelte";
  import MainScene from "./main-scene/MainScene.svelte";
  import Camera from "./Camera.svelte";

  const { scene } = useThrelte();

  scene.background = new Color("#000000");
</script>

<Camera />
<Lighting />
<MainScene />
<ScreenRender position={[0, -3, 10]} />
