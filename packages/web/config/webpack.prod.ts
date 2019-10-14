import path from 'path';
import merge from 'webpack-merge';
import base from './webpack.base';

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
module.exports = merge(base, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
});
