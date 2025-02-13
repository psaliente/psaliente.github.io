/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      sd: '300px', // 640 x 480
      hd: '500px', // 1280 x 720
      fhd: '1000px', // 1920 x 1080
      qhd: '1500px', // 2560 x 1440
      uhd: '2000px' // 3480 x 2560
    }
  },
  plugins: []
};
