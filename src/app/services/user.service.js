myApp.factory("User", function($http) {
    var _userRegisterService = function(user) {
      return $http.post(apiUrl + "/users", user);
    };

    var _login = function(user) {
      return $http.post(apiUrl + "/login", user);
    };
  
    return {
      userRegisterService: _userRegisterService,
      login: _login
    };
  });
  