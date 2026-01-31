<script lang="ts">
	import { useTask } from '@threlte/core';
	import { gsap, ScrollTrigger } from '$lib/scroll/scroll';
	import { onMount, onDestroy } from 'svelte';
	import type { Group, PerspectiveCamera } from 'three';
	import * as THREE from 'three';

	export let bikeRef: Group | undefined;
	export let cameraRef: PerspectiveCamera | undefined;
	export let scrollContainer: HTMLElement;

	const animState = {
		bikeRotX: 0,
		bikeRotY: Math.PI / 2, // Start facing side
		bikeRotZ: 0,
		camX: 0,
		camY: 0,
		camZ: 10,
		targetX: 0,
		targetY: 0,
		targetZ: 0,
		fov: 45
	};

	let tl: gsap.core.Timeline;

	onMount(() => {
		if (!scrollContainer) return;

		tl = gsap.timeline({
			scrollTrigger: {
				trigger: scrollContainer,
				start: 'top top',
				end: 'bottom bottom',
				scrub: 1.5
			}
		});

		// Hero -> Wheels (Rear focus)
		tl.to(animState, {
			camX: 6,
			camY: 1,
			camZ: 6,
			targetX: -2, // Move target toward back of bike
			targetY: -0.5,
			targetZ: 0,
			bikeRotY: Math.PI * 0.75,
			duration: 2,
			ease: 'power2.inOut'
		})
		// Wheels -> Lighting (Headlight focus)
		.to(animState, {
			camX: -5,
			camY: 1.5,
			camZ: 5,
			targetX: 2, // Move target toward front
			targetY: 0.5,
			targetZ: 0,
			bikeRotY: Math.PI * 1.25,
			bikeRotX: 0.1,
			duration: 2,
			ease: 'power2.inOut'
		})
		// Lighting -> Chassis (Side profile, slightly angled)
		.to(animState, {
			camX: 0,
			camY: 1,
			camZ: 8,
			targetX: 0,
			targetY: 0,
			targetZ: 0,
			bikeRotY: Math.PI * 2,
			bikeRotX: 0,
			duration: 2,
			ease: 'power2.inOut'
		})
		// Chassis -> Buy (Dramatic angle)
		.to(animState, {
			camX: -8,
			camY: 2,
			camZ: 4,
			targetX: 0,
			targetY: 0.5,
			targetZ: 0,
			bikeRotY: Math.PI * 2.5,
			duration: 2,
			ease: 'power2.inOut'
		});
	});

	onDestroy(() => {
		if (tl) tl.kill();
	});

	useTask(() => {
		if (!bikeRef || !cameraRef) return;

		// Apply bike rotation
		bikeRef.rotation.x = animState.bikeRotX;
		bikeRef.rotation.y = animState.bikeRotY;
		bikeRef.rotation.z = animState.bikeRotZ;

		// Apply camera position
		cameraRef.position.x = animState.camX;
		cameraRef.position.y = animState.camY;
		cameraRef.position.z = animState.camZ;

		// Apply camera target
		cameraRef.lookAt(animState.targetX, animState.targetY, animState.targetZ);
		
		if (cameraRef.fov !== animState.fov) {
			cameraRef.fov = animState.fov;
			cameraRef.updateProjectionMatrix();
		}
	});
</script>
