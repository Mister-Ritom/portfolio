import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// registerPlugin will be called on the client side
// gsap.registerPlugin(ScrollTrigger);


let lenis: Lenis | null = null;

export function initSmoothScroll() {
	if (typeof window === 'undefined') return;

	gsap.registerPlugin(ScrollTrigger);


	lenis = new Lenis({
		duration: 1.2,
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		orientation: 'vertical',
		smoothWheel: true
	});

	function raf(time: number) {
		lenis?.raf(time);
		requestAnimationFrame(raf);
	}

	requestAnimationFrame(raf);

	// Connect Lenis with GSAP ScrollTrigger
	lenis.on('scroll', ScrollTrigger.update);

	gsap.ticker.add((time) => {
		lenis?.raf(time * 1000);
	});

	gsap.ticker.lagSmoothing(0);
}

export function destroySmoothScroll() {
	lenis?.destroy();
	lenis = null;
}

export { gsap, ScrollTrigger };
