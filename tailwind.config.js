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
          300: '#F4BBD3',
          900: '#EB8DB5',
        },
      },
      fontFamily: {
        Inter: ['Inter']
      },
      width: {
        '192': '768px', 
        '85': '343px',
        '125': '500px',
        '142': '570px',
        '180':'721px'
      },
    },
  },
  plugins: [],
}
