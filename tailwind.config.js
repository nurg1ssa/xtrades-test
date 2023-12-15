/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
      backgroundImage:{
        profileBackground: "url('./assets/profileBack.png')",
        plusButton: "url('assets/plusButton.svg')",
      }
    },
  },
  plugins: [],
}

