/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "white": "#ffffff",
        "black": "#444444"
      },
      keyframes: {
        light: {
          "0%": {
            outline: "2px solid",
            outlineColor: "#999",
            outlineOffset: "0"
          },
          "100%": {
            outline: "2px solid",
            outlineColor: "transparent",
            outlineOffset: "12px"
          }
        }
      },
      animation: {
        light: "light 1.2s infinite"
      },
      boxShadow: {
        "3xl": "0 0 6px 1px rgba(0, 0, 0, 0.3)"
      }
    }
  },
  plugins: []
}
