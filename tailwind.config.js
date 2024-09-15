/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html'],
  theme: {
    extend: {
      colors: {
        darkColor: '#282828',
        whiteColor: '#ffffff',
        lightSilverColor: '#F7F7F7',
        blueColor: '#0147FF',
        h2Color: '#11d020',
      },
      fontFamily: {
        flex: ['Roboto Flex', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
        condensed: ['Roboto Condensed', 'sans-serif'],
      },
      maxWidth: {
        '560': '560px',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1200px',
        '2xl': '1200px',
      },
      fontSize: {
        'h1': '2.25rem',
        'h2': '1.875rem',
        '25px': '25px',
        '14px': '14px',
        '76px': '76.29px',
      },
      lineHeight: {
        'h1': '1.5rem',
        'h2': '2.25rem',
        '37.5px': '37.5px',
        '21px': '21px',
        '83px': '83.92px',
      },
      letterSpacing: {
        'negative-03em': '-0.03em',
        'negative-04em': '-0.04em',
      },
      gap: {
        '48': '48px',
      },

    },
  },
  plugins: [],
};
