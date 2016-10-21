export default function MoviesSearchCtrl ($scope, MovieService) {

        $scope.selected = MovieService.getSelected()


        $scope.search = function() {
            $scope.currentPage = $scope.currentPage || 1
            let options = {
                searchInput: $scope.searchInput,
                searchType: $scope.searchType || "",
                searchYear: $scope.searchYear || "",
                currentPage: $scope.currentPage
            }
            MovieService.search(options).then((movies) => {$scope.movies = movies})
        }

        $scope.select = function(imdbId) {
            let current = $scope.movies.Search.find((movie) => {
                return movie.imdbID === imdbId
            })
            $scope.selected.push(current)
            MovieService.setSelected($scope.selected)
        }

        $scope.deselect = function(imdbId) {
            $scope.selected = $scope.selected.filter((movie) => {
                return movie.imdbID !== imdbId
            })
            MovieService.setSelected($scope.selected)
        }

        $scope.notSelected = function(movie) {
            return !$scope.selected.some((select) => {
                return select.imdbID === movie.imdbID
            })
        }

        $scope.changePage = function(pageNumber) {
            $scope.currentPage = pageNumber
            $scope.search()
        }
    }