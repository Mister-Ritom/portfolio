<script lang="ts">
	import { Github, ExternalLink } from 'lucide-svelte';

	const projects = [
		// Recently active with live deployments
		{
			name: 'Indie',
			label: 'Web · TypeScript',
			description: 'Pinterest-clone app showcasing a masonry grid layout, smooth animations, and strong UI/UX design capabilities.',
			tech: ['TypeScript', 'React', 'Masonry Grid'],
			github: 'https://github.com/Mister-Ritom/indie',
			live: 'https://indieapp.vercel.app',
			category: 'Web'
		},
		{
			name: 'zdotcom',
			label: 'Web · TypeScript',
			description: 'Web companion platform for the Z social media app, built with TypeScript.',
			tech: ['TypeScript', 'SvelteKit'],
			github: 'https://github.com/Mister-Ritom/zdotcom',
			live: 'https://zdotcom.vercel.app',
			category: 'Web'
		},
		{
			name: 'sorto',
			label: 'Web · Dart',
			description: 'Visual sorting algorithm explorer — watch algorithms sort in real time with a clean, animated interface.',
			tech: ['Dart', 'Flutter Web'],
			github: 'https://github.com/Mister-Ritom/sorto',
			live: 'https://sorto.vercel.app',
			category: 'Web'
		},
		{
			name: 'lumina',
			label: 'Web · Svelte',
			description: 'A polished Svelte web application with a clean, modern interface.',
			tech: ['Svelte', 'SvelteKit'],
			github: 'https://github.com/Mister-Ritom/lumina',
			live: 'https://lumina-gules-seven.vercel.app',
			category: 'Web'
		},
		// Mobile / Native
		{
			name: 'Parla',
			label: 'Mobile · Flutter',
			description: 'End-to-end encrypted chat app built with Flutter and Firebase, leveraging native technologies for blazingly fast large file encryption.',
			tech: ['Flutter', 'Firebase', 'E2E Encryption'],
			github: 'https://github.com/Mister-Ritom/parla',
			live: null,
			category: 'Mobile'
		},
		{
			name: 'Z',
			label: 'Mobile · Flutter / RN',
			description: 'Gen-Z social media app with dynamic post containers. Originally built with Flutter and Firebase, later ported to Supabase and React Native.',
			tech: ['Flutter', 'React Native', 'Firebase', 'Supabase'],
			github: 'https://github.com/Mister-Ritom/z',
			live: null,
			category: 'Mobile'
		},
		{
			name: 'balance',
			label: 'Mobile · Flutter',
			description: 'Personal finance and balance tracking application built with Dart and Flutter.',
			tech: ['Flutter', 'Dart'],
			github: 'https://github.com/Mister-Ritom/balance',
			live: null,
			category: 'Mobile'
		},
		{
			name: 'Cool UI',
			label: 'Mobile · Flutter',
			description: 'State-driven, animation-first Flutter UI framework that derives its entire visual language from user-supplied colors.',
			tech: ['Flutter', 'Dart', 'Animation'],
			github: 'https://github.com/Mister-Ritom/cool_ui',
			live: null,
			category: 'Mobile'
		},
		{
			name: 'Gronur',
			label: 'Mobile · Flutter',
			description: 'Premium grocery application built with Flutter, focused on a visually stunning and intuitive shopping experience.',
			tech: ['Flutter', 'Dart', 'E-commerce'],
			github: 'https://github.com/Mister-Ritom/gronur',
			live: null,
			category: 'Mobile'
		},
		{
			name: 'Adda',
			label: 'Mobile · Flutter',
			description: 'Group, server, and house-based chat app that keeps friends from around the world closer — inspired by Discord.',
			tech: ['Flutter', 'Firebase'],
			github: 'https://github.com/Mister-Ritom/Adda',
			live: null,
			category: 'Mobile'
		},
		{
			name: 'Swift Chat',
			label: 'Mobile · Flutter',
			description: 'Blazingly fast cross-platform real-time chat application designed for a Discord-like experience, powered by PocketBase.',
			tech: ['Flutter', 'PocketBase', 'Riverpod'],
			github: 'https://github.com/Mister-Ritom/swift_chat',
			live: null,
			category: 'Mobile'
		},
		{
			name: 'Flutter Share',
			label: 'Mobile · Flutter',
			description: 'Cross-platform file sharing between devices on the same Wi-Fi network — no internet dependency.',
			tech: ['Flutter', 'Zeroconf', 'Networking'],
			github: 'https://github.com/Mister-Ritom/flutter_share',
			live: null,
			category: 'Mobile'
		},
		{
			name: 'Suur',
			label: 'Desktop · C++',
			description: 'High-quality desktop music player built with C++ and Flutter, utilizing vlc-dart for media playback.',
			tech: ['C++', 'Flutter', 'VLC'],
			github: 'https://github.com/Mister-Ritom/suur',
			live: null,
			category: 'Desktop'
		},
		// Web / TypeScript
		{
			name: 'purl-app',
			label: 'Web · TypeScript',
			description: 'A clean, minimal URL shortener and link management application.',
			tech: ['TypeScript'],
			github: 'https://github.com/Mister-Ritom/purl-app',
			live: null,
			category: 'Web'
		},
		{
			name: 'openPharm',
			label: 'Web · TypeScript',
			description: 'Open-source pharmacy and medication management application.',
			tech: ['TypeScript'],
			github: 'https://github.com/Mister-Ritom/openPharm',
			live: null,
			category: 'Web'
		},
		{
			name: 'quicky',
			label: 'Web · TypeScript',
			description: 'A fast, minimal TypeScript utility app for everyday developer tasks.',
			tech: ['TypeScript'],
			github: 'https://github.com/Mister-Ritom/quicky',
			live: null,
			category: 'Web'
		},
		// AI / Creative
		{
			name: 'Nebula Hand',
			label: 'Creative · JS',
			description: 'Production-ready interactive 3D website featuring a 20,000-particle system with custom physics and real-time hand tracking via MediaPipe.',
			tech: ['JavaScript', 'Three.js', 'MediaPipe'],
			github: 'https://github.com/Mister-Ritom/Nebula-Hand',
			live: null,
			category: 'Creative'
		},
		{
			name: 'Bacha',
			label: 'AI · Python',
			description: 'Multimodal recommendation system for video feeds using semantic search and 2D/3D latent space visualization.',
			tech: ['Python', 'CLIP', 'Vector Embeddings'],
			github: 'https://github.com/Mister-Ritom/bacha',
			live: null,
			category: 'AI'
		},
		// Dev Tools
		{
			name: 'flutter-watch',
			label: 'Tool · Python',
			description: 'Auto-reload utility for Flutter app development — perfect for vim, terminal workflows, and AI coding assistants.',
			tech: ['Python', 'Flutter', 'Developer Tool'],
			github: 'https://github.com/Mister-Ritom/flutter-watch',
			live: null,
			category: 'Tool'
		},
		// Systems
		{
			name: 'edu_shelv',
			label: 'Desktop · C++',
			description: 'An e-book shelf and education resource management application written in C++.',
			tech: ['C++'],
			github: 'https://github.com/Mister-Ritom/edu_shelv',
			live: null,
			category: 'Desktop'
		},
		{
			name: 'Ananta Client',
			label: 'Systems · Kotlin / Java',
			description: 'Advanced utility client for Minecraft anarchy servers. The most starred repo on the profile — 8 ⭐, 3 forks.',
			tech: ['Kotlin', 'Java', 'Minecraft Forge'],
			github: 'https://github.com/Mister-Ritom/Ananta-Client',
			live: null,
			category: 'Systems'
		},
		{
			name: 'Java Minecraft',
			label: 'Systems · Java',
			description: 'Voxel engine sandbox created in Java demonstrating Minecraft-style rendering and physics from scratch.',
			tech: ['Java', 'OpenGL', 'Physics'],
			github: 'https://github.com/Mister-Ritom/java-minecraft',
			live: null,
			category: 'Systems'
		}
	];

	const categories = ['All', 'Web', 'Mobile', 'Desktop', 'Creative', 'AI', 'Tool', 'Systems'];
	let activeCategory = 'All';

	$: filtered = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory);
