// eslint-disable-next-line no-undef
module.exports = {
  ignorePatterns: [
    "**/node_modules/**/*",
    "**/dist/**/*",
    "**/lib/**/*",
    "**/build/**/*",
    "**/generated/**/*",
    "**/coverage/**/*",
    "**/storybook-static/**/*",
    "**/*.js"
  ],
  settings: {
    react: {
      version: "detect"
    },
    jest: {
      version: "detect"
    }
  },
  extends: [
    "eslint:recommended",
    "plugin:eslint-plugin-jsx-a11y/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "plugin:promise/recommended",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript"
  ],
  // eslint-disable-next-line no-undef
  parser: require.resolve("@typescript-eslint/parser"),
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      modules: true
    }
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "promise",
    "import",
    "react-hooks",
    "eslint-plugin-jsx-a11y",
    "jest",
    "prettier"
  ]
};
