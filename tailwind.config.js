/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Montserrat','sans-serif'] },
      colors: {
        brand: {
          blue: '#1565c0', blueMid: '#1976d2',
          blueLight: '#e8f4fd', blueLighter: '#f4f9ff',
          blueDark: '#0d3c7a', bluePale: '#dbeafe',
          red: '#c62828', redHover: '#b71c1c', redLight: '#fde8e8',
          peach: '#fff5f0', cream: '#fdfcf8',
          mint: '#f0fdf8', mintMid: '#d1fae5',
          rose: '#fff1f4', roseMid: '#fce7ef',
          gold: '#f59e0b',
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(145deg, #f4f9ff 0%, #fdfcf8 40%, #f0fdf8 100%)',
        'quiz-gradient': 'linear-gradient(145deg, #f4f9ff 0%, #fdfcf8 100%)',
        'result-gradient': 'linear-gradient(135deg, #e8f4fd 0%, #f0fdf8 100%)',
      },
      boxShadow: {
        'card': '0 2px 20px -4px rgba(21,101,192,0.08), 0 0 0 1px rgba(21,101,192,0.04)',
        'card-hover': '0 8px 32px -6px rgba(21,101,192,0.15), 0 0 0 1px rgba(21,101,192,0.06)',
        'float': '0 12px 40px -8px rgba(21,101,192,0.18)',
        'cta': '0 6px 24px -4px rgba(198,40,40,0.35)',
      },
      borderRadius: {
        '2.5xl': '20px',
        '3.5xl': '28px',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'float-delay': 'float 4s ease-in-out 1.5s infinite',
        'fade-up': 'fadeUp 0.5s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'wiggle': 'wiggle 2s ease-in-out infinite',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
        'typing': 'typing 1.2s steps(3) infinite',
        'slide-in-left': 'slideInLeft 0.4s ease forwards',
        'scale-in': 'scaleIn 0.3s ease forwards',
        'pulse-ring': 'pulseRing 2s cubic-bezier(0.455,0.03,0.515,0.955) infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        bounceGentle: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        wiggle: {
          '0%,100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        sparkle: {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.2)' },
        },
        typing: {
          '0%': { content: '"·"' },
          '33%': { content: '"··"' },
          '66%': { content: '"···"' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-16px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.92)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(198,40,40,0.4)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 10px rgba(198,40,40,0)' },
          '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(198,40,40,0)' },
        },
      },
    },
  },
  plugins: [],
}
