const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.base");

module.exports = merge(baseConfig, {
  mode: "development",
  devServer: {
    historyApiFallback: true,
    port: 9001
  },
  devtool: "source-map"
});
