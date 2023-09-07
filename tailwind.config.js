/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        xs: '300px',
      },
      keyframes: {
        float: {
          '0%, 100%': {
            translate: '0 -1rem',
          },
          '50%': {
            translate: '0 1rem',
          },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        float2: 'float 5s ease-in-out infinite 0.5s',
        float3: 'float 8s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-3d')],
};
