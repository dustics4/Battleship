module.exports = {
  testEnvironment: "jest-environment-jsdom",
    modulePaths: ['/shared/vendor/modules'],
    moduleFileExtensions: ['js', 'jsx'],
    moduleDirectories: ['node_modules', 'bower_components', 'shared'],
  
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/__mocks__/fileMock.js',
      '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    },
    preset: 'ts-jest',
    transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
    }
  
  };