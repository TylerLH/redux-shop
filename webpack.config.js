const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

module.exports = {
  entry: ['babel-polyfill', './src/app.js'],
  output: {
      path: __dirname,
      filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['stage-0', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style", "css", "postcss")
      }
    ]
  },
  resolve: {
    alias: {
      actions: path.resolve('./src/actions'),
      components: path.resolve('./src/components'),
      containers: path.resolve('./src/containers'),
      reducers: path.resolve('./src/reducers'),
      styles: path.resolve('./src/styles')
    }
  },
  plugins: [
    new ExtractTextPlugin("style.css")
  ],
  postcss: function () {
      return [autoprefixer, precss];
  }
}
