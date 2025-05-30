// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#49108B',
        secondary: '#7E30E1',
        secondary_light: '#DBC4F0',
        textcolor: '#F3F8FF',
        textcolor2: '#000000',
        textcolor_light:"#F3F8FF"
      },
    },
  },
  plugins: [],
};
