const config = {
  entry: './index.js',
  output: { path: __dirname + '/bundle', filename: 'index.js' },
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
