/** @type {import('tailwindcss').Config} */
/** @type {import('@tailwindcss/postcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",  // include storybook files if needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
