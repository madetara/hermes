const { join } = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");

module.exports = {
  mode: "development",
  entry: join(__dirname, "/src/app.js"),
  output: {
    path: join(__dirname, "build"),
    filename: "app.bundled.js"
  },
  devServer: {
    port: 8080,
    hot: true,
    open: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
      showErrors: true,
      cache: true,
      title: "Hermes",
      template: join(__dirname, "index.html")
    })
  ]
};
