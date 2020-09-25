'use strict'
var webpack = require('webpack')
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

// 手动设置为生产打包
process.env.NODE_ENV = 'production';

module.exports = {
  context: path.resolve(__dirname, '../'),
  // 使用client/server的入口
  // entry: {
  //   app: './src/main.js'
  // },
  externals: {
    "BMap": "BMap"
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "windows.jQuery": "jquery"
    }),
    new ExtractTextPlugin({
      // filename: 'common.[chunkhash].css'
      filename: utils.assetsPath('css/[name].[chunkhash].css')
    })
  ],
  output: {
    path: config.build.assetsRoot,
    // filename: '[name].js',
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    publicPath: process.env.NODE_ENV === 'production' ?
      config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'jquery': "jquery/src/jquery"
    }
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      // {
      //   test: /\.vue$/,
      //   loader: 'vue-loader',
      //   options: {
      //     // enable CSS extraction
      //     extractCSS: true
      //   }
      // },
      {
        test: /\.css$/,
        // 重要：使用 vue-style-loader 替代 style-loader
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'vue-style-loader'
        })
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
