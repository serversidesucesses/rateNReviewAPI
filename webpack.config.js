require('dotenv').config();
// var nodeExternals = require('webpack-node-externals');
const path = require('path');
const CompressionPLugin = require("compression-webpack-plugin")
const BrotliPlugin = require('brotli-webpack-plugin');
const ImageminAvifWebpackPlugin= require("imagemin-avif-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '/client/src/index.jsx'),
  optimization: {
    usedExports: true,
  },
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
  // target: 'node',
  // externals: [nodeExternals()],
  // externalsPresets: {
  //   node: true
  // },
  plugins: [
    new ImageminAvifWebpackPlugin({
      config: [{
        test: /\.(jpe?g|png)/,
        options: {
          quality:  75
        }
      }],
      overrideExtension: true,
      detailedLogs: false,
      silent: false,
      strict: false
    }),
    new CompressionPLugin({
      algorithm: "gzip"
    }),
    new BrotliPlugin(),
  ]
};
