const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
require("babel-polyfill");

module.exports = {
    entry: ['babel-polyfill','./app/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            { test: /\.(js|jsx|ts|tsx)$/, use: ['babel-loader'] },
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'app/public/index.html'
        }), 
        new CleanWebpackPlugin(['dist']),
    ]
}