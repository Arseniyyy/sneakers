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
      'white-0.3': '#f3f3f3',
      'white-0.5': '#edf0f1',
      'white-full': '#fff',
      'orange-0.5': '#F5CBA7',
      'orange-full': '#FFC300',
      'red': '#FF0000',
      'gray': '#808080',
      'green': '#9dd558',
      'black-full': '#000',
      'black-0.5': '#00000080',
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}

