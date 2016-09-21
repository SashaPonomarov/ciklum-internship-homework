require("../scss/style.scss")
require("../node_modules/bootstrap/scss/bootstrap.scss")

import angular from "angular"



angular.module("omdb-search", [])
    .controller("SearchMovies", function($scope, $http) {

        $scope.search = function() {
          $http.get("http://www.omdbapi.com/?s=" + $scope.searchInput)
          .then(function(response){ 
                $scope.movies = response.data 
            })
        }

        $scope.select = function(imdbId) {
            $scope.selected = $scope.selected || []
            let current = $scope.movies.Search.find((movie) => {
                return movie.imdbID === imdbId
            })
            $scope.selected.push(current)
            console.log($scope.selected)
        }

    })

angular.bootstrap(document, ["omdb-search"])