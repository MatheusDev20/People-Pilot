/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},

    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      darkGray: {
        600: '#343536',
        700: '#272729',
        900: '#1A1A1B',
      },
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      twitter: {
        blue: {
          main: `rgb(29, 155, 240)`,
          secondary: `rgb(26, 140, 216)`,
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
