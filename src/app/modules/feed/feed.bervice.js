feed.factory("Feed", function($http) {
  var page = 0;

  var _getPosts = function() {
    page++;
    return $http.get(apiUrl + "/publications?page=" + page);
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

  var _sendComment = function(comment, user, publicationId, token) {
    return $http ({
      method: 'POST',
      url: apiUrl + "/comments",
      headers: {
        'Authorization': token
      },
      data: {
        Text: comment,
        publicationId: publicationId,
        userId: user.id
      }
    })
  }
  
  var _react = function(reaction, publicationId, user, token) {
    return $http ({
      method: 'PATCH', 
      url: apiUrl + "/publications/" + publicationId +"/react",
      headers: {
        'Authorization': token
      },
      data: {
        like: reaction,
        userId: user.id
      }
    })
  }

  var _getPostById = function(publicationId) {
    return $http ({
      method: 'GET', 
      url: apiUrl + '/publications/' + publicationId
    })
  }

  return {
    getPosts: _getPosts,
    createPost: _createPost,
    sendComment: _sendComment,
    react: _react,
    getPostById: _getPostById
  };
});
