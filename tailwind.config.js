/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#F8F0E5',
          100: '#F8F0E5',
          200: '#EADBC8',
          300: '#DAC0A3',
          400: '#C9A67A',
          500: '#B88C5F',
          600: '#A77344',
          700: '#865A30',
          800: '#65421C',
          900: '#442A08',
        },
        tan: {
          50: '#EADBC8',
          100: '#EADBC8',
          200: '#DAC0A3',
          300: '#C9A67A',
          400: '#B88C5F',
          500: '#A77344',
          600: '#865A30',
          700: '#65421C',
          800: '#442A08',
          900: '#221100',
        },
        navy: {
          50: '#102C57',
          100: '#102C57',
          200: '#0D2345',
          300: '#0A1A33',
          400: '#071121',
          500: '#04080F',
          600: '#020508',
          700: '#010204',
          800: '#000102',
          900: '#000000',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-up': 'slideUp 0.6s ease forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}