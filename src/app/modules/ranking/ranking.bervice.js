angular.module('ranking')
.factory("Ranking", function($http) {
    var _getRanking = function () {
        return $http.get('https://private-6cf5ea-whynotrun1.apiary-mock.com/technologies');
    };

    return {
        getRanking: _getRanking
    };
});