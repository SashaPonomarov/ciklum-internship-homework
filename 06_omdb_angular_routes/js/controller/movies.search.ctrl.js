export default function MoviesSearchCtrl ($scope, MovieService) {

        let stored = localStorage.getItem('selected')
        if (stored) {
            $scope.selected = JSON.parse(stored)
        } else {
            $scope.selected = []
        }


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
    }