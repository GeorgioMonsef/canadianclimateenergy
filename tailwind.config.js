/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React files for Tailwind to process
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e0e6f1',
          100: '#b3c2e1',
          200: '#8094c1',
          300: '#4d66a1',
          400: '#1a387f',
          500: '#003366', // Main navy color
          600: '#002d5d',
          700: '#00244c',
          800: '#001a39',
          900: '#001024',
        },
        red: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fba5a5',
          400: '#f87171',
          500: '#ef4444', // Main red color
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
      },
      fontFamily: {
        // Example for adding custom fonts
        sans: ['Inter', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      fontSize: {
        // Example for custom font sizes
        'xs': '.75rem',
        'sm': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
      },
    },
  },
  plugins: [
    // Example: Add any plugins you use here
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),
  ],
};
