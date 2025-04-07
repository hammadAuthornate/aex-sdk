// module.exports = {
//   plugins: {
//     '@tailwindcss/postcss': {},  // Add this line
//     autoprefixer: {},
//   },
// };


module.exports = {
  plugins: [
    require('@tailwindcss/postcss'),
    require('autoprefixer'),

  ],
};
