/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        'body-color': 'rgba(243, 243, 243, 0.993)',
      },
    },
  },
  plugins: [],
}

