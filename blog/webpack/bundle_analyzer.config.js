const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { merge } = require('webpack-merge')
const path = require('path')

const common = require('../../webpack.common')

const paths = {
  assets: path.resolve(__dirname, '../dist/assets'), 
  src: path.resolve(__dirname, '../src')
}

module.exports = merge(common(paths), {
  mode: 'production',
  entry: `${paths.src}/index.tsx`,
  stats: {
    children: true
  },
  optimization: {
    usedExports: true,
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ]
})
