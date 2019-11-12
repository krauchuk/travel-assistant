const { resolve } = require('path');
const MiniCssPlugin = require('mini-css-extract-plugin');

const config = {
  entry: {
    bundle: './src/index',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: [
      resolve(__dirname, 'src'),
      resolve(__dirname, 'node_modules'),
    ],
  },
  output: {
    filename: 'scripts/[name].js',
    path: resolve(__dirname, 'dist'),
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
        test: /\.(ts|js)x?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: 'eslint-loader',
      },
      {
        test: /\.(ts|js)x?$/,
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
    new MiniCssPlugin({
      filename: '[name].css',
    }),
  ],
};

module.exports = config;
