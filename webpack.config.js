var webpack = require('webpack');

module.exports = {
    entry: "./app.js",
    output: {
        filename: "public/js/compiled.js",
        sourceMapFilename: "public/js/compiled.map"
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    },
    // plugins: [
    //   new webpack.optimize.UglifyJsPlugin({minimize: true})
    // ]
}
