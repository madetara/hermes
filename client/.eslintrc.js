module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  rules: {
    "no-unused-vars": ["error"]
  }
}