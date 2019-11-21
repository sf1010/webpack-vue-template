const path = require('path');
const config = require('./webpack.base.config');

config.devServer = {
  historyApiFallback: true,
  contentBase: path.resolve(__dirname, '../dist'),
  host: '127.0.0.1',
  compress: true,
  port: 8080,
  open: true,
};

module.exports = config;
