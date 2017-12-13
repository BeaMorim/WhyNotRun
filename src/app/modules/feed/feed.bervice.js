feed.factory("Feed", function($http) {
  var _getPosts = function() {
    return $http.get(apiUrl + "/publications?page=1");
  };

  var _createPost = function(post, token) {
    return $http ({
      method: 'POST',
      url: apiUrl + "/publications",
      headers: {
        'Authorization': token
      },
      data: post
    })
  } 

  return {
    getPosts: _getPosts,
    createPost: _createPost
  };
});
