myApp.controller("postController", ["$scope", function($scope) {

    $scope.commentsAreaStatus = function() {
        if($scope.commentsAreaActive)
            $scope.commentsAreaActive = false;
        else
            $scope.commentsAreaActive = true;
    }
}])

.directive("post", function() {
    return {
        templateUrl:"app/directives/post/post.template.html",
        controller: "postController"
    }
})