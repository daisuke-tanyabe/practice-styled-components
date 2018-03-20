import glob from 'glob';

const entry = glob.sync('./src/**/*.?(js|jsx)').reduce((previous, current) => {
  const key = current.replace(/^\.\/src\//, '').replace(/\.jsx?$/, '');
  previous[key] = ['babel-polyfill', current];

  return previous;
}, {});

module.exports = {
  mode: process.env.NODE_ENV,
  entry,
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].bundle.js'
  },
  devServer: {
    contentBase: `${__dirname}/src`,
    publicPath: '/',
    port: '8080',
    historyApiFallback: true
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

console.log(entry);
