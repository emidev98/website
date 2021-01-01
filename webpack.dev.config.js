const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/app.tsx',
    devtool: 'inline-source-map',
    devServer: {
        clientLogLevel: 'info',
        contentBase: './dist',
        open: true
    },
    output: {
        publicPath: './',
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.(ts|tsx|js)$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    configFile: './.dev.babelrc'
                }
            }
        }, {
            test: /\.scss$/,
            exclude: /(node_modules)/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.(png|jpg)$/,
            exclude: /(node_modules)/,
            use: [
                'url-loader'
            ]
        }]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: './index.html'
        })
    ],
};