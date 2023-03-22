/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // colors:{
      //   BrightBlue: 'hsl(220, 98%, 61%)',
      //   CheckBackground: 'linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)',
      // },
      colors:{
        'BrightBlue': 'hsl(220, 98%, 61%)',
       ' CheckBackground': 'linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)',
       'regal-blue': '#243c5a',
      }
    },
  },
  plugins: [],
}
