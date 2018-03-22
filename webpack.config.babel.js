import CopyWebpackPlugin from 'copy-webpack-plugin';
import WriteFilePlugin from 'write-file-webpack-plugin';

import glob from 'glob';

const entry = glob.sync('./src/js/**/index.?(js|jsx)').reduce((previous, current) => {
  const key = current.replace(/^\.\/src\//, '').replace(/\.jsx?$/, '');
  previous[key] = ['babel-polyfill', current];

  return previous;
}, {});

module.exports = {
  mode: process.env.NODE_ENV,
  entry,
  output: {
    path: `${__dirname}/dist`,
    filename: 'assets/[name].bundle.js',
    publicPath: '/' // この設定記述がなかったのでhot-loaderが動かなかった？
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: `${__dirname}/dist`,
    port: '8080',
    publicPath: '/',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: '/node_modules/',
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        context: 'src/html',
        from: '**/*'
      }
    ]),
    new WriteFilePlugin({
      test: /\.html$/
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
