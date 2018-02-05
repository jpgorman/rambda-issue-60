var path = require('path');

module.exports = {
  entry: './index.js',
   output: {
       path: path.resolve(__dirname, 'build'),
       filename: 'bundle.js'
   },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/(?!rambda)/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
