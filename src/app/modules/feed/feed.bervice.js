feed.factory("Feed", function($http) {
  var _getPosts = function() {
    return $http.get(apiUrl + "/publications?page=1");
  };

  return {
    getPosts: _getPosts
  };
});
