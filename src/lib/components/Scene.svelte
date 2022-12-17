<script lang="ts">
  import { Layers } from "@threlte/core";
  import Staging from "./Staging.svelte";
  import SubScene from "./SubScene.svelte";
  import Computer from "./Computer.svelte";
  import Controls from "./Controls.svelte";
</script>

<Staging />
<Layers layers={0}>
  <SubScene position={[0, -3, 0]} />
</Layers>
<Computer position={[0, 0, 0]} />
<Controls />
