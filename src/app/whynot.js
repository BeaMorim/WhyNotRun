var myApp = angular.module("whynotrun", ['ngMaterial', 'feed', 'ranking', 'ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/feed");

        $stateProvider
          .state('feed', {
              url: "/feed",
              templateUrl: "app/modules/feed/feed.template.html"
          })
          .state('post', {
              url: "/feed/:id",
              templateUrl: "app/directives/post/post.template.html",
              controller: "sharedPostController"    
            //   controller: function($stateParams) {
            //       console.log($stateParams.id)
            //   }
          })
          .state('ranking', {
              url: "/ranking",
              templateUrl: "app/modules/ranking/ranking.template.html"
          });
    })

    .controller("myAppController", function($scope) {

        $scope.getUser = function() {
            if($scope.isLogged()) {
                var currentUser = JSON.parse(localStorage.getItem('user'));
                return currentUser.user;
            }
        }

        $scope.isLogged = function () {
            if (localStorage.getItem('user') === null)
                return false
            else
                return true
        }

    })
