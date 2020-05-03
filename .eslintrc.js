module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser:'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', 'js']}
    ],
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': ['off'],
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/label-has-for":"off",
    'no-console' : ["error", { allow: ["tron"] }],
    "no-param-reassign": "off"
    // 'no-useless-return': ["error", {allowElseIf: true}],
  },
  settings: {
    "import/resolver": {
      "babel-plugin-root-import": {
        rootPathSuffix: "src",
      },
    }
  }
};
