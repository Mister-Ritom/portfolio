<script lang="ts">
	import { onMount } from 'svelte';
	import { DefaultLoadingManager } from 'three';
	import { progress, visible } from '$lib/stores/loading';
	import { fade } from 'svelte/transition';

	onMount(() => {
		DefaultLoadingManager.onStart = () => {
			visible.set(true);
			progress.set(0);
		};

		DefaultLoadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
			const percentage = (itemsLoaded / itemsTotal) * 100;
			progress.set(percentage);
			if (percentage === 100) {
				setTimeout(() => {
					visible.set(false);
				}, 500);
			}
		};

		DefaultLoadingManager.onLoad = () => {
			progress.set(100);
			setTimeout(() => {
				visible.set(false);
			}, 500);
		};
	});
</script>

{#if $visible}
	<div class="fixed top-0 left-0 w-full h-1 z-[100]" out:fade={{ duration: 500 }}>
		<div
			class="h-full bg-blue-600 transition-all duration-300 ease-out shadow-[0_0_10px_rgba(37,99,235,0.5)]"
			style="width: {$progress}%"
		></div>
	</div>
{/if}
