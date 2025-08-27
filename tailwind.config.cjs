module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#890129', // brand color (replaces previous deep blue)
        'deep-blue-dark': '#69011f', // darker variant for hover states
        'muted-gold': '#D6BC6A', // Muted gold accent
        charcoal: '#2B2B2B',
        'light-gray': '#F3F4F6',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 600ms ease-out both',
      },
    },
  },
  plugins: [],
};