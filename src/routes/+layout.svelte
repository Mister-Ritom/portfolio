<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import '../app.css';

	let { children } = $props();
</script>

	<Navbar />
	<div class="nav-space"></div>
		{@render children()}

	<style>

		:global(body) {
				margin: 0 16px;
			--primary: #a185ff;
			--secondary: #a9a9fb;
			--accent: #4A90E2;
			--bg: #121212;
			background-color: var(--bg);
			color: white;
		}
		.nav-space {
			height: 5rem;
		}
		:global(a) {
			text-decoration: none;
			color: inherit;
		}
	</style>




