/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'primary': '#31363F',
            'secondary': '#0F0F11',
            'accent': '#FFF7F1',
        },

        fontFamily: {
            'body': ['Outfit', 'sans-serif'],
            'mont': ['Montserrat', 'sans-serif'],
        },



    },
  },
  plugins: [
      require('@tailwindcss/forms'),

  ],
}