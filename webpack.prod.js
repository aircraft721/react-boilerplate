const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    module: {
        rules: [
            { test: /\.sass$/,
                use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader','sass-loader'],
                        publicPath: '/dist'
                    })
            },
        ]
    },
    devtool: 'source-map',
    plugins: [
        new UglifyJSPlugin({
            test: /\.js$/,
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin({
            filename: 'main.css',
            disable: false,
            allChunks: true
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
})