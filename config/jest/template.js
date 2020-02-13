/**
 * Jest configuration
 */
module.exports = {
  verbose: true,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.test.{ts,tsx,js,jsx}",
    "<rootDir>/src/**/*stories.{ts,tsx,js,jsx}",
    "!<rootDir>/src/**/index.ts",
    "!<rootDir>/src/**/stories.*.{ts,tsx,js,jsx}",
    "!**/*.d.ts"
  ],
  coverageReporters: ["json-summary", "text", "lcov"],
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  rootDir: "../../",
  roots: ["<rootDir>/src"],
  // Jest comes with JSDOM@11 by default to support Node@6
  // Newer versions have much better Canvas support
  testEnvironment: "jest-environment-jsdom-fifteen",
  transform: {
    "\\.(js|ts)x?$": "babel-jest",
    // Use jest-raw-loader for CSS because we inject global styles using
    // Emotion's <Global /> component.
    "\\.css$": "jest-raw-loader"
  },
  setupFiles: [
    "<rootDir>/config/jest/setup.js",
    "<rootDir>/config/jest/cssTransform.js",
    "<rootDir>/config/jest/fileTransform.js"
  ],
  // By default, all node_modules are ignored
  // Be sure to process bootstrap's reboot.css during testing
  // react-syntax-highlighter also needs an exception as well
  transformIgnorePatterns: [
    "node_modules/(?!(bootstrap-reboot|react-syntax-highlighter)/)"
  ]
};
