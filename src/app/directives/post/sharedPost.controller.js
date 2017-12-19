myApp.controller("sharedPostController", function($scope, $stateParams, Feed) {  

    $scope.getPostById = function() {
        Feed.getPostById($stateParams.id)
            .then(function(promisse) {
                $scope.post = promisse.data;
                console.log($scope.post)
            });
    } 

    $scope.getPostById();
});