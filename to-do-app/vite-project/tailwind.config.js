/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D0714',
        gray: '#777777',
        lavender: '#9E78CF',
        purple: '#3E1671',
        downy: '#78CFB0',
        purpleLight: '#15101C'
      },
      borderRadius: {
        default: '10px'
      }
    },
  },
  plugins: [],
}