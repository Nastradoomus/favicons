module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      "eslint:recommended",
    ],
    parserOptions: {
      ecmaVersion: 2020,
    },
    rules: {
      quotes: [2, "double", { avoidEscape: true }],
    },
  };
