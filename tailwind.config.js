/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        monza: {
          red: '#C8102E',
          dark: '#B71C1C',
          cream: '#F5E6D3',
          beige: '#E8D5C4',
          gold: '#D4AF37',
          brown: '#3E2723'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif']
      },
      boxShadow: {
        soft: '0 20px 60px rgba(0,0,0,0.12)'
      }
    },
  },
  plugins: [],
}
