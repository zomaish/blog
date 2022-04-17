const common = require('./webpack.common')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: `${common.paths.src}/index.tsx`,
    output: common.output,
    devtool: 'source-map',
    optimization: {
      usedExports: true,
      emitOnErrors: true,
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
  },
    module: common.moduleConfig,
    plugins: [new HtmlWebpackPlugin({
      template: '/Users/zomaish/projects/blog/template.ejs'
    })],
    devServer: {
        static: {
            publicPath: `http://localhost:${common.devPort}/assets`,
        },
        open: true,
        hot: true,
        port: common.devPort
    }
  }