var Webpack = require('webpack')

module.exports = {
  devtool: '#eval-source-map',

  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './src/index.jsx'
  ],

  output: {
    filename: 'dist/app.js',
    path: __dirname,
    publicPath: '/',
    devtoolModuleFilenameTemplate: '[resource-path]'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.css', '.md'],
    modulesDirectories: [ 'web_modules', 'node_modules', 'src']
  },

  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    loaders: [
      {
        test    : /\.jsx*$/,
        exclude : /node_modules/,
        loader  : 'react-hot!babel?stage=1'
      },
      {
        test    : /\.json$/,
        loader  : 'json-loader'
      }
    ]
  }
}
