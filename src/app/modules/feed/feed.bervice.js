feed
    .factory("Feed", function($http) {
        var _getPosts = function () {
            return $http.get('https://private-6cf5ea-whynotrun1.apiary-mock.com/publications');
        };

        return {
            getPosts: _getPosts
        };
    });