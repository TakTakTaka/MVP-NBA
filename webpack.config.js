const path = require('path');
const src_dir = path.join(__dirname, '/public', '/src');
const dist_dir = path.join(__dirname, 'public', 'dist');

module.exports = {
  entry: path.join(src_dir, 'App.jsx'),
  output: {
    path: dist_dir,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: src_dir,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ],
  }
  // module: {
  //   rules: [
  //     {
  //       test: /\.m?js$/,
  //       exclude: /(node_modules|bower_components)/,
  //       use: {
  //         loader: 'babel-loader',
  //         options: {
  //           presets: ['@babel/preset-env']
  //         }
  //       }
  //     }
  //   ]
  // }
}