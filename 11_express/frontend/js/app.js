import "../scss/style.scss"


import angular from "angular"
import ngRoute from "angular-route"

import MoviesSearchCtrl from "./controller/movies.search.ctrl"
import MovieDetailCtrl from "./controller/movie.detail.ctrl"

import MovieService from "./service/movie.service"

angular.module('omdb-search', [ngRoute])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/search.html',
                controller: 'MoviesSearchCtrl',
                reloadOnSearch: false
            })
            .when('/search/page/:page', {
                templateUrl: 'partials/search.html',
                controller: 'MoviesSearchCtrl',
                reloadOnSearch: false
            })
            .when('/movie/:id', {
                templateUrl: 'partials/movie.html',
                controller: 'MovieDetailCtrl',
                resolve: {
                    movie: function ($route, MovieService) {
                        return MovieService.detail($route.current.params.id);
                    }
                }
            })
            .otherwise({
                redirectTo: '/'
            })
    })
    .controller('MovieDetailCtrl', ['$scope', 'MovieService', 'movie', MovieDetailCtrl])
    .controller('MoviesSearchCtrl', ['$scope', 'MovieService', MoviesSearchCtrl])
    .service('MovieService', ['$http', MovieService])
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