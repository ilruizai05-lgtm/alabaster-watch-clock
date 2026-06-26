/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0d1b2a',
          deep: '#060f1a',
          light: '#1b2a3e',
        },
        gold: {
          DEFAULT: '#c9a961',
          bright: '#e0bc6f',
          dark: '#8a6f35',
        },
        cream: {
          DEFAULT: '#f4ede0',
          soft: '#ebe2d0',
        },
        ink: '#1a1a1a',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


