module.exports = {
  webpack: (
    webpackConfig,
    { buildId, dev, isServer, defaultLoaders, webpack }
  ) => {
    // https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
    // Perform customizations to webpack config
    webpackConfig.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));

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

    // To make pnpm work (@tommy)
    webpackConfig.resolve.symlinks = true;

    return webpackConfig;
  }
};
