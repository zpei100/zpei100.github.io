const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/client/index'),
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      loader: 'babel-loader'
    },{
      test: /.css$/,
      loader: ['style-loader', 'css-loader']
    },
    {
      test: /\.(png|jpg|gif|eot|ttf|woff|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {},
        },
      ],
    },
  ]
  },
  devtool: 'source-map',
};