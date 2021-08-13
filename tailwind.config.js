module.exports = {
  mode: "jit",
  purge: ['./index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
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