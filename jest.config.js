module.exports = {
  preset: "ts-jest", // Tells Jest to use ts-jest for TypeScript support
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest", // Transform all .ts and .tsx files with ts-jest
  },
};
