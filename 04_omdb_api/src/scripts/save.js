const readStorage = require("./readStorage.js")

function save (imdbId, action) {
    let selected = readStorage('selected')
    switch (action) {
        case 'add':
            let current = window.rendered.find((movie) => {
                return movie.imdbID === imdbId
            })
            selected.push(current)
            break;
        case 'remove':
            selected = selected.filter((movie) => {
                return movie.imdbID !== imdbId
            })
            break;
    }
    localStorage.setItem('selected', JSON.stringify(selected))
}

module.exports = save