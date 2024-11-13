/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D0221',
        secondary: '#0F084B',
        accent: '#26408B',
        'light-accent': '#A6CFD5',
        'light-background': '#C2E7D9',
      },
    },
  },
  plugins: [],
}