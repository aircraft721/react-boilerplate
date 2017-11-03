const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = merge(common, {
    module: {
        rules: [
            { test: /\.sass$/,
                use: ['style-loader','css-loader','sass-loader']
            },
        ]
    },
    devServer: {
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new DashboardPlugin()
    ]
})