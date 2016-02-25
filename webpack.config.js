var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtools: 'cheap-module-eval-source-map',
  entry: {
    app: './src/app.js',
    'Array.Extension': ['./src/Array.Extension.js'],
    'RegExp.Extension': ['./src/RegExp.Extension.js'],
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: `[name].js`,
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('app', 'app.js'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        exclude: /node_modules/,
      }
    ]
  }
};
