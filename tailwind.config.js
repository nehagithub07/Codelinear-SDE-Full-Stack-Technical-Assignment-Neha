/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#020B0E',
          900: '#041114',
          850: '#06181D',
          800: '#0A2228',
        },
        mist: {
          50: '#EAF6FA',
          100: '#D4E5EA',
          200: '#A9BBC3',
          300: '#7E919B',
        },
        n7: {
          cyan: '#0FAEEF',
          blue: '#0053F1',
          royal: '#051D8F',
          violet: '#8B73FF',
        },
      },
      boxShadow: {
        nav: '0 18px 60px rgba(0, 0, 0, 0.28)',
        glow: '0 24px 90px rgba(0, 93, 255, 0.28)',
        card: '0 24px 70px rgba(0, 0, 0, 0.2)',
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(circle at 75% 44%, rgba(0, 84, 190, 0.66), transparent 33%), radial-gradient(circle at 50% 120%, rgba(0, 62, 132, 0.34), transparent 36%)',
        'button-blue': 'linear-gradient(100deg, #10B6F3 0%, #0052EA 100%)',
      },
    },
  },
  plugins: [],
}
