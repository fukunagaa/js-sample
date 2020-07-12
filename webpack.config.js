const path = require('path');

const app = {
  mode: 'development',
  // エントリポイントの定義
  entry: {
    app: ['@babel/polyfill', path.join(__dirname, 'src/cliant/app.js')],
  },
  // 出力先の定義
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    // モジュール解決定義
    modules: ['node_modules', path.resolve(__dirname, 'src')],
  },
  devtool: 'inline-source-map',
  module: {
    // babel の実行定義
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    ],
  },
};

const server = {
  mode: 'development',
  // node_moduleを使うために必要(クライアントは必要なさそう。)
  target: 'node',
  // node_moduleの読み込み解消のため
  node: {
    fs: 'empty'
  },
  // エントリポイントの定義
  entry: {
    server: ['@babel/polyfill', path.join(__dirname, 'src/server/app.js')],
  },
  // 出力先の定義
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    // モジュール解決定義
    modules: ['node_modules', path.resolve(__dirname, 'src')],
  },
  devtool: 'inline-source-map',
  module: {
    // babel の実行定義
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    ],
  },
};


module.exports = [
  server, app
];