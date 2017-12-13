myApp
  .controller("toolbarController", function($scope) {

    $scope.changeModalStatus = function () {
      $scope.loginChangeModalStatus();
      $scope.registerChangeModalStatus();
    }
    
  })
  .directive("toolbar", function() {
    return {
      templateUrl: "app/directives/toolbar/toolbar.template.html"
    };
  });
