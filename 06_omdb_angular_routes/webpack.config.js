var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpackConfig = {
    entry: __dirname + '/js/app.js',
    output: {
        path: __dirname + '/build/',
        filename: "[name].bundle.js"
    },

    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader!autoprefixer-loader' },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract("style", "css?sourceMap!postcss!sass?sourceMap") },
            { test: /\.(woff|woff2|ttf|eot)/, loader: 'url-loader?limit=1000000&name=[name].[ext]' },
            { test: /\.js$/, loader: 'babel', exclude: [/node_modules/] },
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.html$/, loader: 'raw'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        }),
        new ExtractTextPlugin("styles.css")
    ],
    postcss: [ autoprefixer({ browsers: ['last 3 versions', '> 1%'] }) ],
};



module.exports = webpackConfig;
