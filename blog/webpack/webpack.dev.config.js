const common = require('./webpack.common')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: `${common.paths.src}/index.tsx`,
    output: common.output,
    devtool: 'inline-source-map',
    optimization: {
      usedExports: true,
      emitOnErrors: true,
    },
    module: common.moduleConfig,
    plugins: [new HtmlWebpackPlugin({
        template: path.join(__dirname, '../template.ejs')
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