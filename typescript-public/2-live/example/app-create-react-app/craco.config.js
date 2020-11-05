// const {
//   when,
//   whenDev,
//   whenProd,
//   whenTest,
//   ESLINT_MODES,
//   POSTCSS_MODES
// } = require("@craco/craco");

const eslintConfig = require("../../../.eslintrc");

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Remove the webpack scope plugin, to allow using other packages of the monorepo
      webpackConfig.resolve.plugins = webpackConfig.resolve.plugins.filter(
        plugin => !(plugin.appSrcs && plugin.allowedFiles)
      );

      // // https://github.com/TypeStrong/ts-loader
      // // Enable ts loader for other packages of the monorepo
      // webpackConfig.module.rules.push({
      //   test: /packages\/.*\.tsx?$/,
      //   exclude: __dirname,
      //   loader: require.resolve("ts-loader"),
      //   options: {
      //     compilerOptions: {
      //       outDir: "./lib"
      //     }
      //   }
      // });

      // https://babeljs.io/docs/en/config-files#webpack
      // Enable babel loader for other packages of the monorepo
      webpackConfig.module.rules.push({
        test: /packages\/.*\.tsx?$/,
        exclude: __dirname,
        loader: require.resolve("babel-loader"),
        options: {
          rootMode: "upward"
        }
      });

      return webpackConfig;
    }
  },
  typescript: {
    enableTypeChecking: true
  },
  eslint: {
    enable: true,
    configure: eslintConfig
  }
};
