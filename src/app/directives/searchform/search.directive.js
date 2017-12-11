myApp
  .controller("searchController", [ '$scope', function($scope) {
    
    $scope.searchPosts = [
      { name: "Angular JS" }, 
      { name: "React"},
      { name: "Django"},
    ];
  } 
  ])
  .directive("searchForm", function() {
    return {
      templateUrl: "app/directives/searchform/search.template.html",
      controller: "searchController"
    };
  });
