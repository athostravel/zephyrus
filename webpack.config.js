const { resolve } = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackConfig = (env) => {
    const isProduction = process.argv.indexOf('--production') >= 0
    const publicPath = (env && env.publicPath) || '/'

    let options = {
        stats: 'minimal',
        entry: {
            build: './src/index.js'
        },
        output: {
            path: resolve('./build'),
            filename: '[name].js',
            publicPath: publicPath
        },
        resolve: {
            extensions: ['.js', '.json'],
            alias: {
                '@': resolve('./src')
            }
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env']
                            }
                        },
                        {
                            loader: 'eslint-loader'
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './trash/index.html',
                filename: 'index.html'
            })
        ],
        performance: {
            hints: false
        }
    }

    if (!isProduction) {
        options = Object.assign(options, {
            mode: 'development',
            devtool: 'source-map',
            devServer: {
                contentBase: ['./build', './src'],
                watchContentBase: true,
                open: true,
                compress: true,
                hot: true,
                port: 8080,
                historyApiFallback: true
            }
        })
    }

    if (isProduction) {
        options = Object.assign(options, {
            mode: 'production',
            optimization: {
                minimizer: [
                    new TerserPlugin()
                ]
            }
        })
    }

    return options
}

module.exports = env => {
    return webpackConfig(env)
}
