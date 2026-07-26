<script lang="ts">
	const featuredProjects = [
		{
			name: 'Indie',
			label: 'Pinterest-Clone',
			description: 'Masonry grid layout app with smooth animations and strong UI/UX design. Built with TypeScript and React.',
			tech: ['TypeScript', 'React', 'Masonry'],
			github: 'https://github.com/Mister-Ritom/indie',
			live: 'https://indieapp.vercel.app'
		},
		{
			name: 'Parla',
			label: 'Encrypted Chat',
			description: 'End-to-end encrypted chat app built with Flutter and Firebase, leveraging native technologies for blazingly fast large file encryption.',
			tech: ['Flutter', 'Firebase', 'E2E Encryption'],
			github: 'https://github.com/Mister-Ritom/parla',
			live: null
		},
		{
			name: 'Nebula Hand',
			label: 'AI + Creative Tech',
			description: 'Production-ready interactive 3D website with a 20,000-particle system with custom physics and real-time hand tracking via MediaPipe.',
			tech: ['JavaScript', 'Three.js', 'MediaPipe'],
			github: 'https://github.com/Mister-Ritom/Nebula-Hand',
			live: null
		}
	];

	const skillGroups = [
		{
			title: 'Mobile & App',
			color: 'dark',
			skills: ['Flutter', 'React Native', 'Dart', 'Mobile Dev', 'OOP', 'Feature Dev']
		},
		{
			title: 'Backend & Web',
			color: 'mid',
			skills: ['Full-Stack', 'REST APIs', 'SQL', 'Firebase', 'Supabase', 'SvelteKit']
		},
		{
			title: 'Engineering',
			color: 'light',
			skills: ['App Architecture', 'Git Workflow', 'Agile', 'Version Control', 'UX Design', 'Debugging']
		}
	];
</script>


<!-- ══════════════════════════════════════════════════════════
     HERO SECTION
══════════════════════════════════════════════════════════ -->
<section class="hero-section relative w-full pt-20 overflow-hidden bg-[#F0F0EE]">
	<div class="hero-inner max-w-7xl mx-auto px-6 h-full flex flex-col md:flex-row">

		<!-- Left column -->
		<div class="hero-left relative flex flex-col justify-between py-10 md:py-16 md:w-1/2 z-10">

			<!-- Rotated vertical label -->
			<div class="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 origin-left hidden lg:block">
				<span
					class="text-[10px] font-semibold tracking-[0.35em] uppercase text-[#6B6B6B] whitespace-nowrap ml-6"
				>
					Software Developer
				</span>
			</div>

			<!-- Stats row -->
			<div class="flex gap-8 md:gap-12 pl-6 lg:pl-16">
				<div class="stat-callout">
					<span class="stat-number font-display">+20</span>
					<span class="stat-label">Projects shipped</span>
				</div>
				<div class="stat-callout">
					<span class="stat-number font-display">+5</span>
					<span class="stat-label">Frameworks used</span>
				</div>
			</div>

			<!-- Main headline -->
			<div class="pl-6 lg:pl-16 mt-8 md:mt-auto mb-4">
				<h1 class="hero-headline font-display font-bold leading-none tracking-tight text-[#1E1E1E]">
					Hello
				</h1>
				<p class="hero-tagline font-display text-[#1E1E1E]/75 mt-4">
					— It's Ritom, a builder & developer
				</p>
			</div>

			<!-- Scroll cue -->
			<div class="flex items-end justify-between pl-6 lg:pl-16 pb-2">
				<a href="/#about" class="scroll-cue group flex items-center gap-2 text-xs text-[#6B6B6B] hover:text-[#1E1E1E] transition-colors">
					<span>Scroll down</span>
					<span class="group-hover:translate-y-0.5 transition-transform duration-200 inline-block">↓</span>
				</a>
				<span class="text-[10px] tracking-widest text-[#6B6B6B] font-medium">2026</span>
			</div>
		</div>

		<!-- Right column — photo -->
		<div class="hero-photo-col relative md:w-1/2 flex items-end justify-center md:justify-end order-first md:order-last overflow-hidden">
			<div class="photo-frame relative">
				<img
					src="/assets/my_image.png"
					alt="Ritom Ghosh"
					class="hero-photo object-contain object-bottom"
				/>
				<!-- Subtle background card for the photo -->
				<div class="photo-bg-card absolute inset-0 -z-10 rounded-tl-[40px] rounded-tr-[40px] bg-[#D8D8D5]"></div>
			</div>
		</div>
	</div>
</section>

<!-- ══════════════════════════════════════════════════════════
     ABOUT SECTION
