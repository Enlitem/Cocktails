/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      sm: '360px',
      md: '768px',
      lg: '1000px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Montserrat'],
    },
    colors: {
      pink: '#EB2D47',
      grey: '#443E3E',
      'light-grey': '#999999',
    },
  },
  plugins: [],
};
