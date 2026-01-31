<script lang="ts">
	import { Canvas, T } from '@threlte/core';
	import { HTML } from '@threlte/extras';
	import { onMount } from 'svelte';
	import Lights from './Lights.svelte';
	import Bike from './Bike.svelte';
	import AnimationController from './AnimationController.svelte';
	import type { Group, PerspectiveCamera } from 'three';

	export let bikeRef: Group | undefined = undefined;
	export let cameraRef: PerspectiveCamera | undefined = undefined;
	export let scrollContainer: HTMLElement;

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<div class="fixed inset-0 z-20 pointer-events-none">
		<Canvas>
			<T.PerspectiveCamera
				makeDefault
				bind:ref={cameraRef}
				position={[0, 0, 11]}
				fov={45}
			/>
			<Lights />
			<Bike bind:bikeRef />
			
			<!-- Atmospheric Background Text -->
			<T.Group position={[0, 0, -5]}>
				<HTML center transform portal={undefined}>
					<div class="select-none pointer-events-none opacity-10">
						<h3 class="text-[30vw] font-black italic tracking-tighter text-white uppercase whitespace-nowrap leading-none stroke-text">
							Ritom Ghosh
						</h3>
					</div>
				</HTML>
			</T.Group>

			{#if bikeRef && cameraRef && scrollContainer}
				<AnimationController {bikeRef} {cameraRef} {scrollContainer} />
			{/if}
		</Canvas>
	</div>
{/if}

<style>
	.stroke-text {
		-webkit-text-stroke: 2px white;
		color: transparent;
	}
</style>
