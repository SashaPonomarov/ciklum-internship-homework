const save = require("./save.js")

const select = (target) => {
    let container = document.querySelector('.selected-movies')
    save(target.dataset.imdbId, 'add')
    container.appendChild(target.parentNode)
}

module.exports = select