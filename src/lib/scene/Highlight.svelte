<script lang="ts">
	import { T } from '@threlte/core';
	import { HTML } from '@threlte/extras';
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	export let position: [number, number, number];
	export let label: string = '';

	const scale = tweened(1, { duration: 1000, easing: cubicOut });
	const opacity = tweened(0.8, { duration: 1000, easing: cubicOut });

	let interval: any;

	onMount(() => {
		interval = setInterval(() => {
			scale.set(1.5).then(() => scale.set(1));
			opacity.set(0.2).then(() => opacity.set(0.8));
		}, 2000);
		return () => clearInterval(interval);
	});
</script>

<T.Group {position}>
	<HTML center>
		<div class="relative flex items-center justify-center">
			<!-- Outer pulsing ring -->
			<div 
				class="absolute w-12 h-12 border-2 border-white rounded-full transition-transform"
				style="transform: scale({$scale}); opacity: {$opacity};"
			></div>
			<!-- Inner static ring -->
			<div class="w-8 h-8 border-2 border-white rounded-full bg-white/10 backdrop-blur-sm"></div>
			
			{#if label}
				<div class="absolute left-10 whitespace-nowrap bg-black/50 backdrop-blur-md px-3 py-1 rounded border border-white/20 text-white text-xs font-bold uppercase tracking-widest italic">
					{label}
				</div>
			{/if}
		</div>
	</HTML>
</T.Group>
