/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' }, // Start from the left
          '100%': { transform: 'translateX(100%)' }, // End on the right
        }
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite linear', // Added 'linear' for a smooth transition
      }
    },
  },
  plugins: [],
}
