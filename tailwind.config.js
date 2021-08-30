const { orange } = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')
module.exports = {
  mode: "jit",
  purge: ['./index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.trueGray,
      orange: colors.orange,
      white: colors.white,
      black: colors.black,
      green: colors.green
    },
    extend: {
      backgroundImage: theme => ({
        'slide1': "url('./images/home_internships-575.png')",
        'slide1.5': "url('./images/home_internships-1920.png')",
      }),
      maxWidth: (theme, { breakpoints }) => ({
        '6xl': '76rem',
        '8xl': '84rem',
        ...breakpoints(theme('screens')),
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}