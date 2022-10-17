// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     fontFamily: {
//       sans: ["sans-serif", "Noto Sans Thai"],
//     },
//     extend: {},
//   },
//   plugins: [],
// }


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F2BCFB',        //logo
          80: '#855CF8',        //default
          100: '#503795'        //hover
        },
        white: {
          100: '#FFFFFF'
        },
        gray: {
          50: '#D9D9D9',        //underline
          100: '#4F4F4F',       //disable
          700: '#374151',       //textbox
        },
        black:{
          100: '#000000',
        }
      },
      
        fontFamily: {
          body: ["sans-serif", "Noto Sans Thai"],
        },

    },
  },
  plugins: [],
}