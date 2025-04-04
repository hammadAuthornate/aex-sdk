module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testTimeout: 20000,
    testPathIgnorePatterns: [
      "/node_modules/",
      "\\.test\\.d\\.ts$"  // Ignore files ending with .test.d.ts
    ]
  };