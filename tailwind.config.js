/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./src/**/*.{jsx,js}",
    "./index.html"
  ],
  theme: {
    extend: {},
    fontFamily: {
      roboto: ['Poppins', 'sans-serif']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#d0036b',
      'yellow': '#F4A912',
      'slate': '#334155',
      'black': '#000000',
      'red-500': 'rgb(239 68 68)'
    },
  },
  plugins: [],
}

