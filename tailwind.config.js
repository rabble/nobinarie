/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'rainbow-red': '#ff595e',
        'rainbow-orange': '#ff924c',
        'rainbow-yellow': '#ffca3a',
        'rainbow-green': '#8ac926',
        'rainbow-blue': '#1982c4',
        'rainbow-purple': '#6a4c93',
        'rainbow-pink': '#e84a7f',
        'nonbinary-yellow': '#fff430',
        'nonbinary-white': '#ffffff',
        'nonbinary-purple': '#9c59d1',
        'nonbinary-black': '#000000',
      },
      animation: {
        'rainbow-text': 'rainbow-text 8s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.rainbow-blue'),
              '&:hover': {
                color: theme('colors.rainbow-purple'),
              },
            },
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.gray.900'),
              fontWeight: theme('fontWeight.bold'),
            },
            'code': {
              color: theme('colors.rainbow-purple'),
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '0.25rem',
              paddingRight: '0.25rem',
              paddingTop: '0.125rem',
              paddingBottom: '0.125rem',
              borderRadius: '0.25rem',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.rainbow-blue'),
              '&:hover': {
                color: theme('colors.rainbow-green'),
              },
            },
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.white'),
            },
            'code': {
              color: theme('colors.rainbow-green'),
              backgroundColor: theme('colors.gray.800'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}