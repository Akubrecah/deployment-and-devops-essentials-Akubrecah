/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFC244', // Glovo Yellow
        secondary: '#00A082', // Glovo Green
        background: '#F9F9F9',
        dark: '#1D1D1D',
        gray: {
          100: '#F5F5F5',
          200: '#EAEAEA',
          300: '#D6D6D6',
          400: '#BDBDBD',
          500: '#9E9E9E',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'card': '0 2px 12px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
