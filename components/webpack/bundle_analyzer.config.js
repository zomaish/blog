const common = require('./webpack.common')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
    mode: 'production',
    entry: `${common.paths.src}/index.tsx`,
    stats: {
        children: true
    },
    module: common.moduleConfig,
    optimization: {
        usedExports: true,
      },
    plugins: [
    new BundleAnalyzerPlugin()],
  }
