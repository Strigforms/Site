const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    globals: './src/index.js',
    script: './src/js/script.js',
    script2: './src/js/script2.js'
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
  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['globals', 'script'],
      title: 'Quebec Engenharia',
      template: './src/paginas/index.html',
      description: 'Quebec Engenharia',
      minify: false
    }),
    new HtmlWebpackPlugin({
      filename: 'barragem.html',
      chunks: ['globals', 'script2'],
      title: 'Quebec Engenharia',
      template: './src/paginas/Barragem/Barragem.html',
      description: 'Quebec Engenharia',
      minify: false
    })
  ]
}
