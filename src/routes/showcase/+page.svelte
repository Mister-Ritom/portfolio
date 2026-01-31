<script lang="ts">
	import { onMount } from 'svelte';
	import { Github, ExternalLink, ArrowLeft, Code2, Layers, Cpu, MessageSquare } from 'lucide-svelte';
	import { gsap } from 'gsap';

	const projects = [
		{
			name: 'Nebula Hand',
			tech: ['JavaScript', 'Three.js', 'MediaPipe'],
			description: 'Production-ready interactive 3D website featuring a 20,000 particle system with custom physics and real-time hand tracking.',
			github: 'https://github.com/mister-ritom/Nebula-Hand',
			live: null,
			icon: Layers
		},
		{
			name: 'Bacha',
			tech: ['Python', 'CLIP', 'Vector Embeddings'],
			description: 'Multimodal recommendation system for video feeds using semantic search and 2D/3D latent space visualization.',
			github: 'https://github.com/mister-ritom/bacha',
			live: null,
			icon: Cpu
		},
		{
			name: 'Parla',
			tech: ['Flutter', 'Firebase', 'Encryption'],
			description: 'Secure, privacy-centric chat application using end-to-end encryption and ephemeral storage.',
			github: 'https://github.com/mister-ritom/parla',
			live: null,
			icon: MessageSquare
		},
		{
			name: 'Cool UI',
			tech: ['Flutter', 'Dart', 'Animation'],
			description: 'State-driven, animation-first Flutter UI framework that derives visual languages from user-supplied colors.',
			github: 'https://github.com/mister-ritom/cool_ui',
			live: null,
			icon: Layers
		},
		{
			name: 'Z',
			tech: ['Flutter', 'Dart', 'Social'],
			description: 'Private-first social utility designed for close friends and family, featuring a chronological timeline.',
			github: 'https://github.com/mister-ritom/z',
			live: null,
			icon: MessageSquare
		},
		{
			name: 'Gronur',
			tech: ['Flutter', 'Dart', 'E-commerce'],
			description: 'Premium Grocery application built with Flutter, focused on a visually stunning shopping experience.',
			github: 'https://github.com/mister-ritom/gronur',
			live: null,
			icon: Layers
		},
		{
			name: 'Flutter Share',
			tech: ['Flutter', 'Zeroconf', 'Networking'],
			description: 'Cross-platform file sharing between devices on the same Wi-Fi network without internet dependency.',
			github: 'https://github.com/mister-ritom/flutter_share',
			live: null,
			icon: Code2
		},
		{
			name: 'Suur',
			tech: ['C++', 'Flutter', 'VLC'],
			description: 'High-quality desktop music player build with C++ and Flutter, utilizing vlc-dart.',
			github: 'https://github.com/mister-ritom/suur',
			live: null,
			icon: Code2
		},
		{
			name: 'Ananta Client',
			tech: ['Kotlin', 'Java', 'Modding'],
			description: 'Advanced utility client for Minecraft focused on anarchy servers, built with Kotlin and Java.',
			github: 'https://github.com/mister-ritom/Ananta-Client',
			live: null,
			icon: Code2
		},
		{
			name: 'Java Minecraft',
			tech: ['Java', 'OpenGL', 'Physics'],
			description: 'Voxel engine sandbox created in Java demonstrating Minecraft-style rendering and physics.',
			github: 'https://github.com/mister-ritom/java-minecraft',
			live: null,
			icon: Code2
		},
		{
			name: 'Swift Chat',
			tech: ['Flutter', 'PocketBase', 'Riverpod'],
			description: 'Blazingly fast cross-platform real-time chat application designed for a Discord-like experience.',
			github: 'https://github.com/mister-ritom/swift_chat',
			live: null,
			icon: MessageSquare
		}
	];

	let projectCards: HTMLElement[] = [];

	onMount(() => {
		const tl = gsap.timeline();
		
		tl.from('.header-section', {
			y: 30,
			opacity: 0,
			duration: 0.8,
			ease: 'power3.out'
		});

		tl.from(projectCards, {
			y: 40,
			opacity: 0,
			duration: 0.8,
			stagger: 0.1,
			ease: 'power3.out'
		}, '-=0.4');
	});
</script>

<div class="min-h-screen bg-[#050505] text-white flex flex-col items-center px-6 py-32 selection:bg-white/20">
	<div class="fixed inset-0 pointer-events-none overflow-hidden">
		<div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full"></div>
		<div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 blur-[120px] rounded-full"></div>
	</div>

	<a href="/" class="fixed top-8 left-8 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all group z-50">
		<ArrowLeft class="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
	</a>

	<div class="max-w-7xl w-full relative z-10">
		<div class="header-section mb-20">
			<h1 class="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">Showcase</h1>
			<p class="text-xl text-gray-400 font-light tracking-wide italic">"Projects I've built and shipped with pride."</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each projects as project, i}
				<div
					bind:this={projectCards[i]}
					class="group relative bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-white/20 hover:bg-white/[0.04] transition-[background-color,border-color] duration-500 flex flex-col h-full"
				>
					<div class="flex items-start justify-between mb-8">
						<div class="p-4 bg-white/5 rounded-2xl group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
							<svelte:component this={project.icon} class="w-8 h-8 text-gray-300 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
						</div>
						<div class="flex gap-3">
							{#if project.github}
								<a href={project.github} target="_blank" rel="noopener noreferrer" class="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-[background-color,border-color] duration-300">
									<Github class="w-5 h-5" strokeWidth={1.5} />
								</a>
							{/if}
							{#if project.live}
								<a href={project.live} target="_blank" rel="noopener noreferrer" class="p-2.5 rounded-full bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/40 transition-[background-color,border-color] duration-300 text-blue-400">
									<ExternalLink class="w-5 h-5" strokeWidth={1.5} />
								</a>
							{/if}
						</div>
					</div>

					<h3 class="text-2xl font-bold mb-4 tracking-tight group-hover:text-blue-400 transition-colors duration-300">
						{project.name}
					</h3>

					<p class="text-gray-400 font-light leading-relaxed mb-8 flex-grow">
						{project.description}
					</p>

					<div class="flex flex-wrap gap-2 mt-auto">
						{#each project.tech as tech}
							<span class="px-3 py-1.5 bg-white/[0.05] border border-white/5 rounded-xl text-xs font-medium tracking-wide text-gray-400 group-hover:border-white/10 transition-colors duration-300">
								{tech}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	:global(body) {
		background: #050505;
	}
</style>
