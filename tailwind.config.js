/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        ebgaramond: ['EB Garamond', 'serif'],
        lora: ['Lora', 'serif'],
        raleway: ['Raleway', 'sans-serif'],
        roman: ['Luxurious Roman', 'serif'],
    }
    },
  },
  plugins: [],
}
