<script>
  import Computer from "./Computer.svelte";
  import Desk from "./Desk.svelte";
  import Controls from "./Controls.svelte";
  import Lamp from "./Lamp.svelte";
  import { DEG2RAD } from "three/src/math/MathUtils";
  import Keyboard from "./Keyboard.svelte";
</script>

<Computer position={[0, 4.22, 1]} />
<Desk position={[0, 0, 0]} scale={5} />
<Keyboard position={[0, 4.4, 1]} rotation.y={-100 * DEG2RAD} />
<Controls position={[0, 4.8, 1]} />
<Lamp scale={10} position={[-2.5, 4, 0]} rotation.y={-20 * DEG2RAD} />
