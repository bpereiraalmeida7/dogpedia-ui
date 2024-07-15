const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, 'src/styles/')
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
        include: path.resolve(__dirname, 'src')
      }
    ]
  }
};
