const save = require("./save.js")
const clearResults = require("./clearResults.js")
const addCards = require("./addCards.js")

function deselect (target) {
    save(target.dataset.imdbId, 'remove')
    target.parentNode.parentNode.removeChild(target.parentNode)
    clearResults()
    addCards(window.found, document.querySelector('.search-results'))

}

module.exports = deselect