</script>

<svelte:head>
	<title>Projects — Ritom Ghosh</title>
	<meta name="description" content="All 22+ projects by Ritom Ghosh — mobile apps, web platforms, AI tools, and creative tech." />
</svelte:head>

<div class="min-h-screen pt-28 pb-24 px-6 bg-[#F4F4F2]">
	<!-- Header -->
	<div class="max-w-7xl mx-auto mb-16 relative overflow-hidden">
		<span class="watermark font-display font-bold absolute -left-4 top-1/2 -translate-y-1/2 select-none pointer-events-none text-[#1E1E1E]/[0.04] leading-none" style="font-size: clamp(6rem, 18vw, 16rem);">
			Projects
		</span>
		<p class="eyebrow relative z-10">All work</p>
		<h1 class="font-display font-bold text-[#1E1E1E] relative z-10" style="font-size: clamp(3rem, 7vw, 6rem); letter-spacing: -0.04em; line-height: 1;">
			Projects
		</h1>
		<p class="mt-4 text-[#6B6B6B] text-base max-w-lg relative z-10">
			{projects.length} public repositories across mobile, web, AI, and systems engineering.
		</p>
	</div>

	<!-- Category filter -->
	<div class="max-w-7xl mx-auto mb-10">
		<div class="flex flex-wrap gap-2">
			{#each categories as cat}
				<button
					class="filter-btn {activeCategory === cat ? 'filter-btn--active' : ''}"
					on:click={() => (activeCategory = cat)}
				>
					{cat}
				</button>
			{/each}
		</div>
	</div>

	<!-- Grid -->
	<div class="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each filtered as project}
			<div class="proj-card group">
				<div class="flex items-start justify-between mb-4">
					<span class="proj-cat-badge">{project.label}</span>
					<div class="flex gap-2">
						<a href={project.github} target="_blank" rel="noopener noreferrer" class="proj-icon-btn" aria-label="GitHub">
							<Github size={15} strokeWidth={1.8} />
						</a>
						{#if project.live}
							<a href={project.live} target="_blank" rel="noopener noreferrer" class="proj-icon-btn proj-icon-btn--live" aria-label="Live site">
								<ExternalLink size={15} strokeWidth={1.8} />
							</a>
						{/if}
					</div>
				</div>

				<h2 class="font-display font-bold text-xl text-[#1E1E1E] mb-2 group-hover:opacity-70 transition-opacity">
					{project.name}
				</h2>

				<p class="text-sm text-[#6B6B6B] leading-relaxed mb-6 flex-grow">
					{project.description}
				</p>

				<div class="flex flex-wrap gap-1.5 mt-auto">
					{#each project.tech as tag}
						<span class="tech-tag">{tag}</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
.eyebrow {
	font-size: 0.7rem;
	text-transform: uppercase;
	letter-spacing: 0.2em;
	color: #6B6B6B;
	font-weight: 600;
	margin-bottom: 0.5rem;
}

.filter-btn {
	padding: 0.4rem 1rem;
	border-radius: 999px;
	font-size: 0.75rem;
	font-weight: 600;
	letter-spacing: 0.04em;
	border: 1.5px solid rgba(0,0,0,0.12);
	background: transparent;
	color: #6B6B6B;
	cursor: pointer;
	transition: all 0.2s;
	font-family: 'Space Grotesk', sans-serif;
}
.filter-btn:hover { border-color: #1E1E1E; color: #1E1E1E; }
.filter-btn--active { background: #1E1E1E; color: white; border-color: #1E1E1E; }

.proj-card {
	background: #FFFFFF;
	border-radius: 20px;
	padding: 1.75rem;
	border: 1px solid rgba(0,0,0,0.06);
	display: flex;
	flex-direction: column;
	transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.proj-card:hover {
	transform: translateY(-4px);
	box-shadow: 0 12px 32px rgba(0,0,0,0.07);
}

.proj-cat-badge {
	font-size: 0.65rem;
	font-weight: 600;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: #6B6B6B;
	font-family: 'Space Grotesk', sans-serif;
}
.proj-icon-btn {
	width: 30px;
	height: 30px;
	border-radius: 8px;
	background: #F0F0EE;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #6B6B6B;
	transition: background 0.2s, color 0.2s;
}
.proj-icon-btn:hover { background: #1E1E1E; color: white; }
.proj-icon-btn--live:hover { background: #1E1E1E; color: white; }

.tech-tag {
	padding: 0.2rem 0.6rem;
	border-radius: 999px;
	background: #F0F0EE;
	font-size: 0.65rem;
	font-weight: 600;
	letter-spacing: 0.05em;
	color: #6B6B6B;
	text-transform: uppercase;
}
</style>
