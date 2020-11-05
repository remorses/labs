const path = require("path");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    {name: "@storybook/addon-links"},
    {name: "@storybook/addon-essentials"},
    {
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: {
          transpileOnly: true,
          configFile: path.resolve(__dirname, '../tsconfig.json'),
          // configFile: path.resolve(__dirname, '../../../../../tsconfig.json'),
        },
        forkTsCheckerWebpackPluginOptions: {
          colors: false, // disables built-in colors in logger messages
          // typescript: {
          //   enabled: false,
          //   // configFile: path.resolve(__dirname, '../../../../../tsconfig.json')
          // }
        },
        include: [
          path.resolve(__dirname, '../src')
        ],
        transpileManager: true,
      },
    },
  ],
  // webpackFinal: async config => {
  //   return {
  //     ...config,
  //     resolve: {
  //       ...config.resolve || {},
  //       alias: {
  //         ...((config.resolve || {}).alias || {}),
  //         'core-js': require.resolve('core-js'),
  //       },
  //     },
  //   };
  // }
}
