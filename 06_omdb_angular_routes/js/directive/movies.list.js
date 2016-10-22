export default function moviesList() {
    return {
        restrict: 'EA',
        templateUrl: 'partials/movies-list.html',
        scope: {
            items: '=',
            filterBy: '=',
            order: '=',
            handleClick: '&'
        },
        replace: true
    }
}