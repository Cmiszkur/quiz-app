module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        '7': 'repeat(2, fit-content(0))'
      },
      height: {
        ninetyfive: "95%",
        five: "calc(5% - 1rem)"
      },
      minHeight: {
        "48": '48px',
        '1220': '1220px'
      },
      screens: {
        '3xl': '1950px'
      }
    },
    minWidth: {
      '0': '0',
      '300': '300px',
      '1/4': '25%',
      '2/5': '40%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
