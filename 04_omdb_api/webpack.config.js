var CopyWebpackPlugin = require('copy-webpack-plugin');
var autoprefixer = require('autoprefixer');
var path = require('path');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: __dirname + "/src/scripts/app.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css!postcss" },
            // { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css!postcss") },

            { test: /\.js$/, loader: "babel"},
        ]
    },

    plugins: [
        new CopyWebpackPlugin([
          {from: "src/index.html", to: "index.html"},
        ])
        // new ExtractTextPlugin("styles.css")
    ],

    postcss: [ autoprefixer({ browsers: ['last 3 versions', '> 1%'] }) ],
};