<script lang="ts">
	import '../app.css';
	import { onMount, onDestroy } from 'svelte';
	import { initSmoothScroll, destroySmoothScroll } from '$lib/scroll/scroll';
	import LoadingBar from '$lib/components/LoadingBar.svelte';

	onMount(() => {
		initSmoothScroll();
	});

	onDestroy(() => {
		destroySmoothScroll();
	});
</script>

<svelte:head>
	<title>Ritom Ghosh - Developer Portfolio</title>
	<meta name="description" content="Portfolio of Ritom Ghosh - Full Stack Developer specializing in Flutter, Firebase, Supabase, and modern web technologies" />
</svelte:head>

<div class="min-h-screen bg-black text-white">
	<LoadingBar />
	<nav class="fixed top-0 left-0 right-0 z-50 p-6">
		<div class="max-w-7xl mx-auto flex justify-between items-center">
			<a href="/" class="flex items-center">
				<img src="/logo.jpeg" alt="Ritom Ghosh" class="h-10 w-10 rounded-full object-cover border-2 border-blue-500/50 hover:border-blue-400 transition-all" />
			</a>
			<div class="flex gap-8">
				<a href="/" class="hover:text-blue-400 transition-colors">Home</a>
				<a href="/showcase" class="hover:text-blue-400 transition-colors">Showcase</a>
				<a href="/contact" class="hover:text-blue-400 transition-colors">Contact</a>
				<a href="/links" class="hover:text-blue-400 transition-colors">Links</a>
			</div>
		</div>
	</nav>

	<slot />
</div>
