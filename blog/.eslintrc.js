const path = require('path')

module.exports = {
  extends: [require.resolve('lint')],
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": './webpack/webpack.dev.config.js'
      }
    }
  },
  rules: {
    "import/no-extraneous-dependencies": ["error", {
      "packageDir": [
        './',
        '../',
        path.resolve(__dirname, '../components'),
    ]}]
  }
}
