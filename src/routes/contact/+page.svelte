<script lang="ts">
	import { onMount } from 'svelte';
	import { enhance } from '$app/forms';
	import { Github, Linkedin, Mail, Send, ArrowLeft, User, AtSign, MessageSquare, CheckCircle, AlertCircle } from 'lucide-svelte';
	import { gsap } from 'gsap';

	export let form;

	let formData = {
		name: '',
		email: '',
		message: ''
	};

	let formRef: HTMLElement;
	let socialCards: HTMLElement[] = [];
	let isSubmitting = false;

	onMount(() => {
		const tl = gsap.timeline();
		
		tl.from('.header-section', {
			y: 30,
			opacity: 0,
			duration: 0.8,
			ease: 'power3.out'
		});

		tl.from(formRef, {
			x: -30,
			opacity: 0,
			duration: 0.8,
			ease: 'power3.out'
		}, '-=0.4');

		tl.from(socialCards, {
			x: 30,
			opacity: 0,
			duration: 0.6,
			stagger: 0.1,
			ease: 'power2.out'
		}, '-=0.6');
	});
</script>

<div class="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center px-6 py-32 selection:bg-white/20">
	<div class="fixed inset-0 pointer-events-none overflow-hidden">
		<div class="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full"></div>
		<div class="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/5 blur-[120px] rounded-full"></div>
	</div>

	<a href="/" class="fixed top-8 left-8 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all group z-50">
		<ArrowLeft class="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
	</a>

	<div class="max-w-5xl w-full relative z-10">
		<div class="header-section mb-16">
			<h1 class="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">Get in Touch</h1>
			<p class="text-xl text-gray-400 font-light tracking-wide italic">"Let's create something amazing together."</p>
		</div>

		<div class="grid lg:grid-cols-2 gap-16 items-start">
			<!-- Contact Form -->
			<div bind:this={formRef} class="bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
				{#if form?.success}
					<div class="absolute inset-0 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center z-20 animate-in fade-in zoom-in duration-500">
						<div class="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6">
							<CheckCircle class="w-10 h-10" />
						</div>
						<h3 class="text-3xl font-bold mb-4">Message Sent!</h3>
						<p class="text-gray-400 mb-8 max-w-sm">Thank you for reaching out. I'll get back to you as soon as possible.</p>
						<button 
							on:click={() => { form = null; formData = { name: '', email: '', message: '' } }}
							class="px-8 py-3 bg-white text-black rounded-xl font-bold hover:bg-gray-200 transition-colors"
						>
							Send Another
						</button>
					</div>
				{/if}

				<form 
					method="POST" 
					use:enhance={() => {
						isSubmitting = true;
						return async ({ update }) => {
							isSubmitting = false;
							await update();
						};
					}} 
					class="space-y-8"
				>
					<div class="space-y-2">
						{#if form?.error}
							<div class="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3 text-red-400 mb-6">
								<AlertCircle class="w-5 h-5" />
								<p class="text-sm">{form.message || 'Something went wrong. Please try again.'}</p>
							</div>
						{/if}
						
						<label for="name" class="flex items-center gap-2 text-sm font-medium text-gray-400 ml-1">
							<User class="w-4 h-4" /> Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							bind:value={formData.name}
							required
							disabled={isSubmitting}
							class="w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-2xl focus:border-white/30 focus:bg-white/[0.05] outline-none transition-[background-color,border-color] duration-300 placeholder:text-gray-600 disabled:opacity-50"
							placeholder="Your name"
						/>
					</div>

					<div class="space-y-2">
						<label for="email" class="flex items-center gap-2 text-sm font-medium text-gray-400 ml-1">
							<AtSign class="w-4 h-4" /> Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							bind:value={formData.email}
							required
							disabled={isSubmitting}
							class="w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-2xl focus:border-white/30 focus:bg-white/[0.05] outline-none transition-[background-color,border-color] duration-300 placeholder:text-gray-600 disabled:opacity-50"
							placeholder="your@email.com"
						/>
					</div>

					<div class="space-y-2">
						<label for="message" class="flex items-center gap-2 text-sm font-medium text-gray-400 ml-1">
							<MessageSquare class="w-4 h-4" /> Message
						</label>
						<textarea
							id="message"
							name="message"
							bind:value={formData.message}
							required
							disabled={isSubmitting}
							rows="5"
							class="w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-2xl focus:border-white/30 focus:bg-white/[0.05] outline-none transition-[background-color,border-color] duration-300 placeholder:text-gray-600 resize-none disabled:opacity-50"
							placeholder="Tell me about your project..."
						></textarea>
					</div>

					<button
						type="submit"
						disabled={isSubmitting}
						class="group w-full py-5 bg-white text-black rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-gray-200 transition-[background-color,transform] duration-300 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
					>
						{#if isSubmitting}
							<div class="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
							Sending...
						{:else}
							<Send class="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
							Send Message
						{/if}
					</button>
				</form>
			</div>

			<!-- Interaction Details & Socials -->
			<div class="space-y-8">
				<div class="space-y-6">
					<h2 class="text-2xl font-semibold tracking-tight">Direct Connect</h2>
					<div class="space-y-4">
						<a
							href="https://github.com/mister-ritom"
							target="_blank"
							rel="noopener noreferrer"
							bind:this={socialCards[0]}
							class="flex items-center gap-5 p-5 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-white/[0.08] hover:border-white/20 group backdrop-blur-md transition-[background-color,border-color] duration-300"
						>
							<div class="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform duration-300">
								<Github class="w-6 h-6" strokeWidth={1.5} />
							</div>
							<div>
								<p class="font-medium">GitHub</p>
								<p class="text-sm text-gray-500">@mister-ritom</p>
							</div>
						</a>

						<a
							href="https://linkedin.com/in/ritom7"
							target="_blank"
							rel="noopener noreferrer"
							bind:this={socialCards[1]}
							class="flex items-center gap-5 p-5 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-white/[0.08] hover:border-white/20 group backdrop-blur-md transition-[background-color,border-color] duration-300"
						>
							<div class="p-3 bg-blue-500/10 text-blue-400 rounded-xl group-hover:scale-110 transition-transform duration-300">
								<Linkedin class="w-6 h-6" strokeWidth={1.5} />
							</div>
							<div>
								<p class="font-medium">LinkedIn</p>
								<p class="text-sm text-gray-500">ritom7</p>
							</div>
						</a>

						<a
							href="mailto:ritomghosh856@gmail.com"
							bind:this={socialCards[2]}
							class="flex items-center gap-5 p-5 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-white/[0.08] hover:border-white/20 group backdrop-blur-md transition-[background-color,border-color] duration-300"
						>
							<div class="p-3 bg-red-500/10 text-red-400 rounded-xl group-hover:scale-110 transition-transform duration-300">
								<Mail class="w-6 h-6" strokeWidth={1.5} />
							</div>
							<div>
								<p class="font-medium">Email</p>
								<p class="text-sm text-gray-500">ritomghosh856@gmail.com</p>
							</div>
						</a>
					</div>
				</div>

				<div class="p-8 bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-white/5 rounded-3xl backdrop-blur-sm">
					<h3 class="text-lg font-medium mb-2">Availability</h3>
					<p class="text-gray-400 text-sm leading-relaxed">Currently open to freelance opportunities and full-time positions. Expect a response within 24 hours.</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	:global(body) {
		background: #050505;
	}
</style>
