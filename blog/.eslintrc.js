module.exports = {
  extends: [require.resolve('lint')],
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": './webpack/webpack.dev.config.js'
      }
    }
  }
}
