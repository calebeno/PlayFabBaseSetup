const webpack = require('webpack');
const path = require('path');
const glob = require('glob');

module.exports = {
    mode: "development",
    entry: glob.sync('./src/**/*.+(js|ts)'), // get all js and ts files in src
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    plugins: [
        new webpack.ProgressPlugin(),
    ],
    output: {
        filename: '../bundle.js',
        path: path.resolve(__dirname),
    },
};
