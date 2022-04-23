const { merge } = require('webpack-merge')
const path = require('path')

const common = require('../../webpack.common')

const paths = {
  assets: path.resolve(__dirname, '../dist/assets'), 
  src: path.resolve(__dirname, '../src'),
  htmlTemplate: path.resolve(__dirname, '../template.ejs')
}

module.exports = merge(common(paths), {
  mode: 'production',
  entry: `${paths.src}/index.tsx`,
  devtool: 'source-map',
  resolve: {
    alias: {
      components: path.resolve(__dirname, '../../components')
    },
    extensions: ['.tsx', '.ts', '.scss', '.js']
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
})
