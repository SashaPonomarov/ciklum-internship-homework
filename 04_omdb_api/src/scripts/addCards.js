function addCards (movies = [], container) {
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

module.exports = addCards