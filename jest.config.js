/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "node",

  transform: {
    "^.+\\.ts$": "ts-jest",
  },

  moduleFileExtensions: ["ts", "js", "json"],

  testMatch: ["**/test/**/*.test.ts", "**/__tests__/**/*.test.ts"],

  clearMocks: true,

  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts"],
  coverageDirectory: "coverage",
  coverageReporters: ["json", "text", "lcov", "clover"],

  verbose: true,

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
