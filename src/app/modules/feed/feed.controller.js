feed.controller("feedController", ["Feed", "$http", "$scope", function (Feed, $http, $scope) {
    $scope.posts = [];

    $scope.loadingPosts = false;

    $scope.loadPosts = function () {
        if ($scope.loadingPosts) {
            return false;
        }

        $scope.loadingPosts = true;

        Feed.getPosts($scope.posts)
            .then(function (promisse) {
                promisse.data.publications.map((item) => {
                    item.reactions.agreePercent = 100 * item.reactions.agree / (item.reactions.agree + item.reactions.disagree) + "%";
                    item.reactions.disagreePercent = 100 * item.reactions.disagree / (item.reactions.agree + item.reactions.disagree) + "%";
                    $scope.posts.push(item);
                });
                

                // for (var i = 0; i <= data.data.length - 1; i++) {
                //     $scope.posts.push(data.data[i]);
                //     $scope.posts[i].reactions.agreePercent = 100 * $scope.posts[i].reactions.agree / ($scope.posts[i].reactions.agree + $scope.posts[i].reactions.disagree) + "%";
                //     $scope.posts[i].reactions.disagreePercent = 100 * $scope.posts[i].reactions.disagree / ($scope.posts[i].reactions.agree + $scope.posts[i].reactions.disagree) + "%";
                // }
            });
    
        $scope.loadingPosts = false;

    };
}]);