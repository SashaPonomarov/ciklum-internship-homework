export default class MovieService {
    constructor($http) {
        this.baseURL = "http://www.omdbapi.com/"
        this.$http = $http
    }

    search(options) {
        let optionString = "?s=" + options.searchInput + "&type=" + options.searchType + 
            "&y=" + options.searchYear + "&page=" + options.currentPage
        return this.$http.get(this.baseURL + optionString)
                .then(function(response){
                    if (response.data.Response) {
                        return response.data
                    } 
                })
    }

    detail(id) {
        let optionString = "?i=" + id + "&plot=full"
        return this.$http.get(this.baseURL + optionString)
                .then(function(response){
                    if (response.data.Response) {
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

    getComments(id) {
        let stored = localStorage.getItem('comments')
        stored = JSON.parse(stored) || []
        let result = stored.find((movie) => {
            return movie.id === id
        })
        if (result) {
            result = result.comments
        }
        return result
    }

    setComment(id, comment) {
        let stored = localStorage.getItem('comments')
        stored = JSON.parse(stored) || []
        let index = stored.findIndex((movie) => {
            return movie.id === id
        })
        if (index !== -1) {
            stored[index].comments.push(comment)
        } else {
            stored.push({id: id, comments: [comment]})
        }
        localStorage.setItem('comments', JSON.stringify(stored))
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