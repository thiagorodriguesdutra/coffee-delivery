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
    extend: {},
  },
  plugins: [],
}

