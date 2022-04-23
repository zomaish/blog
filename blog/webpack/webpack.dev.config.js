const { merge } = require('webpack-merge')
const path = require('path')

const common = require('../../webpack.common')

const paths = {
  assets: path.resolve(__dirname, '../dist/assets'), 
  src: path.resolve(__dirname, '../src'),
  htmlTemplate: path.resolve(__dirname, '../template.ejs')
}


module.exports = merge(common(paths), {
  mode: 'development',
  entry: {
    index: `${paths.src}/index.tsx`
  },
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      Components: path.resolve(__dirname, '../../components')
    },
    extensions: ['.tsx', '.ts', '.scss', '.js']
  },
  devServer: {
    static: {
      publicPath: `http://localhost:${common.devPort}/assets`,
    },
    client: {
      logging: 'info',
    },
    historyApiFallback: true,
    hot: true,
    port: 8080
  }
})
