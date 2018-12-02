module.exports = {
  target: 'node',
  output: {
    libraryTarget: 'commonjs'
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules\//,
        use: {
          loader: 'babel-loader',
          options: {
            rootMode: "upward",
          }
        }
      }
    ]
  }
};
