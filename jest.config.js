module.exports = {
  preset: 'ts-jest',
  verbose: true,
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts']
};
