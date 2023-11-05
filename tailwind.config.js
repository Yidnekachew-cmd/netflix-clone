/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'myColor' : 'rgba(51, 51, 51, 0.5)',
        'gradient' : 'rgba(37, 37, 37, 0.61)',
    },
  },
  plugins: [],
}
}
