/**
 * @fileoverview webapck
 * @author burning (www.cafeinit.com)
 * @version 2017.07.26
 */

const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    'ci-dialog': './src/vue/index.js'
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    library: 'CIDialog',
    // libraryTarget: 'var'  // Export by setting a variable: var Library = xxx (default)
    libraryTarget: 'amd'  // Export to AMD (optionally named - set the name via the library option)
    // libraryTarget: 'umd'  // Export to AMD, CommonJS2 or as property in root
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

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      // sourceMap: true,
      // compress: {
      //   warnings: false
      // }
      sourceMap: false,
      compress: {
        warnings: true
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
}
