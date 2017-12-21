feed.factory("Feed", function($http) {
  var page = 0;

  var _getPosts = function(posts) {
    if(posts == "")
      page = 0;
    page++;
    return $http.get(apiUrl + "/publications?page=" + page);
  };

  var _getPostById = function(publicationId) {
    return $http ({
      method: 'GET', 
      url: apiUrl + '/publications/' + publicationId
    })
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
  };

  var _sugestPosts = function(text) {
    return $http({
      method: 'GET',
      url: apiUrl + "/publications?text=" + text
    })
  };

  var _sugestTechnologies = function(text) {
    return $http({
      method: 'GET',
      url: apiUrl + "/technologies?text=" + text
    })
  };

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
  };

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
  };

  var _loadMoreComments = function(publicationId, lastCommentId, limit) {
    return $http({
      method: 'GET',
      url: apiUrl + "/comments?publicationId=" + publicationId + "&lastCommentId=" + lastCommentId + "&limit=" + limit
    }) 
  }
  
  return {
    getPosts: _getPosts,
    getPostById: _getPostById,
    createPost: _createPost,
    sugestPosts: _sugestPosts,
    sugestTechnologies: _sugestTechnologies,
    sendComment: _sendComment,
    loadMoreComments: _loadMoreComments,
    react: _react
  };
});
