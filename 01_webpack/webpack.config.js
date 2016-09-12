var CopyWebpackPlugin = require('copy-webpack-plugin');
var autoprefixer = require('autoprefixer');
var path = require('path');


module.exports = {
    entry: __dirname + "/src/scripts/app.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.scss$/, loader: "style!css!postcss!sass" },
            { test: /\.json$/, loader: "json" },
            { test: /\.js$/,  
                include: path.resolve(__dirname, "src/scripts"), 
                loader: "babel",
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },

    plugins: [
    new CopyWebpackPlugin([
      {from: "src/index.html", to: "index.html"},
      {from: "src/img/", to: "img/"}
    ]),
    ],

    postcss: [ autoprefixer({ browsers: ['last 3 versions', '> 1%'] }) ],
};