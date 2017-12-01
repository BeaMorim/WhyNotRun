myApp
    .controller("loginController", function ($scope) {
       
        $scope.modalStatus = function () {
            if ($scope.modalActive)
                $scope.modalActive = false;
            else    
                $scope.modalActive = true;
        }
    })

    .directive("login", function() {
        return {
            templateUrl: "app/directives/login/login.template.html",
            controller: "loginController"
        }
    })