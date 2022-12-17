<script lang="ts">
  import Staging from "./Staging.svelte";
  import SubScene from "./SubScene.svelte";
  import Computer from "./Computer.svelte";
  import Controls from "./Controls.svelte";
</script>

<Staging />
<SubScene position={[0, -3, 0]} />
<Computer position={[0, 0, 0]} />
<Controls />
