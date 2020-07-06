// See default config https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
module.exports = {
  purge: [
    './pages/**/*.vue',
    './components/**/*.vue',
    './layouts/**/*.vue',
  ],
  theme: {
    fontFamily: {
      sans: ['canada-type-gibson', 'sans-serif']
    },
    container: {
      center: true,
      padding: '2rem',
    },
    spacing: {
      "quarter": "0.25rem",
      "half": "0.5rem",
      "one": "1rem",
      "two": "2rem",
      "three": "3rem",
      "four": "4rem",
      "five": "5rem",
      "six": "6rem",
      "eight": "8rem",
      "twelve": "12rem",
      "sixteen": "16rem"
    },
    extend: {
      colors: {
        brand: {
          light: '#0ED7B5',
          dark: '#0CAD92'
        }
      }
    }
  },
  variants: {}
}
