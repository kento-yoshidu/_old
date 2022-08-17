/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "white": "#ffffff",
      "black": "#444444"
    },
    extend: {
      boxShadow: {
        "3xl": "0 0 6px 1px rgba(0, 0, 0, 0.3)"
      }
    }
  },
  plugins: []
}
