myApp
  .controller("registerController", function($scope, User) {
    $scope.registerModalStatus = function() {
      if ($scope.registerModalActive) $scope.registerModalActive = false;
      else $scope.registerModalActive = true;
    };

    $scope.equalPassword = function() {
      if ($scope.password == $scope.confirmPassword) {
        return true;
      } else {
          return false;
      }
    };

    $scope.newUser = function() {
        var user = {
            name: $scope.name,
            email: $scope.email,
            profession: $scope.profession,
            password: $scope.password,
            confirmPassword: $scope.confirmPassword,            
            picture: $scope.picture
        };

        if($scope.equalPassword) {
          User.registerUser(user);
        }
    };
  })

  .directive("register", function() {
    return {
      templateUrl: "app/directives/register/register.template.html",
      controller: "registerController"
    };
  });
