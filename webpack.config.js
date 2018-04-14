const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const cssParams = [
  {
    loader: 'css-loader',
    options: {
      minimize: true, // 压缩
      modules: true,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: [
        require('autoprefixer')(), // css代码补全
        require('postcss-cssnext')(),
      ],
    },
  },
]

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'js/[name].[hash].js',
  },
  resolve: {
    alias: {
      pages: path.resolve(__dirname, 'src/pages'),
    },
  },
  devServer: {
    // 端口号
    // props: 8086
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(jsx|js)$/,
        loader: 'eslint-loader',
        exclude: [
          path.resolve(__dirname, '../node_modules'),
        ],
      },
      {
        test: /\.(jsx|js)$/,
        // 不处理
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: cssParams,
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: cssParams.concat([{ loader: 'sass-loader' }]),
        }),
      },
      // 图片
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              // 资源文件夹
              name: 'resource/[name].[ext]',
            },
          },
        ],
      },
      // 字体
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              // 资源文件夹
              name: 'resource/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // 复制html文件
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    // 独立css文件
    new ExtractTextPlugin('css/[name].css'),
    // 提取公共模块
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'js/base.js',
    }),
  ],
}
