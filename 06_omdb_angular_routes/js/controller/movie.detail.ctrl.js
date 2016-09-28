export default function MovieDetailCtrl ($scope, MovieService, movie) {
    $scope.movie = movie
    $scope.comments = MovieService.getComments($scope.movie.imdbID)

    $scope.addComment = function () {
        let date = new Date()
        MovieService.setComment($scope.movie.imdbID, {
                                name: $scope.commentName, 
                                text: $scope.commentText,
                                date: date.getTime()
                            })
        $scope.comments = MovieService.getComments($scope.movie.imdbID)
        $scope.commentName = ""
        $scope.commentText = ""
        $scope.commentForm.$setPristine()
        $scope.commentForm.$setUntouched()
    }
}