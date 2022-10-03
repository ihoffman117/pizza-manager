const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['./client/src/index.jsx'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './client/dist'),
  },
  module: {
    rules: [{ test: /\.jsx/, use: 'babel-loader' }, { test: /\.(png|jpe?g|gif)$/i, loader: 'file-loader' }],

  },
  resolve: { extensions: ['.js', '.jsx'] },
  watch: true,
  watchOptions: {
    poll: true,
    ignored: /node_modules/
  }
};