const render = require("./render.js")

function search (input) {
    fetch(`http://www.omdbapi.com/?s=${input}`)
        .then((response) => {
            return response.json()
        })
        .then(render)
}

module.exports = search