module.exports = {
  moduleFileExtensions: ["js", "vue", "json"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\.js?$": "babel-jest"
  },
  testURL: "http://localhost/",
  transformIgnorePatterns: ["<rootDir>/node_modules/"]
};
