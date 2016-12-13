var path = require('path');
var webpack = require('webpack');
const fs = require('fs');

const baseConfig = {
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
}

const demoConfig = Object.assign({}, baseConfig, {
  entry: './index.js',
  output: { path: __dirname + '/bundle', filename: 'script.js' },
});

const config = fs.readdirSync('./packages').map(file =>
  Object.assign(
    {},
    baseConfig,
    {
      entry: `./packages/${file}/index.js`,
      output: { path: __dirname + `/packages/${file}/bundle`, filename: `${file}.js` },
    }
  )
);

config.push(demoConfig);

module.exports = config;


