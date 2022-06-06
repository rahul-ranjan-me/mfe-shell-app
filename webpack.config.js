const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin")
const path = require("path");
const deps = require("./package.json").dependencies;
const mode = process.env.mode ? process.env.mode : "development";
const port = process.env.port || 6001;

module.exports = {
  entry: "./src/index",
  mode,
  devServer: {
    static: path.resolve(__dirname, "public"),
    port,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
    },
  },
  resolve: {
    extensions: [".js", ".mjs", ".jsx", ".css"],
    alias: {
      events: "events",
    },
  },
  output: {
    publicPath: "/",
    chunkFilename: "[id].[contentHash].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|eot|woff|ttf|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "module_expose_shell",
      filename: "remoteEntry.js",
      remotes: {
        shared: "shared_components@[window.sharedComponent]/remoteEntry.js",
      },
      exposes: {
        "./routes": "./src/core/AppRoutes",
      },
      shared: [
        {
          react: {
            singleton: true,
            requiredVersion: '18.0.0',
          },
          "react-dom": {
            singleton: true,
            requiredVersion: '18.0.0',
          },
          "react-router-dom": {
            singleton: true,
            requiredVersion: '^6.3.0',
          },
        },
      ],
    }),
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "MFE Shell Starter App",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({ filename: "[id].[contenthash].css" }),
  ],
  devtool: "source-map",
};
