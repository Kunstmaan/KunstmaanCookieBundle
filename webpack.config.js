const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/Resources/ui/js/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'bin'),
    },
    plugins: [
        new CleanWebpackPlugin(['bin']),
    ],
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: [/node_modules/, /\*.test.js/],
                loader: 'eslint-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                useBuiltIns: 'usage',
                                targets: {
                                    browsers: ['last 2 versions', 'ie >= 10'],
                                },
                            }],
                        ],

                    },
                },
            },
        ],
    },
};
