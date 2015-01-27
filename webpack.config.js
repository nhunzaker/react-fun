var Webpack = require('webpack')

module.exports = {
  devtool: 'eval',

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
    new Webpack.ProvidePlugin({
      to5Runtime: "imports?global=>{}!exports-loader?global.to5Runtime!6to5/runtime"
    })
  ],

  module: {
    preLoaders: [
      {
        test: /\.jsx*$/,
        exclude : /node_modules/,
        loader: "source-map-loader"
      }
    ],
    loaders: [
      {
        test    : /\.jsx*$/,
        exclude : /node_modules/,
        loader  : 'react-hot!envify!6to5?experimental&runtime&modules=common',
      },
      {
        test    : /\.json$/,
        loader  : 'json-loader'
      }
    ]
  }
}
