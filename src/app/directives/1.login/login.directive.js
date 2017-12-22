myApp
    .controller("loginController", function ($scope, User) {
        var cleanForm = function() {
            $scope.user.email = "";
            $scope.user.password = "";
        }

        $scope.login = function () {
            var userLogin = angular.copy($scope.user);
            User.login(userLogin)
                .then(function (promisse) {
                    localStorage.setItem('user', JSON.stringify(promisse.data));
                    $scope.loginChangeModalStatus();
                    alert("Login realizado com sucesso!")
                })
                .catch(function (err) {
                    cleanForm();
                    alert("Email ou senha inválidos!");
                });
            }

        $scope.logout = function () {
            if ($scope.isLogged()) {
                localStorage.removeItem('user');
                alert("Você realizou logout.");
            } else {
                alert("Você não esta logado");
            }
        }

        
    })

    .directive("login", function () {
        return {
            templateUrl: "app/directives/1.login/login.template.html",
            controller: "loginController"
        }
    })