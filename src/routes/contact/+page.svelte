<script lang="ts">
	import { enhance } from '$app/forms';
	import { Github, Linkedin, Mail, Instagram, Send } from 'lucide-svelte';

	export let form: { success?: boolean; error?: boolean; message?: string } | null = null;

	let formData = { name: '', email: '', message: '' };
	let isSubmitting = false;

	const socials = [
		{
			icon: Github,
			label: 'GitHub',
			sub: '@Mister-Ritom',
			href: 'https://github.com/Mister-Ritom',
			color: '#1E1E1E'
		},
		{
			icon: Linkedin,
			label: 'LinkedIn',
			sub: 'ritom7',
			href: 'https://linkedin.com/in/ritom7',
			color: '#0A66C2'
		},
		{
			icon: Mail,
			label: 'Email',
			sub: 'ritomghosh856@gmail.com',
			href: 'mailto:ritomghosh856@gmail.com',
			color: '#EA4335'
		},
		{
			icon: Instagram,
			label: 'Instagram',
			sub: '@ritomg1',
			href: 'https://instagram.com/ritomg1',
			color: '#E1306C'
		}
	];
</script>


<div class="min-h-screen pt-28 pb-24 px-6 bg-[#F4F4F2]">
	<div class="max-w-6xl mx-auto">

		<!-- Header -->
		<div class="mb-16 relative overflow-hidden">
			<span class="watermark font-display font-bold absolute -left-4 top-1/2 -translate-y-1/2 select-none pointer-events-none text-[#1E1E1E]/[0.04] leading-none" style="font-size: clamp(6rem, 18vw, 16rem);">
				Contact
			</span>
			<p class="eyebrow relative z-10">Let's talk</p>
			<h1 class="font-display font-bold text-[#1E1E1E] relative z-10" style="font-size: clamp(3rem, 7vw, 6rem); letter-spacing: -0.04em; line-height: 1;">
				Get In Touch
			</h1>
			<p class="mt-4 text-[#6B6B6B] text-base max-w-lg relative z-10">
				Open to freelance projects, full-time positions, and interesting collaborations. I'll reply within 24 hours.
			</p>
		</div>

		<!-- Two-column layout -->
		<div class="grid lg:grid-cols-5 gap-8 items-start">

			<!-- Form (3 cols) -->
			<div class="lg:col-span-3">
				<div class="form-card">
					{#if form?.success}
						<div class="success-state">
							<div class="success-icon">✓</div>
							<h3 class="font-display font-bold text-2xl text-[#1E1E1E] mb-2">Message sent!</h3>
							<p class="text-[#6B6B6B] text-sm mb-6">Thank you for reaching out. I'll get back to you as soon as possible.</p>
							<button
								on:click={() => { form = null; formData = { name: '', email: '', message: '' }; }}
								class="btn-secondary"
							>
								Send another
							</button>
						</div>
					{:else}
						<form
							method="POST"
							use:enhance={() => {
								isSubmitting = true;
								return async ({ update }) => {
									isSubmitting = false;
									await update();
								};
							}}
							class="space-y-6"
						>
							{#if form?.error}
								<div class="error-banner">
									{form.message || 'Something went wrong. Please try again.'}
								</div>
							{/if}

							<div class="form-field">
								<label for="name" class="field-label">Name</label>
								<input
									id="name"
									name="name"
									type="text"
									bind:value={formData.name}
									required
									disabled={isSubmitting}
									placeholder="Your name"
									class="field-input"
								/>
							</div>

							<div class="form-field">
								<label for="email" class="field-label">Email</label>
								<input
									id="email"
									name="email"
									type="email"
									bind:value={formData.email}
									required
									disabled={isSubmitting}
									placeholder="your@email.com"
									class="field-input"
								/>
							</div>

							<div class="form-field">
								<label for="message" class="field-label">Message</label>
								<textarea
									id="message"
									name="message"
									bind:value={formData.message}
									required
									disabled={isSubmitting}
									rows="5"
									placeholder="Tell me about your project or idea..."
									class="field-input field-textarea"
								></textarea>
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								class="btn-submit"
							>
								{#if isSubmitting}
									<span class="spinner"></span>
									Sending...
								{:else}
									<Send size={16} strokeWidth={2} />
									Send Message
								{/if}
							</button>
						</form>
					{/if}
				</div>
			</div>

			<!-- Socials + info (2 cols) -->
			<div class="lg:col-span-2 space-y-4">
				{#each socials as s}
					<a href={s.href} target={s.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" class="social-card group">
						<div class="social-icon-wrap" style="--icon-color: {s.color}">
							<svelte:component this={s.icon} size={18} strokeWidth={1.8} />
						</div>
						<div>
							<p class="font-display font-semibold text-[#1E1E1E] text-sm">{s.label}</p>
							<p class="text-[#6B6B6B] text-xs mt-0.5">{s.sub}</p>
						</div>
						<span class="social-arrow ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-[#6B6B6B] text-sm">→</span>
					</a>
				{/each}

				<!-- Availability callout -->
				<div class="availability-card">
					<div class="avail-dot"></div>
					<div>
						<p class="font-display font-semibold text-white text-sm">Available for work</p>
						<p class="text-white/55 text-xs mt-0.5 leading-relaxed">Freelance &amp; full-time. Replies within 24h.</p>
					</div>
				</div>
			</div>
		</div>
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

/* Form card */
.form-card {
	background: #FFFFFF;
	border-radius: 20px;
	padding: 2.5rem;
	border: 1px solid rgba(0,0,0,0.06);
}

.form-field { display: flex; flex-direction: column; gap: 0.5rem; }
.field-label {
	font-size: 0.75rem;
	font-weight: 600;
	color: #6B6B6B;
	letter-spacing: 0.05em;
	text-transform: uppercase;
	font-family: 'Space Grotesk', sans-serif;
}
.field-input {
	width: 100%;
	padding: 0.875rem 1rem;
	border-radius: 12px;
	border: 1.5px solid rgba(0,0,0,0.1);
	background: #F9F9F8;
	font-size: 0.9rem;
	color: #1E1E1E;
	outline: none;
	transition: border-color 0.2s, background 0.2s;
	font-family: 'Inter', sans-serif;
}
.field-input:focus {
	border-color: #1E1E1E;
	background: #FFFFFF;
}
.field-input:disabled { opacity: 0.5; cursor: not-allowed; }
.field-input::placeholder { color: #AFAFAF; }
.field-textarea { resize: none; }

.btn-submit {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	padding: 1rem;
	border-radius: 12px;
	background: #1E1E1E;
	color: white;
	font-family: 'Space Grotesk', sans-serif;
	font-weight: 600;
	font-size: 0.9rem;
	border: none;
	cursor: pointer;
	transition: background 0.2s, transform 0.15s;
}
.btn-submit:hover:not(:disabled) { background: #333; }
.btn-submit:active:not(:disabled) { transform: scale(0.98); }
.btn-submit:disabled { opacity: 0.6; cursor: not-allowed; }

.btn-secondary {
	padding: 0.75rem 1.5rem;
	border-radius: 10px;
	background: #F0F0EE;
	color: #1E1E1E;
	font-family: 'Space Grotesk', sans-serif;
	font-weight: 600;
	font-size: 0.85rem;
	border: none;
	cursor: pointer;
	transition: background 0.2s;
}
.btn-secondary:hover { background: #E0E0DE; }

.error-banner {
	padding: 0.875rem 1rem;
	border-radius: 10px;
	background: #FEF2F2;
	border: 1px solid #FECACA;
	color: #B91C1C;
	font-size: 0.85rem;
}

.success-state {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding: 2rem 0;
}
.success-icon {
	width: 56px;
	height: 56px;
	border-radius: 50%;
	background: #F0FDF4;
	color: #16A34A;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	font-weight: 700;
	margin-bottom: 1.25rem;
}

.spinner {
	width: 16px;
	height: 16px;
	border: 2px solid rgba(255,255,255,0.3);
	border-top-color: white;
	border-radius: 50%;
	animation: spin 0.7s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* Social cards */
.social-card {
	display: flex;
	align-items: center;
	gap: 1rem;
	padding: 1.1rem 1.25rem;
	background: #FFFFFF;
	border-radius: 14px;
	border: 1px solid rgba(0,0,0,0.06);
	transition: transform 0.2s, box-shadow 0.2s;
}
.social-card:hover {
	transform: translateX(4px);
	box-shadow: 0 4px 16px rgba(0,0,0,0.06);
}
.social-icon-wrap {
	width: 36px;
	height: 36px;
	border-radius: 10px;
	background: color-mix(in srgb, var(--icon-color) 12%, transparent);
	color: var(--icon-color);
	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
}

/* Availability */
.availability-card {
	display: flex;
	align-items: center;
	gap: 1rem;
	padding: 1.1rem 1.25rem;
	background: #1E1E1E;
	border-radius: 14px;
}
.avail-dot {
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: #4ADE80;
	box-shadow: 0 0 0 3px rgba(74, 222, 128, 0.2);
	flex-shrink: 0;
	animation: pulse-dot 2s ease-in-out infinite;
}
@keyframes pulse-dot {
	0%, 100% { box-shadow: 0 0 0 3px rgba(74, 222, 128, 0.2); }
	50% { box-shadow: 0 0 0 6px rgba(74, 222, 128, 0.08); }
}
</style>
