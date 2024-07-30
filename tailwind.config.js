/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Popins: ["Popins", "sans-serif"],
      },
      colors: {
        secondaryColor: "#0d1219",
        primaryColor: "#1a212b",
        hoverColor: "#2e353f",
      },
      fontSize:{
        navFont:"0.8rem"
      }
    },
  },
  plugins: [],
};

