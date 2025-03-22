/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Progressive pride flag inspired colors
        primary: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#bae0ff',
          300: '#7dc5ff',
          400: '#36a3ff',
          500: '#0d83ff',
          600: '#0065db',
          700: '#004fb3',
          800: '#004294',
          900: '#00397a',
          950: '#002152',
        },
        rainbow: {
          red: '#FF5252',
          orange: '#FF9500',
          yellow: '#FFD600',
          green: '#00C853',
          blue: '#2979FF',
          purple: '#AA00FF',
          pink: '#FF4081',
        },
        trans: {
          blue: '#55CDFC',
          pink: '#F7A8B8',
          white: '#FFFFFF',
        },
        nonbinary: {
          yellow: '#FFF430',
          white: '#FFFFFF',
          purple: '#9C59D1',
          black: '#000000',
        },
      },
      backgroundImage: {
        'rainbow-gradient': 'linear-gradient(to right, #FF5252, #FF9500, #FFD600, #00C853, #2979FF, #AA00FF)',
        'trans-gradient': 'linear-gradient(to right, #55CDFC, #F7A8B8, #FFFFFF, #F7A8B8, #55CDFC)',
        'nonbinary-gradient': 'linear-gradient(to right, #FFF430, #FFFFFF, #9C59D1, #000000)',
      },
      animation: {
        'rainbow-text': 'rainbow-text 8s linear infinite',
      },
      keyframes: {
        'rainbow-text': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}