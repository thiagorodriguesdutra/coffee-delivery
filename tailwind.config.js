/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{ts,tsx}",
    "./*.html"
  ],
  theme: {
    colors: {
      'background': '#FAFAFA',
      'base-button': '#E6E5E5',
      'base-card': '#F3F2F2',
      'base-hover': '#D7D5D5',
      'base-input': '#EDEDED',
      'base-label': '#8D8686',
      'base-subtitle': '#403937',
      'base-text': '#574F4D',
      'base-title': '#272221',
      'yellow': '#DBAC2C',
      'yellow-dark': '#C47F17',
      'yellow-light': '#F1E9C9',
      'purple': '#8047F8',
      'purple-dark': '#4B2995',
      'purple-light': '#EBE5F9',
      'white': '#FFFFFF',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      cursive: ['Baloo 2', 'cursive'],
    },
    extend: {
      fontSize: {
        '10': '0.625rem',
        '12': '0.75rem',
        '14': '0.875rem',
        '16': '1rem',
        '18': '1.125rem',
        '20': '1.25rem',
        '24': '1.5rem',
        '32': '2rem',
        '48': '3rem',
      },
      lineHeight: {
        '130': 1.3,
        '160': 1.6,
      },
      gridTemplateColumns: {
        '4col': 'repeat(auto-fit, minmax(256px, 1fr))'
      },
      screens: {
        'xxl': { 'min': '930px', 'max': '1160px' },
        'grs': { 'min': '0px', 'max': '1160px' },
        'xl': { 'min': '0px', 'max': '930px' },
      },
    },
  },
  plugins: [],
}

