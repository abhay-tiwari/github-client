/** @type {import('jest').Config} */
const config = {
  preset: "ts-jest",
  verbose: true,
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  setupFilesAfterEnv: ["./src/setupTests.js"],
};

module.exports = config;
