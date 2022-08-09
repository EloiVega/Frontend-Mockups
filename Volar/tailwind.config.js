/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      flexGrow:{
        '2':2,
        '3':3,
        '4':4,
        '5':5,
        '6':6,
        '7':7,
      },
      spacing: {
        '95/100': '95%',
        'M1': '18rem',
        'M2': '32rem',
      }
    },
  },
  plugins: [],
};
