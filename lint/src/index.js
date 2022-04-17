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
        '@typescript-eslint'
    ],
    rules: {
        'comma-dangle': [1, 'never'],
        'import/no-extraneous-dependencies': ['error', {packageDir: ['../']}],
        'react/jsx-filename-extension': [1, { 'extensions': ['.tsx'] }],
        'semi': [2, 'never'],
        'react/jsx-closing-bracket-location': [1, 'after-props'],
        'import/prefer-default-export': 0
    }
}
