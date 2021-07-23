const path = require('path');
const babelrc = require('./babelrc.json');

module.exports = {
  devtool: 'source-map',
  entry: './index',
  externals: [ '@mkoliba/phylogeny-tree', /^@mkoliba\/phylogeny-tree\/.+$/ ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [ /node_modules\// ],
        use: {
          loader: 'babel-loader',
          options: babelrc,
        },
      },
    ],
  },
  resolve: {
    modules: [ 'node_modules', path.resolve(__dirname, 'node_modules') ],
  },
  output: {
    publicPath: '/dist/',
    path: path.resolve('dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  target: 'web',
};
