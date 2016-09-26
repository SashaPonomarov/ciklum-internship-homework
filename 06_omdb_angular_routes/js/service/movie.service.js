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

    
}