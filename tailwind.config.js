/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
    },
    colors: {
      'white': '#edf0f1',
      'red': '#FF0000',
      'orange': '#FFA500',
      'gray': '#808080',
      'green': '#6fffb0',
      'black': '#000',
    },
    extend: {},
  },
  plugins: [],
}

