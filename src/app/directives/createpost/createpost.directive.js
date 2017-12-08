myApp
.controller("createPostController", function($scope) {
    
    $scope.tecnologies = [];

    $scope.createPostActive = function(object) {
        object.target.blur();
        $scope.newPostActive = true;
    }
    $scope.createPostInactive = function() {
        $scope.newPostActive = false;
    }

    $scope.inputGroupActive = function(object) {
        object.target.nextElementSibling.disabled = false;
        object.target.nextElementSibling.focus();
        object.target.parentElement.className += " -active";
    }

    $scope.inputGroupIsActive = function(object) {
        if(object.target.value == "") {
            object.target.parentElement.className = "input-group";
            if(object.target.tagName == "TEXTAREA") {
                object.target.disabled = true;
                object.target.parentElement.className += " -height-auto";
            }
        }
    }
    
})

.directive("createPost", function() {
    return {
        templateUrl: "app/directives/createpost/createpost.template.html",
        controller: "createPostController"
    };
});