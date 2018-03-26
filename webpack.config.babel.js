import CopyWebpackPlugin from 'copy-webpack-plugin';
import WriteFilePlugin from 'write-file-webpack-plugin';

import glob from 'glob';
import rimraf from 'rimraf';

const DEST_DIR = `${__dirname}/dest`;

const mode = process.env.NODE_ENV;

const entry = glob.sync('./src/js/step[0-9]/index.?(js|jsx)').reduce((previous, current) => {
  const key = current.replace(/^\.\/src\//, '').replace(/\.jsx?$/, '');
  previous[key] = ['babel-polyfill', current];

  return previous;
}, {});

function deleteDirectory(directory) {
  // 同期処理にしないとダメかも
  rimraf.sync(directory);
  console.log(`\nDeleted: ${directory}`);
}

class MyPlugin {
  apply(compiler) {
    if (compiler.hooks) {
      // v4 対応
      compiler.hooks.watchClose.tap({ name: 'MyPlugin' }, () => deleteDirectory(DEST_DIR));
    } else {
      // v3 対応
      compiler.plugin('watchClose', () => deleteDirectory(DEST_DIR));
    }
  }
}

module.exports = {
  mode,
  entry,
  output: {
    path: DEST_DIR,
    filename: 'assets/[name].bundle.js',
    publicPath: '/' // この設定記述がなかったのでhot-loaderが動かなかった？
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: DEST_DIR,
    port: '8080',
    publicPath: '/',
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader?cacheDirectory',
          'stylelint-custom-processor-loader',
          'eslint-loader'
        ],
        exclude: '/node_modules/',
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        context: 'src/html',
        from: '**/*',
        cache: true
      }
    ]),
    new WriteFilePlugin({
      test: /\.html$/
    }),
    new MyPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  cache: true
};
