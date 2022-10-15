module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      colors: {
        primary: {
          50: '#F2BCFB',
          80: '#855CF8',
          100: '#503795'
        },
        white: {
          100: '#FFFFFF'
        },
        gray: {
          50: '#D9D9D9',
          100: '#4F4F4F',
        },
        black:{
          100: '#000000',
        }
      },
      extend: {
        fontFamily: {
          body: ['Noto Sans Thai'],
        },
    },
  },
  plugins: [],
}