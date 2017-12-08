myApp.factory("User", function($http) {
    var _registerUser = function(user) {
      return $http.post(apiUrl + "/users", user);
    };
  
    return {
      registerUser: _registerUser
    };
  });
  