══════════════════════════════════════════════════════════ -->
<section id="about" class="relative py-24 px-6 overflow-hidden bg-[#F4F4F2]">
	<!-- Giant watermark -->
	<span class="watermark-text select-none pointer-events-none font-display font-bold absolute -left-6 top-1/2 -translate-y-1/2 text-[#1E1E1E]/[0.04] leading-none">
		About
	</span>

	<div class="max-w-7xl mx-auto">
		<div class="section-header mb-12">
			<p class="eyebrow">Who I am</p>
			<h2 class="section-title font-display">About</h2>
		</div>

		<div class="grid md:grid-cols-2 gap-8">
			<!-- Summary card (dark) -->
			<div class="info-card info-card--dark">
				<p class="card-label">Background</p>
				<p class="card-value text-white/85 text-base leading-relaxed font-body">
					Innovative software developer with several years of hands-on experience designing and testing applications. Started coding at age 14 out of pure curiosity — and never stopped.
				</p>
			</div>

			<!-- Philosophy card (light) -->
			<div class="info-card info-card--light">
				<p class="card-label text-[#6B6B6B]">Approach</p>
				<p class="card-value text-[#1E1E1E] text-base leading-relaxed font-body">
					Focused on systems over shortcuts, maintaining a true engineering mindset. Well-versed in agile methodologies and dedicated to developing creative solutions that meet real business goals.
				</p>
			</div>

			<!-- Experience card -->
			<div class="info-card info-card--mid">
				<p class="card-label text-white/60">Experience</p>
				<div class="space-y-3 mt-2">
					<div>
						<p class="text-white font-display font-semibold text-base">Software Developer</p>
						<p class="text-white/60 text-sm">Fiverr · 01/2026 – Present</p>
					</div>
					<div>
						<p class="text-white font-display font-semibold text-base">Software Engineer</p>
						<p class="text-white/60 text-sm">Self Taught · 01/2022 – Present</p>
					</div>
				</div>
			</div>

			<!-- Education card -->
			<div class="info-card info-card--white">
				<p class="card-label text-[#6B6B6B]">Education</p>
				<div class="space-y-3 mt-2">
					<div>
						<p class="font-display font-semibold text-[#1E1E1E] text-base">B.Tech — Computer Science</p>
						<p class="text-[#6B6B6B] text-sm">Brainware University · Expected 01/2030</p>
					</div>
					<div>
						<p class="font-display font-semibold text-[#1E1E1E] text-base">High School Certificate</p>
						<p class="text-[#6B6B6B] text-sm">Maldanga R.M. Institute · 06/2026 · Top 10%</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ══════════════════════════════════════════════════════════
     SKILLS SECTION
