myApp
.controller("createPostController", function($scope) {
    

    $scope.active = function() {
        $scope.createPostActive = true;
    }

    $scope.inactive = function() {
        $scope.createPostActive = false;
    }
})

.directive("createPost", function() {
    return {
        templateUrl: "app/directives/createpost/createpost.template.html",
        controller: "createPostController"
    };
});