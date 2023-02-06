/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#01a3a4',
        primarydark: '#017d7e',
      },
      fontFamily: {
        primary: ['DM Sans', 'sans-serif'],
        secondary: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
