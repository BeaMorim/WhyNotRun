myApp
  .controller("searchController", [ '$scope', function($scope) {
   
  } 
  ])
  .directive("searchForm", function() {
    return {
      templateUrl: "app/directives/searchform/search.template.html"
    };
  });
