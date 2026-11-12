/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#090a0d',
          900: '#0f1115',
          850: '#14171d',
          800: '#1a1e26',
          700: '#262b36',
        },
        limeaccent: {
          DEFAULT: '#a3e635', // bright vibrant lime
          hover: '#bef264',
          glow: 'rgba(163, 230, 53, 0.15)',
        }
      },
      fontFamily: {
        sans: ['"Noto Sans KR"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
