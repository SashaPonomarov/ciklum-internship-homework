var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: __dirname + "/src/scripts/app.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.scss$/, loader: "style!css!sass" },
            { test: /\.json$/, loader: "json" },
        ]
    },

    plugins: [
    new CopyWebpackPlugin([
      {from: "src/index.html", to: "index.html"},
      {from: "src/img/", to: "img/"}
    ]),
    ],

    watch: true
};