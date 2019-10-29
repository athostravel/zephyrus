const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpackConfig = require('./webpack.config');

module.exports = Object.assign({}, webpackConfig, {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          ie8: false,
          mangle: true,
          output: {
            comments: false,
            beautify: false,
          },
          compress: true,
          warnings: false,
        },
        parallel: true,
      }),
    ],
    occurrenceOrder: true,
    concatenateModules: true,
    namedModules: true,
    noEmitOnErrors: true,
  },
});
