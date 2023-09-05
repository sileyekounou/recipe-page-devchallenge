/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}

