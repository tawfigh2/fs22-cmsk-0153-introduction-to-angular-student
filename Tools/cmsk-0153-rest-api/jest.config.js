

module.exports = {
  preset: "ts-jest",
  "roots": [
    "<rootDir>",
  ],
  "modulePaths": [
    "<rootDir>",
  ],
  moduleFileExtensions: [
    'js', 'ts', 'json'
  ],
  transform: {
    // '^.+\\.ts$': 'ts-jest'
    '^.+\.(ts|tsx|js)$': 'ts-jest',

  },
  // support the same @ -> src alias mapping in source code
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  //testEnvironment: "jsdom",
  verbose: true,
  "testEnvironment": "node",
  "coveragePathIgnorePatterns": [
    "/node_modules/"
  ]

}
