const path = require("path");

const NodemonPlugin = require("nodemon-webpack-plugin");

const PnpWebpackPlugin = require("pnp-webpack-plugin");

// const nodeExternals = require("webpack-node-externals");

const baseConfig= {
  entry: [path.resolve(__dirname, "./src/index.ts")],
  // target: "node",
  output: {
    // filename: "index.node.js",
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
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".mjs", ".json"],
    plugins: [PnpWebpackPlugin]
  },
  resolveLoader: {
    plugins: [PnpWebpackPlugin.moduleLoader(module)]
  },
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
}

const nodeConfig= {
  ...baseConfig,
  target: "node",
  output: {
    ...baseConfig.output,
    filename: "index.node.js"
  }
};

const webConfig= {
  ...baseConfig,
  target: "webworker",
  output: {
    ...baseConfig.output,
    filename: "index.web.js"
  }
};

const nativeConfig= {
  ...baseConfig,
  target: "node",
  output: {
    ...baseConfig.output,
    filename: "index.native.js"
  }
};

module.exports=[nodeConfig,webConfig,nativeConfig];
