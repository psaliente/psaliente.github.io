/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {},
    screens: {
      'hd': '1280px',
      'fhd': '1920px',
      'qhd': '2560px',
      'uhd': '3840px'
    }
  },
  plugins: [],
}

