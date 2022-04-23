module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'prefer-arrow-functions',
    '@typescript-eslint',
  ],
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/function-component-definition": [2, {
      namedComponents: "arrow-function",
      unnamedComponents: "arrow-function"
    }],
    "react/jsx-wrap-multilines": [2, {"declaration": "parens"}],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'comma-dangle': [1, 'never'],
    semi: [2, 'never'],
    'react/jsx-closing-bracket-location': [1, 'after-props'],
    'import/prefer-default-export': 0,
    // 'func-style': ["error", "expression", { "allowArrowFunctions": true }],
    "prefer-arrow-functions/prefer-arrow-functions": [
      "warn",
      {
        "classPropertiesAllowed": false,
        "disallowPrototype": false,
        "returnStyle": "unchanged",
        "singleReturnOnly": false
      }
    ],
    'prefer-arrow-callback': "error",
    indent: ["error", 2],
    quotes: ["error", "single"],
    'quote-props': ['error', 'consistent'],
    'arrow-body-style': ['error', 'never'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ]
  }
}
