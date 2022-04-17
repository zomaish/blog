
import {paths, moduleConfig} from './webpack.common'

module.exports = {
    mode: 'development',
    entry: `${paths.src}/index.tsx`,
    output: {
      path: paths.assets,
      filename: '[name].bundle.js',
    },
    optimization: {
      noEmitOnErrors: true,
    },
    module: moduleConfig
  }
