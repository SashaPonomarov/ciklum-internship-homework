export default function UserCtrl ($scope, UserService) {

        UserService.getUser().then((user) => { $scope.username = user.username })

}