import "../scss/style.scss"
import "../node_modules/bootstrap/scss/bootstrap.scss"


import angular from "angular"
import ngRoute from "angular-route"

import MoviesSearchCtrl from "./controller/movies.search.ctrl"
import MovieDetailCtrl from "./controller/movie.detail.ctrl"

angular.module('omdb-search', [ngRoute])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/search.html',
                controller: 'MoviesSearchCtrl'
            })
            .when('/movie', {
                templateUrl: 'partials/movie.html',
                controller: 'MovieDetailCtrl'
            })
            .otherwise({
                redirectTo: '/'
            })
    })
    .controller('MovieDetailCtrl', ['$scope', '$http', MovieDetailCtrl])
    .controller('MoviesSearchCtrl', ['$scope', '$http', MoviesSearchCtrl])

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