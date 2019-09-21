const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const nodeEnv = process.env.NODE_ENV || "dev";
const environmentConfig = require("./src/config/" + nodeEnv);
var webpack = require("webpack");

module.exports = {
  entry: {
    adminapp: "./src/indexApp.js", //authenticatedIndex
    config: ["./src/config/" + nodeEnv + "/index.js"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].bundle.[hash].js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: "file-loader",
        options: {}
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      title: "React Bootstrap Portal",
      favicon: "./src/favicon.png",
      chunks: ["adminapp", "config"]
    }),
    new webpack.DefinePlugin({
      __ENVIRONMENT_CONFIG__: JSON.stringify(environmentConfig),
      "process.env.NODE_ENV": `"${nodeEnv}"`
    })
  ]
};
