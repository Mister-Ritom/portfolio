<script lang="ts">
	import { onMount } from 'svelte';
	import { Github, Linkedin, Globe, FileText, Mail, ExternalLink, ArrowLeft } from 'lucide-svelte';
	import { gsap } from 'gsap';

	const links = [
		{
			name: 'GitHub',
			url: 'https://github.com/ritomghosh',
			icon: Github,
			color: 'hover:text-white hover:bg-white/10'
		},
		{
			name: 'LinkedIn',
			url: 'https://linkedin.com/in/ritomghosh',
			icon: Linkedin,
			color: 'hover:text-blue-400 hover:bg-blue-400/10'
		},
		{
			name: 'Portfolio',
			url: '/',
			icon: Globe,
			color: 'hover:text-purple-400 hover:bg-purple-400/10'
		},
		{
			name: 'Resume',
			url: '/resume.pdf',
			icon: FileText,
			color: 'hover:text-green-400 hover:bg-green-400/10'
		},
		{
			name: 'Email',
			url: 'mailto:ritom@example.com',
			icon: Mail,
			color: 'hover:text-red-400 hover:bg-red-400/10'
		}
	];

	let container: HTMLElement;
	let cards: HTMLElement[] = [];

	onMount(() => {
		const tl = gsap.timeline();
		
		tl.from('.profile-section', {
			y: 30,
			opacity: 0,
			duration: 0.8,
			ease: 'power3.out'
		});

		tl.from(cards, {
			y: 20,
			opacity: 0,
			duration: 0.6,
			stagger: 0.1,
			ease: 'power2.out'
		}, '-=0.4');

		tl.from('.footer', {
			opacity: 0,
			duration: 1,
			ease: 'power2.out'
		}, '-=0.5');
	});
</script>

<div bind:this={container} class="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center px-6 py-20 selection:bg-white/20">
	<div class="fixed inset-0 pointer-events-none overflow-hidden">
		<div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full"></div>
		<div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full"></div>
	</div>

	<a href="/" class="fixed top-8 left-8 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all group z-50">
		<ArrowLeft class="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
	</a>

	<div class="max-w-xl w-full relative z-10">
		<!-- Profile Section -->
		<div class="text-center mb-16 profile-section">
			<div class="relative w-32 h-32 mx-auto mb-8">
				<div class="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
				<div class="relative w-full h-full bg-[#111] rounded-full border border-white/10 flex items-center justify-center text-4xl font-light tracking-wider">
					RG
				</div>
			</div>
			<h1 class="text-5xl font-bold mb-4 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">Ritom Ghosh</h1>
			<p class="text-lg text-gray-400 font-light tracking-wide italic">"Crafting digital experiences with precision."</p>
		</div>

		<!-- Links -->
		<div class="space-y-4">
			{#each links as link, i}
				<a
					href={link.url}
					target={link.url.startsWith('http') ? '_blank' : '_self'}
					rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
					bind:this={cards[i]}
					class="group block w-full p-5 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-white/20 backdrop-blur-md transition-[background-color,border-color] duration-300 {link.color}"
				>
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-5">
							<div class="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform duration-300">
								<svelte:component this={link.icon} class="w-6 h-6" strokeWidth={1.5} />
							</div>
							<span class="text-xl font-medium tracking-tight">{link.name}</span>
						</div>
						<ExternalLink class="w-5 h-5 opacity-0 group-hover:opacity-40 -translate-x-2 group-hover:translate-x-0 transition-[opacity,transform] duration-300" />
					</div>
				</a>
			{/each}
		</div>

		<!-- Footer -->
		<div class="text-center mt-20 footer">
			<p class="text-gray-600 text-sm font-light tracking-widest uppercase">© 2026 • Designed for Impact</p>
		</div>
	</div>
</div>

<style>
	:global(body) {
		background: #050505;
	}
</style>
