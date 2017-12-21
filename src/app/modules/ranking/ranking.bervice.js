angular.module('ranking')
.factory("Ranking", function($http) {
    var _getRanking = function (order) {
        page = 1;
        return $http.get('http://localhost:55816/technologies?page=' + page + '&order=' + order);
    };

    return {
        getRanking: _getRanking
    };
});