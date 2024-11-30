/** @type {import('jest').Config} */
module.exports = {
  // Specify the test environment (e.g., Node.js)
  testEnvironment: "node",

  // Configure how Jest transforms TypeScript files using ts-jest
  transform: {
    "^.+\\.ts$": "ts-jest",
  },

  // Specify module file extensions Jest should recognize
  moduleFileExtensions: ["ts", "js", "json"],

  // Define test file patterns
  testMatch: ["**/test/**/*.test.ts", "**/__tests__/**/*.test.ts"],

  // Automatically clear mock calls and instances between tests
  clearMocks: true,

  // Collect coverage information and specify output locations
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts"],
  coverageDirectory: "coverage",
  coverageReporters: ["json", "text", "lcov", "clover"],

  // Enable verbose test results
  verbose: true,

  // Configure paths for resolving modules if needed (optional)
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
