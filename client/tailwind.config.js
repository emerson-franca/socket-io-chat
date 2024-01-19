/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: "minmax(18rem, 20rem) 1fr",
      },
      gridTemplateRows: {
        app: "90px 1fr",
      },
    },
  },
  plugins: [],
};
