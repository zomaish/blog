const path = require('path')

const paths = {
  assets: path.resolve(__dirname, '../dist/assets'), 
  src: path.resolve(__dirname, '../src')
}

module.exports = {
  paths,
  output: {
    path: paths.assets,
    filename: '[name].bundle.js',
    clean: true,
  },
  moduleConfig: {
    rules: [
      {
        test: /\.jpe?g|png$/,
        exclude: /node_modules/,
        use: ["url-loader", "file-loader"]
      },
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        loader: "source-map-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        loader:'ts-loader',
        exclude: /node_modules/
      },
    ]
  }
}
