<script lang="ts">
	import { T } from '@threlte/core';
	import { useGltf } from '@threlte/extras';
	import type { Group } from 'three';
	import Highlight from './Highlight.svelte';

	export let bikeRef: Group | undefined = undefined;

	const gltf = useGltf('/assets/honda_bike.glb');
</script>

{#await gltf}
	<!-- Loading state -->
{:then loadedGltf}
	<T.Group bind:ref={bikeRef}>
		<T is={loadedGltf.scene} scale={[1.8, 1.8, 1.8]} position={[0, -1, 0]} rotation={[0, Math.PI / 2, 0]} />
		
		<!-- Component Highlights -->
		<Highlight position={[-1.5, -0.5, 0]} label="Engineering" />
		<Highlight position={[1.8, 0.5, 0.2]} label="Full-Stack" />
		<Highlight position={[0.2, 0.2, 0]} label="Performance" />
	</T.Group>
{:catch error}
	<!-- Error state -->
	{(console.error('Bike GLTF Load Error:', error), '')}
	<T.Mesh position={[0, 0, 0]}>
		<T.BoxGeometry args={[1, 1, 1]} />
		<T.MeshStandardMaterial color="#ff0000" />
	</T.Mesh>
{/await}
