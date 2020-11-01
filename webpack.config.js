const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: [path.resolve(__dirname, "src/index.js")],
  output: {
    path: `${__dirname}/dist`,
    filename: "index.js",
    library: "react-jodit-editor",
    libraryTarget: "commonjs2",
  },
  watchOptions: {
    aggregateTimeout: 600,
    ignored: /node_modules/,
  },
  resolve: {
    alias: {
      "../../theme.config$": path.join(__dirname, "semantic-ui/theme.config"),
      react: `${__dirname}/./node_modules/react`,
      "react-dom": `${__dirname}/./node_modules/react-dom"`,
    },
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM",
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
