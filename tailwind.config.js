/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        primary:   '#1E1E1E',
        secondary: '#6B6B6B',
        tertiary:  '#F0F0F0',
      },
      borderRadius: {
        card: '20px',
        pill: '999px',
      }
    },
  },
  plugins: [],
}
