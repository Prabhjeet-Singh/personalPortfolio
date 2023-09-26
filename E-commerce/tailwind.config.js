/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens:{
       'wide':{'raw':'(min-width:1293px)'},
       'mdwide':{'raw':'(min-width:950px)'}
      },
    },
  },
  plugins: [],
}

