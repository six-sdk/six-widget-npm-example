const path = require('path')
const webpack = require('webpack')

// make sure we define NODE_ENV, used by React
nodeEnvPlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production')
})

module.exports = {
  entry: [ "./src/index.js" ],
  output: {
      publicPath: 'dist/',
      path: 'dist',
      filename: 'bundle.min.js'
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  debug: true,
  devtool: 'source-map',
  plugins: [nodeEnvPlugin]
}
