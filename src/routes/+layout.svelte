<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';

	const navLinks = [
		{ label: 'About', href: '/#about' },
		{ label: 'Projects', href: '/projects' },
		{ label: 'Blog', href: '/blog' }
	];

	let menuOpen = false;

	$: pathname = $page.url.pathname;
	
	$: title = pathname.startsWith('/projects') ? 'Projects — Ritom Ghosh' :
	           pathname.startsWith('/blog') ? 'Blog — Ritom Ghosh' :
	           pathname.startsWith('/contact') ? 'Contact — Ritom Ghosh' :
	           'Ritom Ghosh — Developer & Builder';

	$: description = pathname.startsWith('/projects') ? 'All 22+ projects by Ritom Ghosh — mobile apps, web platforms, AI tools, and creative tech.' :
	                 pathname.startsWith('/blog') ? 'Writings by Ritom Ghosh on mobile development, web engineering, and creative software.' :
	                 pathname.startsWith('/contact') ? 'Get in touch with Ritom Ghosh — open to freelance, full-time, and collaboration opportunities.' :
	                 'Portfolio of Ritom Ghosh — full-stack developer building mobile apps, web platforms, and creative software since age 14.';
	
	$: siteUrl = $page.url.origin;
	$: currentUrl = `${siteUrl}${pathname}`;
	$: imageUrl = `${siteUrl}/assets/my_image.png`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={currentUrl} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={imageUrl} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={currentUrl} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={imageUrl} />
</svelte:head>

<!-- ── Navigation ──────────────────────────────────────── -->
<header class="fixed top-0 left-0 right-0 z-50 px-6 py-4">
	<nav class="max-w-7xl mx-auto flex items-center justify-between">
		<!-- Logo -->
		<a href="/" class="flex items-center gap-2 group" aria-label="Home">
			<img
				src="/assets/logo.png"
				alt="Ritom Ghosh"
				class="h-9 w-9 rounded-full object-cover ring-2 ring-white/30 group-hover:ring-white/60 transition-all duration-300"
			/>
		</a>

		<!-- Desktop links -->
		<ul class="hidden md:flex items-center gap-8 list-none">
			{#each navLinks as link}
				<li>
					<a
						href={link.href}
						class="text-sm font-medium tracking-wide text-[#1E1E1E]/70 hover:text-[#1E1E1E] transition-colors duration-200"
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>

		<!-- CTA pill -->
		<a
			href="/contact"
			class="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1E1E1E] text-white text-sm font-medium hover:bg-[#333] transition-colors duration-200"
		>
			Get In Touch
		</a>

		<!-- Mobile hamburger -->
		<button
			class="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors"
			on:click={() => (menuOpen = !menuOpen)}
			aria-label="Toggle menu"
		>
			<span class="block w-5 h-px bg-[#1E1E1E] mb-1.5 transition-all duration-300 {menuOpen ? 'translate-y-1.5 rotate-45' : ''}"></span>
			<span class="block w-5 h-px bg-[#1E1E1E] mb-1.5 transition-all duration-300 {menuOpen ? 'opacity-0' : ''}"></span>
			<span class="block w-5 h-px bg-[#1E1E1E] transition-all duration-300 {menuOpen ? '-translate-y-1.5 -rotate-45' : ''}"></span>
		</button>
	</nav>

	<!-- Mobile menu -->
	{#if menuOpen}
		<div class="md:hidden mt-3 mx-auto max-w-7xl bg-white rounded-2xl shadow-xl p-6 border border-black/5">
			<ul class="flex flex-col gap-4 list-none">
				{#each navLinks as link}
					<li>
						<a
							href={link.href}
							class="text-lg font-medium"
							on:click={() => (menuOpen = false)}
						>
							{link.label}
						</a>
					</li>
				{/each}
				<li class="pt-2 border-t border-black/10">
					<a
						href="/contact"
						class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1E1E1E] text-white text-sm font-medium"
						on:click={() => (menuOpen = false)}
					>
						Get In Touch
					</a>
				</li>
			</ul>
		</div>
	{/if}
</header>

<main>
	<slot />
</main>

<style>
	header {
		background: rgba(244, 244, 242, 0.85);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border-bottom: 1px solid rgba(0,0,0,0.06);
	}
</style>
