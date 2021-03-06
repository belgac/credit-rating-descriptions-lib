var path = require('path');
var webpack = require('webpack');

const config = {
  entry: './index.js',
  output: { path: __dirname + '/bundle', filename: 'script.js' },
   module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
};

module.exports = config;


