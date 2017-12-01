myApp
  .controller("searchController", [
    function() {
      alert("ola mundo");
    }
  ])
  .directive("searchForm", function() {
    return {
      templateUrl: "app/directives/searchform/search.template.html"
    };
  });
