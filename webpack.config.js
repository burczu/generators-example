const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    home: './src/home.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[hash].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[hash].bundle.js'
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: true,
      comments: false
    }),
    new ExtractTextPlugin({
      filename: '[name].[hash].bundle.css'
    }),
    new HtmlWebpackPlugin()
  ]
};
