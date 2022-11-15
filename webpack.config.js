const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'react-geno.js',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    experiments: {
        topLevelAwait: true,
    }
}
