// needs to be a `babel.config.js` and not a `.babelrc` or it gets ingored
// https://github.com/facebook/jest/issues/6933#issuecomment-419905270

module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            node: "current"
          }
        }
      ],
      "@babel/preset-react",
      "@babel/preset-typescript"
    ],
    plugins: [
      "@babel/plugin-proposal-export-default-from"
    ]
  };
};
