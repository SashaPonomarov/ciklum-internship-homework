const readStorage = require("./readStorage.js")
const addCards = require("./addCards.js")

function render (result) {
    let resultsContainer = document.querySelector('.search-results')
    let foundContainer = document.querySelector('.found-amount')
    let foundCount = result.totalResults || 0
    let foundMovies = result.Search || []
    foundContainer.innerHTML = `Found ${foundCount} movies`

    results = foundMovies.filter((movie) => {
        let selected = readStorage('selected')
        return !selected.some((select) => {
          return select.imdbID === movie.imdbID
        })
    })

    addCards(results, resultsContainer)
    found = result.Search
    rendered = results
}

module.exports = render