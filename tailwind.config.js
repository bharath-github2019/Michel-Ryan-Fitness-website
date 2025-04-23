/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: {
          50: '#fff5f5',
          100: '#ffe0e0',
          200: '#ffc0c0',
          300: '#ffa0a0',
          400: '#ff7070',
          500: '#ff3a3a', // Primary Red
          600: '#e62e2e',
          700: '#c92525',
          800: '#a61f1f',
          900: '#891b1b',
          950: '#480d0d',
        },
        black: {
          DEFAULT: '#121212', // Primary Black
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#121212',
        },
      },
      fontFamily: {
        heading: ['Lato', 'sans-serif'],
        body: ['Noto Sans', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
};