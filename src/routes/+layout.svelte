<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import '../app.css';

	let { children } = $props();
</script>

	<Navbar />
	<div class="nav-space"></div>
		{@render children()}

	<style>
		.nav-space {
			height: 5rem;
		}
	</style>




