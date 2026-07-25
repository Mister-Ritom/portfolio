<script lang="ts">
	const posts = [
		{
			title: 'Building an End-to-End Encrypted Chat App with Flutter & Firebase',
			date: 'June 12, 2026',
			excerpt: 'A deep-dive into how I built Parla — handling native-level encryption, ephemeral storage, and achieving blazingly fast large file transfers without compromising privacy.',
			tags: ['Flutter', 'Firebase', 'Security'],
			readTime: '8 min read',
			cover: 'post-1'
		},
		{
			title: 'Cross-Framework Migration: From Flutter/Firebase to React Native/Supabase',
			date: 'May 28, 2026',
			excerpt: 'What I learned migrating the Z social media app across two frameworks and two backends. The tradeoffs, the surprises, and what I\'d do differently.',
			tags: ['React Native', 'Flutter', 'Supabase'],
			readTime: '11 min read',
			cover: 'post-2'
		},
		{
			title: 'Masonry Grids in the Browser — Lessons from Building Indie',
			date: 'April 15, 2026',
			excerpt: 'CSS Grid vs. JavaScript masonry — why the native approach still falls short and how I solved it for Indie with a clean TypeScript implementation.',
			tags: ['TypeScript', 'CSS', 'Performance'],
			readTime: '6 min read',
			cover: 'post-3'
		},
		{
			title: 'Why I Built a Flutter Hot-Reload Tool for Terminal Developers',
			date: 'March 3, 2026',
			excerpt: "flutter-watch: scratching my own itch. Using vim and AI coding assistants means the official Flutter hot-reload doesn't always cooperate. Here's my 50-line fix.",
			tags: ['Flutter', 'Developer Tools', 'Python'],
			readTime: '4 min read',
			cover: 'post-4'
		}
	];

	const coverColors = [
		{ bg: '#1E1E1E', text: '#F0F0EE' },
		{ bg: '#6B6B6B', text: '#FFFFFF' },
		{ bg: '#D8D8D5', text: '#1E1E1E' },
		{ bg: '#E8E8E6', text: '#1E1E1E' }
	];
</script>

<svelte:head>
	<title>Blog — Ritom Ghosh</title>
	<meta name="description" content="Writings by Ritom Ghosh on mobile development, web engineering, and creative software." />
</svelte:head>

