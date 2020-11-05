const path = require("path");

// const PnpWebpackPlugin = require("pnp-webpack-plugin");

const NodemonPlugin = require("nodemon-webpack-plugin"); // Ding

const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: [path.resolve(__dirname, "./src/index.ts")],
  target: "node",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "./lib"),
    libraryTarget: "commonjs"
  },
  mode: "development", // "production"
  optimization: {
    minimize: false
  },
  performance: {
    hints: "warning"
  },
  plugins: [new NodemonPlugin()],
  devtool: "",
  // resolve: {
  //   extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".mjs", ".json"],
  //   plugins: [PnpWebpackPlugin]
  // },
  // resolveLoader: {
  //   plugins: [PnpWebpackPlugin.moduleLoader(module)]
  // },
  node: false,
  module: {
    rules: [
      // {
      //   test: /packages\/.*\.tsx?$/,
      //   exclude: /node_modules/,
      //   loader: require.resolve("ts-loader"),
      //   options: {
      //     compilerOptions: {
      //       outDir: "./lib"
      //     }
      //   }
      // },
      {
        test: /packages\/.*\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve("babel-loader"),
          options: {
            root: path.resolve(__dirname, "../../.."),
            rootMode: "upward"
          }
        }
      }
    ]
  },
  externals: [
    // nodeExternals()
  ]
};
