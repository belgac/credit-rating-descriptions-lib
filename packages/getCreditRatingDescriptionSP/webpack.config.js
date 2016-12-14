var webpack = require('webpack');
var path = require('path');
var packageInfo = require('./package.json');
var _ = require('lodash');
const libraryName = _.camelCase(packageInfo.name)

const config = {
  entry: './index.js',
  output: {
    path: __dirname + '/bundle',
    filename: 'index.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
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
