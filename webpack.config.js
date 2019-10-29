const path = require('path');
const STATIC_PATH = './build/';

module.exports = {
    entry: {
        zephyrus: './src/index.js',
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, STATIC_PATH),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                targets: {
                                    browsers: ['ie 9', 'last 2 versions'],
                                },
                            },
                        ],
                    ],
                },
            },
            {
                enforce: 'pre',
                test: /\.(js)$/,
                exclude: /(node_modules|polyfills)/,
                loader: 'eslint-loader',
                options: {
                    fix: true,
                },
            },
        ],
    },
};
