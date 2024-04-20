/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontWeight: { base: 400, bold: 700 },
    fontSize: {
      small: 15,
      large: 22,
    },
    extend: {
      colors: {
        "main-body": "#dfe1ef",
        "dark-navy": "#1f314f",
        grey: "#7d889e",
      },
    },
  },
  plugins: [],
};
