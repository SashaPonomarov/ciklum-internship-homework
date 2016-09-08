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

    watch: true
};