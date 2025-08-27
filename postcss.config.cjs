module.exports = {
  plugins: [
    // Use the dedicated PostCSS adapter for Tailwind
    require('@tailwindcss/postcss')(),
    require('autoprefixer'),
  ],
};