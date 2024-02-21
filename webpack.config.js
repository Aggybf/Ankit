const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  // Other webpack configurations...

  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: true, // Enable variable name mangling (obfuscation)
        },
      }),
    ],
  },
};
