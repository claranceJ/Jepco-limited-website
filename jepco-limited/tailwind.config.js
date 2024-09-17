module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "#1a237e", //Dark blue
        secondary: "rgb(14, 165, 233)", //Red
        accent: "ffffff", //white

      },
      fontFamily: {
        sans: ['Poppins','sans-serif'],
      },
    },
  },
  plugins: [],
};