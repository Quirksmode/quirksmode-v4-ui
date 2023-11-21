module.exports = {
  plugins: [
    "postcss-import",
    "postcss-flexbugs-fixes",
    "postcss-mixins",
    "postcss-nested",
    [
      "postcss-preset-env",
      {
        "features": {
          'nesting-rules': false
        }
      }
    ],
    ['postcss-assets', 
      {
        relative: true
      }
    ],
  ]
};
