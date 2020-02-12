/**
 * Jest configuration
 */
module.exports = {
  verbose: true,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts,tsx,js,jsx}",
    "!<rootDir>/src/**/index.ts",
    "!<rootDir>/src/**/*stories.(ts|md|js)x",
    "!**/*.d.ts"
  ],
  coverageReporters: ["json-summary", "text", "lcov"],
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  rootDir: "../",
  roots: ["<rootDir>/src"],
  // Jest comes with JSDOM@11 by default to support Node@6
  // Newer versions have much better Canvas support
  testEnvironment: "jest-environment-jsdom-fifteen",
  testRegex: "test\\.tsx?$",
  transform: {
    "\\.(js|ts)x?$": "babel-jest",
    // Use jest-raw-loader for CSS because we inject global styles using
    // Emotion's <Global /> component.
    "\\.css$": "jest-raw-loader"
  },
  setupFiles: ["<rootDir>/.jest/setup.js"],
  // By default, all node_modules are ignored
  // Be sure to process bootstrap's reboot.css during testing
  // react-syntax-highlighter also needs an exception as well
  transformIgnorePatterns: [
    "node_modules/(?!(bootstrap-reboot|react-syntax-highlighter)/)"
  ]
};
