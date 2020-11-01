const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: [path.resolve(__dirname, "src/index.js")],
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    alias: {
      "../../theme.config$": path.join(__dirname, "semantic-ui/theme.config"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        use: "url-loader",
      },
      {
        test: /\.(png|j?g|gif|ico)?$/,
        use: "url-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      inject: true,
      template: path.resolve(__dirname, "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash].css",
    }),
  ],
};
