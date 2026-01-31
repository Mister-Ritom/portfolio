<script lang="ts">
	import { onMount } from 'svelte';
	import Scene from '$lib/scene/Scene.svelte';
	import { gsap, ScrollTrigger } from '$lib/scroll/scroll';
	import type { Group, PerspectiveCamera } from 'three';

	let bikeRef: Group | undefined;
	let cameraRef: PerspectiveCamera | undefined;
	let scrollContainer: HTMLElement;
	onMount(() => {

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	});
</script>

<div bind:this={scrollContainer} class="relative bg-black">
	<Scene bind:bikeRef bind:cameraRef {scrollContainer} />

	<!-- Hero Section -->
	<section class="relative z-10 min-h-screen flex items-center justify-start px-8 md:px-16">
		<div class="max-w-2xl">
			<h1 class="text-3xl md:text-4xl font-black uppercase tracking-widest text-white mb-2 italic">
				18 • Developer • Builder
			</h1>
			<h2 class="text-6xl md:text-9xl font-black uppercase italic tracking-tighter text-white">
				Ritom Ghosh
			</h2>
			<div class="h-1 w-32 bg-blue-600 mt-4"></div>
		</div>
	</section>

	<!-- Wheels Section -->
	<section class="relative z-10 min-h-screen flex items-center justify-end px-8 md:px-32">
		<div class="max-w-xl text-right">
			<h2 class="text-4xl md:text-6xl font-black uppercase italic mb-6 text-white leading-tight">
				Engineering<br/><span class="text-blue-500">Mindset</span>
			</h2>
			<p class="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
				Early builder, coding since 2020 with a curiosity-driven approach. 
				Focused on systems over shortcuts and maintaining a true engineering mindset.
			</p>
		</div>
	</section>

	<!-- Lighting Section -->
	<section class="relative z-10 min-h-screen flex items-center justify-start px-8 md:px-32">
		<div class="max-w-xl">
			<h2 class="text-4xl md:text-6xl font-black uppercase italic mb-6 text-white leading-tight">
				Full-Stack<br/>Mastery
			</h2>
			<p class="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
				Fluent in <span class="text-blue-500">Flutter</span>, <span class="text-blue-500">Firebase</span>, <span class="text-blue-500">Supabase</span>, and <span class="text-blue-500">SvelteKit</span>. 
				Building production-ready apps across mobile and web with a focus on premium aesthetics.
			</p>
		</div>
	</section>

	<!-- Chassis Section -->
	<section class="relative z-10 min-h-screen flex items-center justify-end px-8 md:px-32">
		<div class="max-w-xl text-right">
			<h2 class="text-4xl md:text-6xl font-black uppercase italic mb-6 text-white leading-tight">
				Product &<br/>Execution
			</h2>
			<p class="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
				Combining design, UX, and logic to ship real projects, not just tutorials. 
				From ides to production with monetization-ready architecture.
			</p>
		</div>
	</section>

	<!-- Buy Section -->
	<section class="relative z-10 min-h-screen flex flex-col items-center justify-center px-8 text-center">
		<h2 class="text-5xl md:text-8xl font-black uppercase italic mb-8 text-white tracking-tighter">
			Build Fast. Think Deep. Ship Often.
		</h2>
		<div class="flex gap-6 mt-8">
			<a href="/showcase" class="px-12 py-5 bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold uppercase italic skew-x-[-12deg] transition-all">
				View Showcase
			</a>
			<a href="/contact" class="px-12 py-5 border-2 border-white hover:bg-white hover:text-black text-white text-xl font-bold uppercase italic skew-x-[-12deg] transition-all">
				Connect
			</a>
		</div>
	</section>
</div>
