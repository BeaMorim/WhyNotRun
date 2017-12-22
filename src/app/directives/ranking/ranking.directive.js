myApp
    .controller("rankingController", function($scope, Ranking){

        $scope.loadRanking = function(){
            Ranking.getRanking()
                .then(function(data) {
                    $scope.ranking = data.data;
                });
        }

        $scope.loadRanking();
    })

    .directive("ranking", function() {
        return {
            templateUrl: "app/directives/ranking/ranking.template.html",
            controller: "rankingController"
        };
    });