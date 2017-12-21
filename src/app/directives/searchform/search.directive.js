myApp
  .controller("searchController", function($scope, Feed) {
    
    $scope.searchPosts = [];

    $scope.sugestPost = function(postsSearchText) {
      console.log("teste");
      var searchPosts = [];
      var promisseResult = Feed.sugestPosts(postsSearchText)
          .then(function(promisse){
              searchPosts = promisse.data;
              console.log(promisse.data)
              return promisse.data;
          }) .catch(function(e) {
              searchPosts = [];
              return searchPosts;
          })
      return  promisseResult;
    };

  } 
  )
  .directive("searchForm", function() {
    return {
      templateUrl: "app/directives/searchform/search.template.html",
      controller: "searchController"
    };
  });
