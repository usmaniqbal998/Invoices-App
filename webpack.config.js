const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env) => {
  return {
    mode: env.production ? "production" : "development",
    entry: path.join(__dirname, "src", "index.js"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[contenthash].js",
    },

    resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
      modules: ["node_modules"],
      alias: {
        react: path.resolve("./node_modules/react"),
        "react-dom": path.resolve("./node_modules/react-dom"),
        "styled-components": path.resolve("./node_modules/styled-components"),
      },
    },
    module: {
      rules: [
        {
          test: /\.?(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.(png|jpg|jpeg)$/i,
          type: "asset/resource",
        },
        {
          test: /\.svg$/i,
          type: "asset/inline",
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
        filename: "index.html",
        favicon: "./src/assets/favicon-32.png",
        inject: true,
      }),
    ],
    devServer: {
      open: true,
      port: 6080,
    },
  };
};
