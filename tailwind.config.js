/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Montserrat','sans-serif'] },
      colors: {
        brand: {
          blue: '#1565c0', blueMid: '#1976d2', blueLight: '#e3f2fd', blueLighter: '#f0f7ff',
          blueDark: '#0d3c7a', red: '#d32f2f', redLight: '#fde8e8',
          peach: '#fff5f0', cream: '#fefdf8', mint: '#f0faf5',
        }
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.5s ease forwards',
        'bounce-sm': 'bounceSm 1s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        float: { '0%,100%':{ transform:'translateY(0)' }, '50%':{ transform:'translateY(-8px)' } },
        fadeUp: { from:{ opacity:0, transform:'translateY(16px)' }, to:{ opacity:1, transform:'translateY(0)' } },
        bounceSm: { '0%,100%':{ transform:'translateY(0)' }, '50%':{ transform:'translateY(-4px)' } },
        pulseSoft: { '0%,100%':{ transform:'scale(1)' }, '50%':{ transform:'scale(1.04)' } },
      }
    },
  },
  plugins: [],
}
