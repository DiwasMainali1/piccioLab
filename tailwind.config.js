/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
      theme: {
        extend: {
          animation: {
            float: 'float 6s ease-in-out infinite',
          },
          keyframes: {
            float: {
              '0%': {
                transform: 'translate(0px, 0px)',
              },
              '25%': {
                transform: 'translate(2px, -3px)',
              },
              '50%': {
                transform: 'translate(0px, 0px)',
              },
              '75%': {
                transform: 'translate(-2px, -3px)',
              },
              '100%': {
                transform: 'translate(0px, 0px)',
              },
            },
          },
        },
      },
  plugins: [],
}

