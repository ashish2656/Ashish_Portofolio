/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0f172a',
        'dark-lighter': '#1e293b',
        light: '#f8fafc',
        'neon-blue': '#00f5ff',
        'neon-purple': '#b249f8',
        'neon-green': '#50fa7b',
        'neon-pink': '#ff6ac1',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'text-shimmer': 'textShimmer 2.5s linear infinite',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': {
            opacity: 1,
            boxShadow: '0 0 20px 2px rgba(0, 245, 255, 0.2)',
          },
          '50%': {
            opacity: 0.7,
            boxShadow: '0 0 20px 10px rgba(0, 245, 255, 0.4)',
          },
        },
        textShimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        fadeInUp: {
          '0%': {
            opacity: 0,
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-neon': 'linear-gradient(90deg, #00f5ff, #b249f8)',
      },
      boxShadow: {
        'neon-sm': '0 0 5px rgba(0, 245, 255, 0.3)',
        'neon': '0 0 10px rgba(0, 245, 255, 0.5), 0 0 20px rgba(0, 245, 255, 0.3)',
        'neon-lg': '0 0 15px rgba(0, 245, 255, 0.5), 0 0 30px rgba(0, 245, 255, 0.4), 0 0 45px rgba(0, 245, 255, 0.2)',
        'neon-purple': '0 0 10px rgba(178, 73, 248, 0.5), 0 0 20px rgba(178, 73, 248, 0.3)',
        'neon-green': '0 0 10px rgba(80, 250, 123, 0.5), 0 0 20px rgba(80, 250, 123, 0.3)',
        'neon-pink': '0 0 10px rgba(255, 106, 193, 0.5), 0 0 20px rgba(255, 106, 193, 0.3)',
      },
      textShadow: {
        'neon': '0 0 5px #00f5ff, 0 0 10px #00f5ff',
        'neon-purple': '0 0 5px #b249f8, 0 0 10px #b249f8',
      },
      transitionProperty: {
        'width': 'width',
        'height': 'height',
        'spacing': 'margin, padding',
      },
      zIndex: {
        '-1': '-1',
      },
      blur: {
        'xs': '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.bg-clip-text': {
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
        },
        '.text-fill-transparent': {
          '-webkit-text-fill-color': 'transparent',
          'text-fill-color': 'transparent',
        },
        '.backdrop-blur-xs': {
          'backdrop-filter': 'blur(2px)',
        },
        '.backdrop-blur-md': {
          'backdrop-filter': 'blur(8px)',
        },
        '.backdrop-blur-lg': {
          'backdrop-filter': 'blur(12px)',
        },
        '.backdrop-saturate-150': {
          'backdrop-filter': 'saturate(1.5)',
        },
        '.backdrop-saturate-200': {
          'backdrop-filter': 'saturate(2)',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.perspective-500': {
          'perspective': '500px',
        },
        '.perspective-1000': {
          'perspective': '1000px',
        },
        '.rotate-y-180': {
          'transform': 'rotateY(180deg)',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
} 