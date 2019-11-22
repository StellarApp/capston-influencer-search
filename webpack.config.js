const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './frontend/src/index.jsx',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'frontend/assets'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new Dotenv({
      path: './.env', // Path to .env file (this is the default) 
      safe: true // load .env.example (defaults to "false" which does not use dotenv-safe) 
    })
  ]
};
