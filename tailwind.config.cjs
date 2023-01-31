/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,html}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  plugins:[
    require("tw-elements/dist/plugin"),
    require("flowbite/plugin"),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary': '#046865',
        'secondary': '#21A0A0',
        'terciary': '#FCFFF7',
        'contrast': '#E53D00',
        'contrast-down': '#FDA268',
        'contrast-st': '#FFE900',
        'strong-down': '#5A9FFA',
      },
    },
  },
}
