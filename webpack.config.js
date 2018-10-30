const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'main.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  mode: 'development',
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
};
