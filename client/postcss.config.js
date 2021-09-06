module.exports = {
  plugins: [
    [
      "postcss-preset-env",
      {
        // options
      },
    ],
    require('autoprefixer'),
    require('postcss-nested'),
    require('cssnano')
  ],
};