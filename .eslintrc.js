module.exports = {
  root: true,
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    requireConfigFile: false,
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "airbnb",
  ],
  rules: {
    strict: [2, "safe"],
    semi: [2, "always"],
    "linebreak-style": "off",
    "no-plusplus": "off",
    "no-empty-label": "off",
    "no-await-in-loop": "off",
    "no-continue": "off",
    "no-param-reassign": "off",
    "no-process-env": "off",
    "arrow-body-style": "off",
    "react/function-component-definition": "off",
    "max-len": [
      2,
      {
        code: 160,
        ignoreComments: true,
        ignoreTrailingComments: true,
      }
    ],
    "object-curly-spacing": [2, "always"],
    "comma-dangle": 0,
    "no-multi-spaces": [2, { exceptions: { VariableDeclarator: true } }],
    "no-extra-semi": 1,
    "no-unreachable": 1,
    "import/no-unresolved": 1,
    "no-return-await": 1,
    quotes: [2, "double", { avoidEscape: true }],
    "import/no-extraneous-dependencies": [
      2,
      {
        devDependencies: [
          "**/*.spec.jsx",
          "**/*.spec.js",
          "**/*._story.js",
          "**/*._story.jsx",
        ],
      },
    ],
    "react/jsx-filename-extension": [2, { allow: "as-needed" }],
    "jsx-a11y/click-events-have-key-events": 1,
    "jsx-a11y/anchor-is-valid": 1,
    "react/forbid-prop-types": 1,
  },
};
