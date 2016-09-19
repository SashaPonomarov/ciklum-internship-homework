require("../styles/styles.css")
require("../styles/bootstrap-flex.min.css")


let rendered, found
const search = (input) => {
    fetch(`http://www.omdbapi.com/?s=${input}`)
        .then((response) => {
            return response.json()
        })
        .then(render)
}
const render = (result) => {
    let resultsContainer = document.querySelector('.search-results')
    let foundContainer = document.querySelector('.found-amount')
    foundContainer.innerHTML = `Found ${result.totalResults} movies`

    results = result.Search.filter((movie) => {
        let selected = readStorage('selected')
        return !selected.some((select) => {
          return select.imdbID === movie.imdbID
        })
    })

    addCards(results, resultsContainer)
    found = result.Search
    rendered = results
}
const addCards = (movies = [], container) => {
    let cards = ''
    movies.forEach((movie) => {
        let poster = (movie.Poster === 'N/A') ? 
                `http://placehold.it/260x360?text=${movie.Title.replace(/ /g, '+')}` : movie.Poster
        cards += `<div class="movie-container text-xs-center col-xl-1 col-lg-2 col-md-3 col-sm-4 col-xs-6">
                            <div class="card movie" data-imdb-id="${movie.imdbID}">
                                <img class="card-img-top img-fluid" src="${poster}" alt="${movie.Title}">
                                <div class="card-block">
                                  <h5 class="card-title">${movie.Title}</h5>
                                  <h6>${movie.Year}</h6>
                                </div>
                            </div>
                        </div>`
    })
    container.innerHTML = cards
}
const clearResults = () => {
    let resultsContainer = document.querySelector('.search-results')
    while (resultsContainer.firstChild) {
        resultsContainer.removeChild(resultsContainer.firstChild);
    }
}

const select = (target) => {
    let container = document.querySelector('.selected-movies')
    save(target.dataset.imdbId, 'add')
    container.appendChild(target.parentNode)
}
const deselect = (target) => {
    // let container = document.querySelector('.selected-movies')
    save(target.dataset.imdbId, 'remove')
    target.parentNode.parentNode.removeChild(target.parentNode)
    clearResults()
    addCards(found, document.querySelector('.search-results'))

}

const save = (imdbId, action) => {
    let selected = readStorage('selected')
    switch (action) {
        case 'add':
            let current = rendered.find((movie) => {
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
const readStorage = (name) => {
    let selected = localStorage.getItem('selected')
    if (selected) {
        selected = JSON.parse(selected)
    } else {
        selected = []
    }
    return selected
}

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

