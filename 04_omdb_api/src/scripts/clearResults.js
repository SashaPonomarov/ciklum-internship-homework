function clearResults () {
    let resultsContainer = document.querySelector('.search-results')
    while (resultsContainer.firstChild) {
        resultsContainer.removeChild(resultsContainer.firstChild);
    }
}

module.exports = clearResults