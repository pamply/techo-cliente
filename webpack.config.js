const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader'
            }, {
                test: /\.(mov|png)$/,
                loader: 'file-loader'
            }
        ]
    },
    devServer: {
        contentBase: [path.join(__dirname, 'public'), path.join(__dirname, 'build')],
        historyApiFallback: true,
        port: 9000
    }
}