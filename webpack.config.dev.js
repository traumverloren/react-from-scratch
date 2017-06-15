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
      { test: /\.jsx$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.(png|jpg|gif)$/, loader: "url-loader" }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
        PUBLIC_URL: JSON.stringify("")
      }
    }),
    new webpack.HotModuleReplacementPlugin() // Enable HMR
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000,
    historyApiFallback: true,
    hot: true
  }
};