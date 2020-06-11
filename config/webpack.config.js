const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: "development",
    entry: [
        './src/hello-world.ts',
        './src/test.ts'
    ],
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
