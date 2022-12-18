<script lang="ts">
  import { T, Three } from "@threlte/core";
  import { Grid } from "@threlte/extras";
  import { PlaneGeometry } from "three";
  import { Reflector } from "three/examples/jsm/objects/Reflector.js";
  import { DEG2RAD } from "three/src/math/MathUtils";

  export const supressRestPropTypeError = null;

  const mirrorPlane = new PlaneGeometry(10, 10);
  const reflector = new Reflector(mirrorPlane, {
    clipBias: 0.0001,
    color: "#102010",
  });
</script>

<T.Group {...$$restProps}>
  <Three type={reflector} rotation.x={-90 * DEG2RAD} />

  <T.Mesh position.y={0.001} rotation.x={-90 * DEG2RAD} receiveShadow>
    <T.PlaneGeometry args={[10, 10]} />
    <T.MeshStandardMaterial transparent={true} opacity={0.2} color="#00ff00" />
  </T.Mesh>

  <T.Group position.y={-2}>
    <Grid
      infiniteGrid={true}
      cellColor="#00ff00"
      cellThickness={2}
      cellSize={1}
      sectionColor="#00ff00"
      sectionThickness={0.1}
      sectionSize={100}
      fadeDistance={70}
    />
  </T.Group>
</T.Group>
