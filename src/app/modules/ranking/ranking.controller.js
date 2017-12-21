ranking.controller("rankingController", ["Ranking", "$http", "$scope", function(Ranking, $http, $scope, $routeParams, contato, $stateParams) {
    var loadRanking = function() {
        var order = "name";
        Ranking.getRanking(order).then(function(data) {
            $scope.ranking = data.data;
        });
    };

    $scope.reorderRanking = function(order) {
        Ranking.getRanking(order).then(function(data) {
            $scope.ranking = data.data;
            console.log($scope.ranking);
        })
    };

    loadRanking();
}]);