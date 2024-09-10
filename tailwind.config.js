/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "inter": "Inter"
      },
      colors: {
        "dark": "#1D1E25"
      }
    },
    screens: {
      "sm": {"max": "480px"}
    }
  },
  plugins: [],
}

