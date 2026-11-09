/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        red: {
          50: '#fdeaec',
          100: '#fad0d5',
          400: '#d63347',
          500: '#cf0f24',
          600: '#be061b',
          700: '#9c0516',
          800: '#7c0412',
        },
        blue: {
          50: '#ecebf4',
          100: '#d4d2e7',
          400: '#4a48a3',
          500: '#312e88',
          800: '#26246f',
          900: '#1e1c6d',
        },
      },
    },
  },
  plugins: [],
};
