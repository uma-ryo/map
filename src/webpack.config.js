const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

module.exports = {
    target: 'web',
    entry: path.join(__dirname, 'main.js'),
    output: {
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            // {
            //     test: /\.js$/,
            //     loader: 'babel-loader',
            //     options: {
            //         presets: [
            //             '@babel/preset-env',
            //         ],
            //     },
            // },
            {
                test: /\.(svg|eot|ttf|woff|woff2)(\?.*)?$/,
                loader: 'url-loader',
            },
            // {
            //     enforce: 'pre',
            //     test: /\.(js|vue)$/,
            //     exclude: /node_modules/,
            //     loader: 'eslint-loader',
            //     options: {
            //         fix: true,
            //     },
            // },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'template.html'),
            inlineSource: '.js$',
        }),
        new HtmlWebpackInlineSourcePlugin(),
        new VueLoaderPlugin(),
        new VuetifyLoaderPlugin(),
    ],
};