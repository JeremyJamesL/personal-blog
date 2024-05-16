/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg"],
  theme: {
    fontFamily: {
      serif: ["Nunito", "sans-serif"],
      mono: ["Ubuntu Sans Mono", "monospace"],
    },
    extend: {},
  },
  plugins: [],
};
