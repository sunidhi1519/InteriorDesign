/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-nude': '#c79288',
        'lavender': '#d0cce0',
        'beige': '#e8e4e4',
      },
    },
  },
  plugins: [],
}


