'use strict'

const { resolve } = require('path')

module.exports = {
  entry: ['./app/main'],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  },
  mode: 'development',
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /jsx?$/,
        include: resolve(__dirname, './app'),
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}