<div class="min-h-screen pt-28 pb-24 px-6 bg-[#F4F4F2]">
	<!-- Header -->
	<div class="max-w-7xl mx-auto mb-16 relative overflow-hidden">
		<span class="watermark font-display font-bold absolute -left-4 top-1/2 -translate-y-1/2 select-none pointer-events-none text-[#1E1E1E]/[0.04] leading-none" style="font-size: clamp(6rem, 18vw, 16rem);">
			Blog
		</span>
		<p class="eyebrow relative z-10">Writings</p>
		<h1 class="font-display font-bold text-[#1E1E1E] relative z-10" style="font-size: clamp(3rem, 7vw, 6rem); letter-spacing: -0.04em; line-height: 1;">
			Blog
		</h1>
		<p class="mt-4 text-[#6B6B6B] text-base max-w-lg relative z-10">
			Thoughts on mobile development, web engineering, and building software from first principles. Coming soon — content is in draft.
		</p>
	</div>

	<!-- Post grid -->
	<div class="max-w-7xl mx-auto grid sm:grid-cols-2 gap-6">
		{#each posts as post, i}
			<article class="blog-card group">
				<!-- Cover -->
				<div class="blog-cover" style="background: {coverColors[i].bg}; color: {coverColors[i].text};">
					<div class="cover-inner">
						<span class="cover-tag">{post.tags[0]}</span>
						<p class="cover-title font-display">{post.title}</p>
					</div>
					<div class="coming-soon-badge">Draft</div>
				</div>

				<!-- Body -->
				<div class="blog-body">
					<div class="flex items-center gap-3 mb-3">
						<span class="blog-date">{post.date}</span>
						<span class="blog-dot">·</span>
						<span class="blog-read-time">{post.readTime}</span>
					</div>

					<h2 class="blog-title font-display">{post.title}</h2>
					<p class="blog-excerpt">{post.excerpt}</p>

					<div class="flex flex-wrap gap-2 mt-5">
						{#each post.tags as tag}
							<span class="blog-tag">{tag}</span>
						{/each}
					</div>

					<div class="mt-6 pt-5 border-t border-black/06">
						<span class="blog-read-link group-hover:gap-3 transition-all">
							Coming soon
							<span class="opacity-40">·</span>
						</span>
					</div>
				</div>
			</article>
		{/each}
	</div>

	<!-- CTA -->
	<div class="max-w-7xl mx-auto mt-20 bg-[#1E1E1E] rounded-3xl p-10 md:p-16 text-center">
		<p class="text-white/40 text-xs tracking-widest uppercase mb-3">Subscribe</p>
		<h2 class="font-display font-bold text-white text-3xl mb-4">Get notified when I publish</h2>
		<p class="text-white/50 text-sm mb-8 max-w-md mx-auto">I'll send an email when new posts go live. No spam, ever.</p>
		<a href="mailto:ritomghosh856@gmail.com?subject=Blog%20subscription" class="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#1E1E1E] font-semibold font-display text-sm hover:bg-[#F0F0EE] transition-colors">
			Notify me →
		</a>
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

.blog-card {
	background: #FFFFFF;
	border-radius: 20px;
	border: 1px solid rgba(0,0,0,0.06);
	overflow: hidden;
	display: flex;
	flex-direction: column;
	transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.blog-card:hover {
	transform: translateY(-4px);
	box-shadow: 0 16px 40px rgba(0,0,0,0.08);
}

.blog-cover {
	position: relative;
	height: 200px;
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.cover-inner { display: flex; flex-direction: column; gap: 0.75rem; }
.cover-tag {
	font-size: 0.6rem;
	font-weight: 700;
	letter-spacing: 0.2em;
	text-transform: uppercase;
	opacity: 0.5;
	font-family: 'Space Grotesk', sans-serif;
}
.cover-title {
	font-size: 1rem;
	font-weight: 700;
	line-height: 1.3;
	letter-spacing: -0.02em;
	opacity: 0.85;
	max-width: 80%;
}
.coming-soon-badge {
	position: absolute;
	top: 1rem;
	right: 1rem;
	padding: 0.2rem 0.6rem;
	border-radius: 999px;
	background: rgba(255,255,255,0.15);
	font-size: 0.6rem;
	font-weight: 700;
	letter-spacing: 0.1em;
	text-transform: uppercase;
}

.blog-body { padding: 1.5rem; flex: 1; display: flex; flex-direction: column; }
.blog-date, .blog-dot, .blog-read-time {
	font-size: 0.7rem;
	color: #6B6B6B;
	font-weight: 500;
}
.blog-title {
	font-size: 1.05rem;
	font-weight: 700;
	color: #1E1E1E;
	letter-spacing: -0.02em;
	line-height: 1.3;
	margin-bottom: 0.75rem;
}
.blog-excerpt {
	font-size: 0.85rem;
	color: #6B6B6B;
	line-height: 1.65;
}
.blog-tag {
	padding: 0.2rem 0.6rem;
	border-radius: 999px;
	background: #F0F0EE;
	font-size: 0.65rem;
	font-weight: 600;
	letter-spacing: 0.05em;
	color: #6B6B6B;
	text-transform: uppercase;
}
.blog-read-link {
	font-size: 0.75rem;
	font-weight: 600;
	color: #6B6B6B;
	font-family: 'Space Grotesk', sans-serif;
	display: flex;
	align-items: center;
	gap: 2px;
}
</style>
