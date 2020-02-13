const template = require("./template");

module.exports = {
  ...template,
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/stories.test.{ts,tsx,js,jsx}"
  ]
};
