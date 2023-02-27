/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Roboto',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '30px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1170px',
    },
    extend: {
      colors: {
        darkGreenCustom: '#204850',
        greenCustom: '#4F686A',
        whiteCustom: '#E9E4E0',
        brownCustom: '#A57D75',
        redCustom: '#721D2E',
        redCustomHover: '#AA505C',
        customGrey: '#F5F5F5',
        blackCustom: '#181818',
      },
      backgroundImage: {
        cta: "url('/src/assets/img/cta/bg.svg')",
      },
    },
  },
  plugins: [],
}
