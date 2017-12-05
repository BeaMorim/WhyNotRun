myApp
    .controller("loginController", function ($scope) {

        $scope.loginModalStatus = function () {
            if ($scope.loginModalActive)
                $scope.loginModalActive = false;
            else    
                $scope.loginModalActive = true;
        }
    })

    .directive("login", function() {
        return {
            templateUrl: "app/directives/login/login.template.html",
            controller: "loginController"
        }
    })