require('dotenv').config();

const path = require('path');
const CompressionPLugin = require("compression-webpack-plugin")
const BrotliPlugin = require('brotli-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '/client/src/index.jsx'),
  output: {
    path: path.join(__dirname, '/client/dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /.svg$/,
        type: "['@svgr/webpack']",
      },
      {
        test: /.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]',
        },
      },
    ],
  },
  plugins: [
    new CompressionPLugin({
      algorithm: "gzip"
    }),
    new BrotliPlugin()
  ]
};