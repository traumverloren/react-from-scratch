const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Enable HMR
    new HtmlWebpackPlugin({
        inject: 'body',
        filename: 'index.html',
        template: __dirname + '/src/index.html',
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000,
    hot: true
  }
};
