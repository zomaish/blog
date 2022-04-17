const path = require('path')

const paths = {
  assets: path.resolve(__dirname, './dist'), 
  src: path.resolve(__dirname, './src')
}

module.exports = {
    mode: 'production',
    entry: `${paths.src}/index.js`,
    output: {
      path: paths.assets,
      filename: 'index.js',
      clean: true,
      library: "lint",
    },
    optimization: {
      usedExports: true,
      emitOnErrors: true,
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
  },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader:'ts-loader',
          exclude: /node_modules/
        },
      ]
    }
  }