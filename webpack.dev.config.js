const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    home: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
    clean: true
  },
  mode: 'development',
  devServer: {
    static: { directory: __dirname + '/dist' },
    devMiddleware: {
      index: 'index.html',
      writeToDisk: true
    },
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|ttf)$/,
        type: 'asset/resource'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()],
  stats: {
    errorDetails: true
  }
}
