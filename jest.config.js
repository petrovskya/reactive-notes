module.exports = {
  bail: 1,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.(js|ts)?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['./src/tests/setupTests.ts'],
  moduleNameMapper: {
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|pdf|css)$':
      '<rootDir>/src/tests/fileMock.ts',
    'assets/(.*)': '<rootDir>/src/assets/$1',
    '^@mui/(.*)$': '<rootDir>/node_modules/@mui/$1',
  },
};
