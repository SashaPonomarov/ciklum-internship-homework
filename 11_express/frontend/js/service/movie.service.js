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

}