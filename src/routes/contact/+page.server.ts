import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const message = data.get('message');

		if (!name || !email || !message) {
			return fail(400, { missing: true });
		}

		// In a production environment, you would use an environment variable for the API key
		// and potentially a library like 'resend' if installed. 
		// For now, we'll use a standard fetch request to the Resend API.
		
		const RESEND_API_KEY = (await import('$env/dynamic/private')).env.RESEND_API_KEY || 'REPLACE_WITH_YOUR_KEY';

		try {
			const response = await fetch('https://api.resend.com/emails', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${RESEND_API_KEY}`
				},
				body: JSON.stringify({
					from: 'Portfolio <onboarding@resend.dev>',
					to: 'ritomghosh856@gmail.com', // Your identified email
					subject: `New Message from ${name}`,
					html: `
						<h2>New Contact Form Submission</h2>
						<p><strong>Name:</strong> ${name}</p>
						<p><strong>Email:</strong> ${email}</p>
						<p><strong>Message:</strong></p>
						<p>${message}</p>
					`
				})
			});

			if (response.ok) {
				return { success: true };
			} else {
				const error = await response.json();
				console.error('Resend API error:', error);
				return fail(500, { error: true, message: 'Failed to send email' });
			}
		} catch (e) {
			console.error('Fetch error:', e);
			return fail(500, { error: true, message: 'Internal server error' });
		}
	}
};
