const { resolve } = require('path');
const webpack = require('webpack');
const MiniCssPlugin = require('mini-css-extract-plugin');

const config = {
  entry: {
    bundle: './src/index',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      resolve(__dirname, 'src'),
      resolve(__dirname, 'node_modules'),
    ],
  },
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: 'scripts/[name].js',
    path: resolve(__dirname, 'devel'),
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: 'eslint-loader',
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
      },
      {
        test: /\.scss/,
        exclude: /node_modules/,
        use: [
          MiniCssPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new MiniCssPlugin({
      filename: '[name].css',
    }),
  ],
  devServer: {
    contentBase: resolve(__dirname, 'devel'),
    publicPath: '/',
    historyApiFallback: true,
    port: 8888,
    inline: true,
    hot: true,
  },
};

module.exports = config;
