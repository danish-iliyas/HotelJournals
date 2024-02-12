/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '620px',
      md: '840px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {},
  },
  plugins: [],
}