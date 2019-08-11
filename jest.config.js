module.exports = {
  moduleNameMapper: {
    ".*css$": require.resolve("./style-mock.js")
  },
  setupFilesAfterEnv: ["<rootDir>/testSetup.js"]
};
