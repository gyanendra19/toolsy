/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "head-gradient": "linear-gradient(81deg, rgba(110,61,128,1) 9%, rgba(238,60,60,1) 100%);"
      },
      keyframes: {
        "alert": {
          '0%': {transform: "translateY(-100px)"},
          '5%': {transform: "translateY(0)"},
          '90%': {opacity: 1},
          '100%': {opacity: 0}
        }
      },
      animation: {
        "alert-animate": "alert 4s ease-out forwards"
      }
    },
  },
  plugins: [],
};
