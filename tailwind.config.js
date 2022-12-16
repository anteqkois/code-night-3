/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: '.5rem',
      },
      boxShadow: {
        'inner-avatar': 'inset 0 0 7px 0 rgb(0 0 0 / 0.05)',
      },
      colors: {
        primary: {
          orange: '#FCA311',
          navy: '#14213D',
        },
        secondary: {
          orange: '#eb970e',
          navy: '#1b2c52',
          gray: '#E5E5E5',
        },
        neutral: {},
        success: {
          // 50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
        },
        warning: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        danger: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          DEFAULT: '#B91C1C',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
        },
      },
    },
  },
  plugins: [],
};
