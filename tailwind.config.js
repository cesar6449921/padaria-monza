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
          // Cores principais da marca (mantidas)
          red: '#C8102E',
          dark: '#B71C1C',

          // Cores neutras e backgrounds (do Figma)
          cream: '#F0D2CB',
          'cream-light': '#F5E6D3',
          beige: '#E8D5C4',
          'beige-light': '#ECF2F7',

          // Acentos
          gold: '#D4AF37',
          brown: '#3E2723',

          // Cinzas
          gray: '#C4C4C4',
          'gray-light': '#F8F8F8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif']
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700'
      },
      boxShadow: {
        soft: '0 20px 60px rgba(0,0,0,0.12)',
        'card': '30px 50px 100px rgba(0,0,0,0.05)',
        'card-hover': '30px 50px 120px rgba(0,0,0,0.15)'
      },
      borderRadius: {
        'card': '30px',
        'button': '25px'
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '12px',
        'lg': '24px',
        'xl': '40px',
        '2xl': '100px'
      }
    },
  },
  plugins: [],
}
