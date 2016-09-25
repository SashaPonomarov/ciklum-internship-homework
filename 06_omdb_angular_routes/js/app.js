import "../scss/style.scss"
import "../node_modules/bootstrap/scss/bootstrap.scss"


import angular from "angular"
import ngRoute from "angular-route"



angular.module('omdb-search', [ngRoute])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/search.html',
                controller: 'SearchController'
            })
            .when('/movie', {
                templateUrl: 'partials/movie.html',
                controller: 'MovieController'
            })
            .otherwise({
                redirectTo: '/'
            })
    })
    .controller('MovieController', function($scope) {

    })
    .controller('SearchController', function($scope, $http) {

        let stored = localStorage.getItem('selected')
        if (stored) {
            $scope.selected = JSON.parse(stored)
        } else {
            $scope.selected = []
        }


        $scope.search = function() {
            $scope.currentPage = $scope.currentPage || 1
            let options = "&type=" + ($scope.searchType || "") + 
                "&y=" + ($scope.searchYear || "") + 
                "&page=" + $scope.currentPage
            $http.get("http://www.omdbapi.com/?s=" + $scope.searchInput + options)
            .then(function(response){
                if (response.data.Response) {
                    $scope.movies = response.data
                } 
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
            localStorage.setItem('selected', JSON.stringify($scope.selected))
        }, true)

        $scope.$watch('currentPage', function(newValue, oldValue) {
            if (newValue !== oldValue) {
                $scope.search()
            }
        })

        $scope.notSelected = function(movie) {
            return !$scope.selected.some((select) => {
                return select.imdbID === movie.imdbID
            })
        }

        $scope.changePage = function(pageNumber) {
            $scope.currentPage = pageNumber
        }
    })
    .filter('range', function() {
      return function(input, total) {
        total = parseInt(total)
        for (var i=1; i<=total+1; i++) {
          input.push(i)
        }
        return input
      }
    })

angular.bootstrap(document, ["omdb-search"])