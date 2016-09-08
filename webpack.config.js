var CopyWebpackPlugin = require('copy-webpack-plugin');
var autoprefixer = require('autoprefixer');

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
        ]
    },

    plugins: [
    new CopyWebpackPlugin([
      {from: "src/index.html", to: "index.html"},
      {from: "src/img/", to: "img/"}
    ]),
    ],

    postcss: [ autoprefixer({ browsers: ['last 3 versions', '> 1%'] }) ],

    // watch: true
};