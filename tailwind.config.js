/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css}",
  ],  
  theme: {
    extend: {},
    fontFamily:{
      PlayfairDisplay: ['Playfair Display', 'serif'],
      Poppins: ['Poppins', 'sans-serif'],
      UnbuntoMono: ['Ubuntu Mono', 'monospace'],
    },
  },
  plugins: [],
}

