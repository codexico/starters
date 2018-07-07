// jest.config.js
var enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });

module.exports = {
  "testPathIgnorePatterns": [
    "<rootDir>/cypress/",
    "<rootDir>/node_modules/"
  ]
};
