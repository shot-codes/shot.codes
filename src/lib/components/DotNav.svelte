<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<div class="fixed bottom-4 right-[15px] z-30 flex space-x-2">
	<button
		on:click={() => {
			goto('/');
		}}
		class="h-12 w-12 rounded-full bg-white"
	/>
	<button
		on:click={() => {
			goto('/photography');
		}}
		class="h-12 w-12 rounded-full bg-black"
	/>
	<button
		on:click={() => {
			goto('/projects');
		}}
		class="h-12 w-12 rounded-full bg-[#0000ff]"
	/>
	<button
		on:click={() => {
			goto('/games');
		}}
		class="h-12 w-12 rounded-full bg-[#ff0000]"
	/>
	<button
		on:click={() => {
			goto('/blog');
		}}
		class="h-12 w-12 rounded-full bg-[#ffff00]"
	/>
</div>
