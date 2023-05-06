const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    globals: './src/index.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: __dirname + '/dist',
    clean: true
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|ttf)$/,
        type: 'asset/resource'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new TerserPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      title: 'Quebec Engenharia',
      template: './src/paginas/index.html',
      description: 'Quebec Engenharia'
    })
  ],
  stats: {
    errorDetails: true
  }
}
