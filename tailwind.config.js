/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#944FFA'
        },
        primaryaccent: {
          DEFAULT: '#543B85'
        },
        dark: {
          DEFAULT: '#21252B'
        },
        darkaccent: {
          DEFAULT: '#292E36'
        }
      },
      transitionDuration: {
        DEFAULT: '300ms'
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
};
