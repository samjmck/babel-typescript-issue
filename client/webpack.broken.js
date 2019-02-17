const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/main.ts',
    output: {
        filename: '[name].[hash].bundle.js',
        chunkFilename: '[name].[chunkhash].chunk.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, '../shared'),
                ],
                // options: {
                //     presets: [
                //         '@babel/preset-typescript',
                //     ],
                // },
                loader: 'babel-loader',
            },
        ]
    },
};
