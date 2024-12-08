/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  important: "#root",
  theme: {
    extend: {
      fontFamily: {
        "sans-serif": ['Open Sans', 'Poppins', 'montserrat', 'sans-serif']
      },
      colors: {
        'body-color': 'rgba(243, 243, 243, 0.993)',
      },
    },
  },
  plugins: [],
}

