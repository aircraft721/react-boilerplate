const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, use: ['babel-loader'] },
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'app/public/index.html'
        }), 
        new CleanWebpackPlugin(['dist']),
    ]
}