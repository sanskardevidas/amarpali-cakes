/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bakery-pink': '#F7DCE2',
        'blush-pink': '#F2C2CC',
        'soft-cream': '#FFF6F8',
        'card-bg': '#FFFDFD',
        'accent-pink': '#D86A8A',
        'dark-rose': '#B14F6B',
        'text-primary': '#3A3A3A',
        'soft-border': '#EECFD7',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};