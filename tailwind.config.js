/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        noto: "'Noto Sans', sans-serif",
      },
      keyframes: {
        'spin-left': {
          '0%': { transform: 'rotate(0)' },
          '99%, 100%': { transform: 'rotate(-360deg)' },
        },
        'spin-right': {
          '0%': { transform: 'rotate(0)' },
          '99%, 100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['dracula'],
  },
}
