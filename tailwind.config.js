/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      gold: "#C09711",
      lightBlack: "#141414",
      cream: "#EBDFD4",
      black: "#000000",
      white: "#ffffff"

    },
    fontFamily:{
      italianno : 'Italianno',
      italiana : 'Italiana',
      lancelot: 'Lancelot',
      loaMuangDon :'Lao Muang Don',
      lekton :'Lekton',
      kronaOne: 'Krona One'
    },
    backgroundPosition:{
     home : "70%"
    },
    extend: {
      keyframes: {
        beatBox: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(20%)' },
        },
        beatBoxSecond: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(20%)' },
        },
        beatBoxThird: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(20%)' },
        },
        beatBoxForth: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(20%)' },
        }
      },

      animation:{
        beatBox : "beatBox 3s linear 1s alternate infinite ",
        beatBoxSecond : "beatBoxSecond 3s linear 3s alternate infinite ",
        beatBoxThird : "beatBoxThird 3s linear 5s alternate infinite ",
        beatBoxForth : "beatBoxForth 3s linear 1s alternate infinite ",
      },
   


    },
  },
  plugins: [],
}