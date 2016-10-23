import "../scss/style.scss"


import angular from "angular"
import ngRoute from "angular-route"

import MoviesSearchCtrl from "./controller/movies.search.ctrl"
import MovieDetailCtrl from "./controller/movie.detail.ctrl"
import UserCtrl from "./controller/user.ctrl"
import moviesList from "./directive/movies.list"
import MovieService from "./service/movie.service"
import UserService from "./service/user.service"

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
    .controller('MovieDetailCtrl', ['$scope', 'MovieService', 'UserService', 'movie', MovieDetailCtrl])
    .controller('MoviesSearchCtrl', ['$scope', 'MovieService', 'UserService', MoviesSearchCtrl])
    .controller('UserCtrl', ['$scope', 'UserService', UserCtrl])
    .directive('moviesList', moviesList)
    .service('MovieService', ['$http', MovieService])
    .service('UserService', ['$http', UserService])
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