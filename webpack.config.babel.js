import glob from 'glob';

const entry = glob.sync('./src/step[0-9]/index.?(js|jsx)').reduce((previous, current) => {
  const key = current.replace(/^\.\/src\//, '').replace(/\.jsx?$/, '');
  previous[key] = ['babel-polyfill', current];

  return previous;
}, {});

module.exports = {
  mode: process.env.NODE_ENV,
  entry,
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].bundle.js',
    publicPath: '/' // この設定記述がなかったのでhot-loaderが動かなかった？
  },
  devServer: {
    contentBase: `${__dirname}/src`,
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
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
