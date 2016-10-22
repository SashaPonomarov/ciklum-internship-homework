export default class UserService {
    constructor($http) {
        this.baseURL = "http://localhost:3000/api/user"
        this.$http = $http
    }

    getUser() {
        return this.$http.get(this.baseURL)
                .then(function(response){
                    if (response.data) {
                        return response.data.user
                    }
                })
    }

    getFavorites() {
        return this.$http.get(this.baseURL + '/favorites')
                .then(function(response){
                    if (response.data) {
                        return response.data.favorites
                    }
                })
    }

    setFavorites(selected) {
        var params = JSON.stringify({favorites: selected})
        return this.$http.post(this.baseURL+'/favorites', params)
    }

}