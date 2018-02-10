const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.join(process.cwd(), 'src'), // the home directory for webpack
  devtool: 'source-map', // enhance debugging by adding meta info for the browser devtools
  entry: {
    app: './index.js'
  },
  output: {
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js']  // extensions that are used
  },
  module: {
    rules: [{
      enforce: 'pre', // to check source files, not modified by other loaders (like babel-loader)
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  devServer: {
    publicPath: '/',
    port: 9000,
    host: 'localhost',
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    noInfo: false,
    stats: 'minimal',
    hot: true  // hot module replacement. Depends on HotModuleReplacementPlugin
  }
};
