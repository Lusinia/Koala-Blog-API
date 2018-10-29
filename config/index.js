const isProd = process.env.NODE_ENV === 'production';
let webpackConfig = null;

if (isProd) {
  webpackConfig = require('./webpack.prod.babel.js');
} else {
  webpackConfig = require('./webpack.dev.babel.js');
}

module.exports = webpackConfig;
