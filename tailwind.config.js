/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/DarkSky.jpg')",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    // other plugins can go here
  ],
}
