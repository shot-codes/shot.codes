<script lang="ts">
  import { T } from "@threlte/core";
  import { Grid } from "@threlte/extras";

  export const supressRestPropTypeError = null;
</script>

<T.Group {...$$restProps}>
  <Grid
    infiniteGrid={true}
    cellColor="#00ff00"
    cellThickness={2}
    cellSize={1}
    sectionColor="#00ff00"
    sectionThickness={0.1}
    sectionSize={100}
    fadeDistance={50}
  />
</T.Group>
