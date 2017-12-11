angular.module('ranking')
.factory("Ranking", function($http) {
    var _getRanking = function () {
        return $http.get('http://localhost:55816/techies?page=1&order=name');
    };

    return {
        getRanking: _getRanking
    };
});