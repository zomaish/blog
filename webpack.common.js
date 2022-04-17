const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (paths) => {
  const plugins = [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
]
  if (paths.htmlTemplate) {
    plugins.unshift(
      new HtmlWebpackPlugin({
        template: paths.htmlTemplate
      })
    )
  }
  
  return {
    output: {
      path: paths.assets,
      filename: '[name].bundle.js',
      clean: true,
    },
    optimization: {
      usedExports: true,
      emitOnErrors: true,
    },
    plugins,
    module: {
      rules: [
        {
          test: /\.jpe?g|png$/,
          exclude: /node_modules/,
          use: ['url-loader', 'file-loader']
        },
        {
          test: /\.tsx?$/,
          enforce: 'pre',
          loader: 'source-map-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.tsx?$/,
          loader:'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                // Prefer `dart-sass`
                implementation: require('sass'),
                sassOptions: {
                  fiber: false,
                  outputStyle: 'compressed',
                },
              },
            }
          ]
        }
      ]
    }
  }
}
