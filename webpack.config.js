var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtools: 'cheap-module-eval-source-map',
  entry: {
    app: './src/app.js',
    //'ArrayExt': ['./src/ArrayExt.js'],
    //'RegExpExt': ['./src/RegExpExt.js'],
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: `[name].js`,
    library: ["FerrariJs", "[name]"],
    libraryTarget: "umd"
  },
  plugins: [
    //new webpack.optimize.CommonsChunkPlugin('app', 'app.js'),
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
