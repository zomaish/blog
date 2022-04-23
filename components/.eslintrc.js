module.exports = {
  extends: [require.resolve('lint')],
  rules: {
    "import/no-extraneous-dependencies": ["error", {
      "packageDir": [
        './',
        '../'
    ]}]
  }
}
