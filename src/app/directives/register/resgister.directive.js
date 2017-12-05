myApp
    .controller("registerController", function($scope) {

        $scope.registerModalStatus = function () {
            if ($scope.registerModalActive)
                $scope.registerModalActive = false;
            else    
                $scope.registerModalActive = true;
        }

    })



    .directive("register", function() {
        return {
            templateUrl: "app/directives/register/register.template.html",
            controller: "registerController"
        }
    });