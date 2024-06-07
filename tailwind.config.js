/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#F9FAFB',
          600: '#4B5563',
          900: '#111827',
        },
        'secondary': {
          900: '#EB8DB5',
        },
      },
      fontFamily: {
        Inter: ['Inter']
      }
    },
  },
  plugins: [],
}