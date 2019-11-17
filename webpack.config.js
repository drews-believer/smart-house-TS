const path = require('path');
const copyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    devtool: 'inline-source-map',
    mode: "development",
    entry: './src/index.ts',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        extensions: [ '.ts', '.js' ],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    /*plugins: [new copyWebpackPlugin(["index.html"])],*/
    devServer: {
        /*contentBase: "./dist",*/
        port: 3000
    }
};
