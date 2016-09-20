require("../styles/styles.css")
require("../styles/bootstrap-flex.min.css")

let rendered, found

const search = require("./search.js")
const render = require("./render.js")
const readStorage = require("./readStorage.js")
const addCards = require("./addCards.js")
const clearResults = require("./clearResults.js")
const select = require("./select.js")
const deselect = require("./deselect.js")




let searchForm = document.querySelector('.search-form ')

searchForm.addEventListener('submit', (e) => {
    let input = document.querySelector('.search-input').value
    e.preventDefault()
    if (input.length > 1) {
        clearResults()
        search(input)
    }
})

let resultsContainer = document.querySelector('.search-results')

resultsContainer.addEventListener('click', (e) => {
    target = e.target
    while (target != resultsContainer) {
        if (target.matches('.movie')) {
            select(target)
            break
        }
        target = target.parentNode
    }
})


let selectedContainer = document.querySelector('.selected-movies')

selectedContainer.addEventListener('click', (e) => {
    target = e.target
    while (target != selectedContainer) {
        if (target.matches('.movie')) {
            deselect(target)
            break
        }
        target = target.parentNode
    }
})





addCards(readStorage('selected'), document.querySelector('.selected-movies'))

