const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

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
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(svg|eot|ttf|woff|woff2)(\?.*)?$/,
                loader: 'url-loader',
            },
        ],
    },
    optimization: {
        splitChunks: {
            name: 'vendor',
            chunks: 'initial',
        }
    },
    plugins: [
        new Dotenv({
            path: `.env.${process.env.NODE_ENV}`,
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'template.html'),
        }),
        new MiniCssExtractPlugin(),
        new VueLoaderPlugin(),
        new VuetifyLoaderPlugin(),
    ],
};