import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import base  from './webpack.base';

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../src'),
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
