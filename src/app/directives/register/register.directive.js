myApp
  .controller("registerController", function ($scope, User) {
    $scope.newUser = {};
    
    $scope.registerChangeModalStatus = function () {
      if ($scope.registerModalActive) {
        $scope.registerModalActive = false;
      } else {
        $scope.registerModalActive = true;
      }
    };

    $scope.equalPassword = function () {
      if ($scope.newUser.password == $scope.newUser.confirmPassword) {
        return true;
      } else {
        return false;
      }
    };

    $scope.userRegister = function () {
      var user = angular.copy($scope.newUser);
      var userLogin = {
        email: user.email,
        password: user.password
      }

      if ($scope.equalPassword) {
        User.userRegisterService(user)
          .then(function () {
            User.login(userLogin)
              .then(function (promisse) {
                $scope.registerChangeModalStatus();
                localStorage.setItem('user', JSON.stringify(promisse.data));
              })

          })

      } else {
        alert("As senhas precisam ser iguais.");
      }
    };
  })

  .directive("register", function () {
    return {
      templateUrl: "app/directives/register/register.template.html",
      controller: "registerController"
    };
  });
