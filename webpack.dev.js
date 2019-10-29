const webpackConfig = require('./webpack.config');

module.exports = Object.assign({}, webpackConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
});
