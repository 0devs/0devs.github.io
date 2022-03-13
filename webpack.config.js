const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    'main': './src/index.tsx',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      title: 'web-tools',
      hash: true,
      chunks: ['main'],
      filename: 'index.html'
    }),
    // new HtmlWebpackPlugin({
    //   inject: true,
    //   title: 'test - web-tools',
    //   hash: true,
    //   chunks: ['test'],
    //   filename: 'test/index.html'
    // }),
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: '[name]/bundle.js',
    path: path.resolve(__dirname, 'docs')
  },
  devServer: {
    historyApiFallback: true,
  },
};
