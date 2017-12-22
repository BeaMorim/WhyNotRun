myApp
    .controller("rankingController", function($scope, Ranking){

        $scope.ranking = [];
        $scope.loadingRanking = false;

        $scope.loadRanking = function(){
            if ($scope.loadingRanking) {
                return false;
            }
    
            $scope.loadingRanking = true;
            var order = "points";
            Ranking.getRanking(order, $scope.ranking).then(function(promisse) {
                promisse.data.map(item => {
                    $scope.ranking.push(item);
                });
            });

            $scope.loadingRanking = false;
        }

        $scope.reorderRanking = function(order) {
            Ranking.getRanking(order, $scope.ranking).then(function(data) {
                $scope.ranking = data.data;
            })
        };

        //$scope.loadRanking();
    })

    .directive("ranking", function() {
        return {
            templateUrl: "app/directives/ranking/ranking.template.html",
            controller: "rankingController"
        };
    });