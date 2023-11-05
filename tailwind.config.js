/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./src/**/*.{jsx,js}",
    "./index.html"
  ],
  theme: {
    extend: {},
    fontFamily: {
      roboto: ['Roboto', 'sans-serif']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#EB1983',
      'yellow': '#F4A912',
      'slate': '#334155',
      'black': '#000000',
      'red-500': 'rgb(239 68 68)'
    },
  },
  plugins: [],
}

