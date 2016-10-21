export default function MovieDetailCtrl ($scope, MovieService, movie) {
    $scope.movie = movie
    $scope.comments = movie.comments
    $scope.rating = MovieService.getRating($scope.movie.imdbID)

    $scope.addComment = function() {
        let comment = {
                        name: $scope.commentName, 
                        text: $scope.commentText,
                        date: new Date().getTime()
                      }
        MovieService.addComment($scope.movie.imdbID, comment)
                    .then((comments) => {
                        $scope.comments = comments
                    })

        $scope.commentName = ""
        $scope.commentText = ""
        $scope.commentForm.$setPristine()
        $scope.commentForm.$setUntouched()
    }

    $scope.setRating = function() {
        MovieService.setRating($scope.movie.imdbID, $scope.rating)
    }

}