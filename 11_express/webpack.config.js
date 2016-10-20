var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var frontend = path.resolve(__dirname, 'frontend');

var webpackConfig = {
    entry: __dirname + '/frontend/js/app.js',
    output: {
        path: __dirname + '/server/public/',
        filename: "[name].bundle.js"
    },

    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader!autoprefixer-loader'},
            { test: /\.scss$/, loader: ExtractTextPlugin.extract("style", "css?sourceMap!postcss!sass?sourceMap")},
            { test: /\.(woff|woff2|ttf|eot)/, loader: 'url-loader?limit=1000000&name=[name].[ext]' },
            { test: /\.js$/, loader: 'babel', include: [frontend] },
            { test: /\.json$/, loader: 'json-loader', include: [frontend] },
            { test: /\.html$/, loader: 'raw', include: [frontend]}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: frontend + '/index.html'
        }),
        new ExtractTextPlugin("styles.css")
    ],
    postcss: [ autoprefixer({ browsers: ['last 3 versions', '> 1%'] }) ],
};



module.exports = webpackConfig;
