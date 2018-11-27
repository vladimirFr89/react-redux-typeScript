'use strict';
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

console.log('INFO:');
console.log(__dirname);
console.log(path.resolve(__dirname, 'index.html'));
console.log(path.resolve(__dirname, './src'));

module.exports = {
    entry: path.resolve(__dirname, './src'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main_bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader','css-loader']
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },

    resolve: {
        extensions: [ '.tsx','.ts', '.js' ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Simple TODO',
            template: path.resolve(__dirname, 'index.html')
        })
    ]
};