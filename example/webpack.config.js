/**
 * @fileoverview webapck
 * @author burning (www.cafeinit.com)
 * @version 2017.07.28
 */

const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    'main': './src/main.js'
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },

      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'ci-navigation': path.resolve(__dirname, '../dist/ci-navigation.js')
    }
  },

  devServer: {
    historyApiFallback: true,
    noInfo: true,
    contentBase: './dist',
    // host: config.host,
    // port: config.port
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
}
