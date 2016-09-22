require("../scss/style.scss")
require("../node_modules/bootstrap/scss/bootstrap.scss")

import angular from "angular"



angular.module("omdb-search", [])
    .controller("SearchMovies", function($scope, $http) {

        let stored = localStorage.getItem('selected')
        if (stored) {
            $scope.selected = JSON.parse(stored)
        } else {
            $scope.selected = []
        }
        console.log('selected', $scope.selected)        

        $scope.search = function() {
          $http.get("http://www.omdbapi.com/?s=" + $scope.searchInput)
          .then(function(response){ 
                $scope.movies = response.data 
            })
        }

        $scope.select = function(imdbId) {
            let current = $scope.movies.Search.find((movie) => {
                return movie.imdbID === imdbId
            })
            $scope.selected.push(current)
        }

        $scope.deselect = function(imdbId) {
            $scope.selected = $scope.selected.filter((movie) => {
                return movie.imdbID !== imdbId
            })
        }

        $scope.$watch('selected', function() {
            console.log($scope.selected)
            localStorage.setItem('selected', JSON.stringify($scope.selected))
        }, true)

        $scope.notSelected = function(movie) {
            return !$scope.selected.some((select) => {
                return select.imdbID === movie.imdbID
            })
        }

    })

angular.bootstrap(document, ["omdb-search"])