myApp
  .controller("toolbarController", function($scope) {

    $scope.userModalStatus = function () {
      $scope.loginModalStatus();
      $scope.registerModalStatus();
    }

    

  })
  .directive("toolbar", function() {
    return {
      templateUrl: "app/directives/toolbar/toolbar.template.html"
    };
  });
