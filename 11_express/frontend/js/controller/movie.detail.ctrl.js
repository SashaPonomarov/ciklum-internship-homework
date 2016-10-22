export default function MovieDetailCtrl ($scope, MovieService, UserService, movie) {
    $scope.movie = movie
    $scope.comments = movie.comments
    UserService.getUser().then((user) => { $scope.username = user.username })

    $scope.addComment = function() {
        let comment = {
                        name: $scope.username, 
                        text: $scope.commentText,
                        date: new Date().getTime()
                      }
        MovieService.addComment($scope.movie.imdbID, comment)
                    .then((comments) => {
                        $scope.comments = comments
                    })

        $scope.commentText = ""
        $scope.commentForm.$setPristine()
        $scope.commentForm.$setUntouched()
    }

}