══════════════════════════════════════════════════════════ -->
<section class="relative py-24 px-6 overflow-hidden bg-[#EBEBEA]">
	<span class="watermark-text select-none pointer-events-none font-display font-bold absolute -right-6 top-1/2 -translate-y-1/2 text-[#1E1E1E]/[0.04] leading-none">
		Skills
	</span>

	<div class="max-w-7xl mx-auto">
		<div class="section-header mb-12">
			<p class="eyebrow">What I work with</p>
			<h2 class="section-title font-display">Skills</h2>
		</div>

		<div class="grid md:grid-cols-3 gap-6">
			{#each skillGroups as group}
				<div class="skill-card skill-card--{group.color}">
					<p class="skill-card-title font-display font-bold text-xl mb-6">
						{group.title}
					</p>
					<ul class="space-y-3">
						{#each group.skills as skill}
							<li class="skill-item">
								<span class="skill-dot"></span>
								<span class="skill-name text-sm font-medium">{skill}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ══════════════════════════════════════════════════════════
     PROJECTS PREVIEW
══════════════════════════════════════════════════════════ -->
<section class="relative py-24 px-6 overflow-hidden bg-[#F4F4F2]">
	<span class="watermark-text select-none pointer-events-none font-display font-bold absolute -left-6 top-1/2 -translate-y-1/2 text-[#1E1E1E]/[0.04] leading-none">
		Projects
	</span>

	<div class="max-w-7xl mx-auto">
		<div class="section-header mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
			<div>
				<p class="eyebrow">Selected work</p>
				<h2 class="section-title font-display">Projects</h2>
			</div>
			<a href="/projects" class="inline-flex items-center gap-2 text-sm font-medium text-[#1E1E1E]/60 hover:text-[#1E1E1E] transition-colors group">
				View all 22 projects
				<span class="group-hover:translate-x-1 transition-transform">→</span>
			</a>
		</div>

		<div class="grid md:grid-cols-3 gap-6">
			{#each featuredProjects as project}
				<div class="project-card group">
					<div class="project-card-top">
						<span class="project-label font-display text-xs uppercase tracking-widest font-semibold opacity-50">
							{project.label}
						</span>
					</div>

					<h3 class="project-name font-display font-bold text-2xl mt-3 mb-3 group-hover:opacity-70 transition-opacity">
						{project.name}
					</h3>

					<p class="project-desc text-sm leading-relaxed opacity-60 flex-grow mb-6">
						{project.description}
					</p>

					<div class="flex flex-wrap gap-2 mb-6">
						{#each project.tech as tag}
							<span class="tech-tag">{tag}</span>
						{/each}
					</div>

					<div class="flex items-center gap-3 mt-auto">
						<a href={project.github} target="_blank" rel="noopener noreferrer" class="project-link">
							GitHub →
						</a>
						{#if project.live}
							<a href={project.live} target="_blank" rel="noopener noreferrer" class="project-link project-link--live">
								Live ↗
							</a>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ══════════════════════════════════════════════════════════
     CONTACT CTA
══════════════════════════════════════════════════════════ -->
<section class="relative py-24 px-6 bg-[#1E1E1E] overflow-hidden">
	<!-- Faint watermark -->
	<span class="select-none pointer-events-none font-display font-bold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.03] leading-none whitespace-nowrap" style="font-size: clamp(5rem, 15vw, 14rem);">
		Hello
	</span>

	<div class="max-w-4xl mx-auto text-center relative z-10">
		<p class="text-white/40 text-sm tracking-widest uppercase mb-4 font-medium">Let's work together</p>
		<h2 class="font-display font-bold text-white leading-tight mb-8" style="font-size: clamp(2.5rem, 6vw, 5rem);">
			Got a project in mind?
		</h2>
		<p class="text-white/50 text-lg max-w-lg mx-auto mb-10 leading-relaxed">
			Currently open to freelance opportunities and full-time positions. I'll reply within 24 hours.
		</p>
		<div class="flex flex-wrap gap-4 justify-center">
			<a href="/contact" class="px-8 py-4 rounded-full bg-white text-[#1E1E1E] font-semibold font-display hover:bg-[#F0F0EE] transition-colors">
				Get In Touch
			</a>
			<a href="/projects" class="px-8 py-4 rounded-full border border-white/20 text-white font-semibold font-display hover:border-white/40 transition-colors">
				See My Work
			</a>
		</div>
	</div>
</section>

<!-- ── Footer ─────────────────────────────────────────────── -->
<footer class="bg-[#1E1E1E] border-t border-white/10 px-6 py-8">
	<div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
		<p class="text-white/30 text-xs tracking-widest uppercase">
			© 2026 Ritom Ghosh · Built with SvelteKit
		</p>
		<div class="flex gap-6">
			<a href="https://github.com/Mister-Ritom" target="_blank" rel="noopener" class="text-white/30 hover:text-white/70 text-xs transition-colors">GitHub</a>
			<a href="https://linkedin.com/in/ritom7" target="_blank" rel="noopener" class="text-white/30 hover:text-white/70 text-xs transition-colors">LinkedIn</a>
			<a href="mailto:ritomghosh856@gmail.com" class="text-white/30 hover:text-white/70 text-xs transition-colors">Email</a>
		</div>
	</div>
</footer>

<style>
/* ── Hero ─────────────────────────── */
.hero-section { min-height: 100svh; }
.hero-inner { min-height: calc(100svh - 5rem); }

@media (max-width: 767px) {
	.hero-section { min-height: unset; padding-bottom: 3rem; }
	.hero-inner { min-height: unset; }
}

.stat-callout { display: flex; flex-direction: column; }
.stat-number {
	font-size: clamp(2rem, 4vw, 2.75rem);
	font-weight: 700;
	letter-spacing: -0.02em;
	line-height: 1;
	color: #1E1E1E;
}
.stat-label {
	font-size: 0.7rem;
	text-transform: uppercase;
	letter-spacing: 0.12em;
	color: #6B6B6B;
	margin-top: 0.25rem;
	font-weight: 500;
}

.hero-headline {
	font-size: clamp(6rem, 14vw, 12rem);
	letter-spacing: -0.04em;
	line-height: 0.9;
}
.hero-tagline {
	font-size: clamp(0.95rem, 1.5vw, 1.2rem);
	letter-spacing: -0.01em;
}

/* Photo column */
.hero-photo-col {
	height: 72vw;
	max-height: 420px;
}
@media (min-width: 768px) {
	.hero-photo-col {
		height: auto;
		max-height: none;
	}
}
.photo-frame {
	position: relative;
	width: 100%;
	max-width: 460px;
	height: 100%;
	display: flex;
	align-items: flex-end;
}
.hero-photo {
	width: 100%;
	height: 100%;
	max-height: calc(100svh - 5rem);
	object-fit: contain;
	object-position: bottom center;
	filter: drop-shadow(0 20px 40px rgba(0,0,0,0.12));
}
@media (max-width: 767px) {
	.hero-photo {
		max-height: 100%;
		width: auto;
		max-width: 80%;
		margin: 0 auto;
	}
}
.photo-bg-card {
	bottom: 0;
	top: 20%;
	border-radius: 40px 40px 0 0;
}

/* ── Section helpers ──────────────── */
.watermark-text { font-size: clamp(8rem, 20vw, 20rem); }

.eyebrow {
	font-size: 0.7rem;
	text-transform: uppercase;
	letter-spacing: 0.2em;
	color: #6B6B6B;
	font-weight: 600;
	margin-bottom: 0.5rem;
}
.section-title {
	font-size: clamp(2.5rem, 5vw, 4.5rem);
	font-weight: 700;
	letter-spacing: -0.03em;
	line-height: 1;
	color: #1E1E1E;
}

/* ── Info Cards ───────────────────── */
.info-card {
	border-radius: 20px;
	padding: 2rem;
	display: flex;
	flex-direction: column;
}
.info-card--dark  { background: #1E1E1E; color: white; }
.info-card--mid   { background: #6B6B6B; color: white; }
.info-card--light { background: #E8E8E6; color: #1E1E1E; }
.info-card--white { background: #FFFFFF; color: #1E1E1E; border: 1px solid rgba(0,0,0,0.06); }

.card-label {
	font-size: 0.65rem;
	text-transform: uppercase;
	letter-spacing: 0.2em;
	font-weight: 600;
	margin-bottom: 0.75rem;
	color: inherit;
	opacity: 0.4;
}
.card-value { font-size: 0.95rem; }
.info-card--dark .card-label  { color: white; }

/* ── Skill Cards ──────────────────── */
.skill-card {
	border-radius: 20px;
	padding: 2rem;
}
.skill-card--dark  { background: #1E1E1E; color: white; }
.skill-card--mid   { background: #6B6B6B; color: white; }
.skill-card--light { background: #E8E8E6; color: #1E1E1E; }

.skill-item {
	display: flex;
	align-items: center;
	gap: 0.75rem;
}
.skill-dot {
	width: 5px;
	height: 5px;
	border-radius: 50%;
	flex-shrink: 0;
}
.skill-card--dark  .skill-dot { background: rgba(255,255,255,0.4); }
.skill-card--mid   .skill-dot { background: rgba(255,255,255,0.5); }
.skill-card--light .skill-dot { background: rgba(0,0,0,0.25); }
.skill-card--dark  .skill-card-title { color: white; }
.skill-card--mid   .skill-card-title { color: white; }
.skill-card--light .skill-card-title { color: #1E1E1E; }
.skill-card--dark  .skill-name { color: rgba(255,255,255,0.75); }
.skill-card--mid   .skill-name { color: rgba(255,255,255,0.80); }
.skill-card--light .skill-name { color: rgba(0,0,0,0.65); }

/* ── Project Cards ────────────────── */
.project-card {
	background: #FFFFFF;
	border-radius: 20px;
	padding: 2rem;
	border: 1px solid rgba(0,0,0,0.06);
	display: flex;
	flex-direction: column;
	transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.project-card:hover {
	transform: translateY(-4px);
	box-shadow: 0 16px 40px rgba(0,0,0,0.08);
}
.project-label { color: #6B6B6B; }
.project-name  { color: #1E1E1E; }
.project-desc  { color: #1E1E1E; }

.tech-tag {
	padding: 0.25rem 0.75rem;
	border-radius: 999px;
	background: #F0F0EE;
	font-size: 0.7rem;
	font-weight: 600;
	letter-spacing: 0.05em;
	color: #6B6B6B;
	text-transform: uppercase;
}
.project-link {
	font-size: 0.8rem;
	font-weight: 600;
	color: #1E1E1E;
	border-bottom: 1px solid rgba(0,0,0,0.15);
	padding-bottom: 1px;
	transition: border-color 0.2s;
	font-family: 'Space Grotesk', sans-serif;
}
.project-link:hover { border-color: #1E1E1E; }
.project-link--live { color: #1E1E1E; }
</style>
