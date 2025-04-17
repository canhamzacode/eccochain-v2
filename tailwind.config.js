/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4954B0',
        secondary: '#1a1f2c',

        'ecco-darkPurple': '#1a1f2c',
        'ecco-purple': '#9b87f5',
        'ecco-lightPurple': '#f4ebff',
        'ecco-blue': '#1eaedb',
      },
      screens: {
        tablet: '970px',
      },
    },
  },
  plugins: [],
};
