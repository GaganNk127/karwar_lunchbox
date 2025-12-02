/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-ocean': '#022B3A',
        'wave-blue': {
          DEFAULT: '#1F7A8C',
          20: 'rgba(31, 122, 140, 0.2)',
          50: 'rgba(31, 122, 140, 0.5)',
        },
        'sand-beige': '#BFDBF7',
        'ocean-dark': '#011F2A',
        'wave-light': '#2E8BA0',
        'sand-light': '#D4E4F7',
      },
      fontFamily: {
        'ocean': ['Georgia', 'serif'],
        'coastal': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'wave': 'wave 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
      },
      boxShadow: {
        'ocean': '0 4px 20px rgba(31, 122, 140, 0.15)',
        'coastal': '0 8px 32px rgba(2, 43, 58, 0.12)',
      },
    },
  },
  plugins: [],
}
