const path = require('path');

module.exports = {
  mode: 'development', // Set mode to development or production
  entry: './src/project.js', // Entry point for your JavaScript
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory for bundled files
    filename: 'bundle.js', // Output bundled JavaScript filename
  },
  module: {
    rules: [
      // Rule for CSS files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // Rule for images
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[hash][ext][query]',
        },
      },
    ],
  },
};
