module.exports = {
  testTimeout: 3600000,
  projects: [
    {
      displayName: "test-node",
      testEnvironment: require.resolve(`jest-environment-node`),
      testMatch: [
        "<rootDir>/typescript-public/*/*/*/src/**/__tests__/**/*.node.{ts,tsx}"
      ],
      transformIgnorePatterns: ["/node_modules/", "/lib/", "/.pnp.js$"],
      moduleNameMapper: {
        "\\.(css|less|sass|scss|svg)$": "identity-obj-proxy"
      },
      testPathIgnorePatterns: [],
      roots: ["<rootDir>/typescript-public"],
      collectCoverageFrom: [
        "<rootDir>/typescript-public/*/*/*/src/**/*.{ts,tsx}",
        "!<rootDir>/typescript-public/**/*.d.ts",
        "!<rootDir>/typescript-public/*/*/*/src/**/__tests__/**/*.{ts,tsx}"
      ],
      testTimeout: 3600000,
      resolver: require.resolve(`jest-pnp-resolver`),
      watchPlugins: [
        "jest-watch-typeahead/filename",
        "jest-watch-typeahead/testname"
      ],
      // extraGlobals: ["Math"],
      coveragePathIgnorePatterns: ["/node_modules/", "/lib/", "/__.*__/"],
      moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "web.ts",
        "web.tsx",
        "web.js",
        "web.jsx",
        "node"
      ],
      collectCoverage: true
    },
    {
      displayName: "test-web",
      roots: ["<rootDir>/typescript-public"],
      testEnvironment: "jest-environment-jsdom-fourteen",
      setupFiles: ["react-app-polyfill/jsdom"],
      setupFilesAfterEnv: ["<rootDir>/Scripts/jest/setup-tests.ts"],
      testMatch: [
        "<rootDir>/typescript-public/*/*/*/src/**/__tests__/**/*.web.{ts,tsx}"
      ],
      transform: {
        "^.+\\.(js|jsx|ts|tsx)$": require.resolve("babel-jest"),
        "^.+\\.css$": "<rootDir>/Scripts/jest/css-transform.js",
        "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)":
          "<rootDir>/Scripts/jest/file-transform.js"
      },
      transformIgnorePatterns: [
        "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
        "^.+\\.module\\.(css|sass|scss)$"
      ],
      modulePaths: [],
      moduleNameMapper: {
        "^react-native$": "react-native-web",
        "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
      },
      roots: ["<rootDir>/typescript-public"],
      collectCoverageFrom: [
        "<rootDir>/typescript-public/*/*/*/src/**/*.{ts,tsx}",
        "!<rootDir>/typescript-public/**/*.d.ts",
        "!<rootDir>/typescript-public/*/*/*/src/**/__tests__/**/*.{ts,tsx}"
      ],
      testTimeout: 3600000,
      resolver: require.resolve(`jest-pnp-resolver`),
      watchPlugins: [
        "jest-watch-typeahead/filename",
        "jest-watch-typeahead/testname"
      ],
      // extraGlobals: ["Math"],
      coveragePathIgnorePatterns: ["/node_modules/", "/lib/", "/__.*__/"],
      moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "web.ts",
        "web.tsx",
        "web.js",
        "web.jsx",
        "node"
      ],
      collectCoverage: true
    }
  ]
};
