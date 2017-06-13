const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/App.jsx",
  output: {
    path: `${__dirname}/dist`,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.jsx$/, loader: "babel-loader", exclude: /node_modules/ }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin() // Enable HMR
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000,
    hot: true
  }
};
