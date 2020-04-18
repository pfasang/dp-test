const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin');
const Dotenv = require('dotenv-webpack');
const {
    NODE_ENV = 'production',
} = process.env;

module.exports = {
    entry: './src/server.ts',
    externals: [nodeExternals()],
    mode: NODE_ENV,
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
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new Dotenv(),
        new WebpackShellPlugin({
            onBuildEnd: ['npm run build:dev']
        })
    ],
    watchOptions: {
        poll: true
    },
    watch: NODE_ENV === 'development'
};
