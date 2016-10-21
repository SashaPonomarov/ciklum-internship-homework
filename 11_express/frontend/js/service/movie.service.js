export default class MovieService {
    constructor($http) {
        this.baseURL = "http://localhost:3000/api/movies/"
        this.$http = $http
    }

    search(options) {
        let optionString = "?s=" + options.searchInput + "&type=" + options.searchType + 
            "&y=" + options.searchYear + "&page=" + options.currentPage
        return this.$http.get(this.baseURL + 'search' + optionString)
                .then(function(response){
                    if (response.data.Response) {
                        return response.data
                    } 
                })
    }

    detail(id) {
        return this.$http.get(this.baseURL + id)
                .then(function(response){
                    if (response.data) {
                        return response.data
                    } 
                })
    }

    getSelected() {
        let stored = localStorage.getItem('selected')
        stored = JSON.parse(stored) || []
        return stored
    }

    setSelected(selected) {
        localStorage.setItem('selected', JSON.stringify(selected))
    }

    addComment(id, comment) {
        var params = JSON.stringify({imdbID:id, comment:comment})
        return this.$http.post(this.baseURL, params)
                        .then((response) => {
                            return new Promise((resolve, reject) => {
                                resolve(response.data.comments)
                            })
                        })
                        .catch((err) => {
                            return new Promise((resolve, reject) => {
                                reject(err)
                            })
                        })
    }

    getRating(id) {
        let stored = localStorage.getItem('ratings')
        stored = JSON.parse(stored) || []
        let result = stored.find((movie) => {
            return movie.id === id
        })
        if (result) {
            result = result.rating
        }
        return result
    }
    setRating(id, rating) {
        let stored = localStorage.getItem('ratings')
        stored = JSON.parse(stored) || []
        let index = stored.findIndex((movie) => {
            return movie.id === id
        })
        if (index !== -1) {
            stored[index].rating = rating
        } else {
            stored.push({id, rating})
        }
        localStorage.setItem('ratings', JSON.stringify(stored))
    }
}