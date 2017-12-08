feed.controller("feedController", ["Feed", "$http", "$scope", function(Feed, $http, $scope) {   
    var loadPosts = function() {
        Feed.getPosts().then(function(data) {
            $scope.posts = data.data;
            for(var i = 0; i <= $scope.posts.length-1; i++) {
                $scope.posts[i].reactions.agreePercent = 100*$scope.posts[i].reactions.agree/($scope.posts[i].reactions.agree + $scope.posts[i].reactions.disagree) + "%";
                $scope.posts[i].reactions.disagreePercent = 100*$scope.posts[i].reactions.disagree/($scope.posts[i].reactions.agree + $scope.posts[i].reactions.disagree) + "%";
                
                console.log($scope.posts[i])
            }
        });
    };

    loadPosts();

    var renderBarSize = function(obj) {
        obj.post.reactions.agreePercent = 100*obj.post.reactions.agree/(obj.post.reactions.agree + obj.post.reactions.disagree) + "%";
        obj.post.reactions.disagreePercent = 100*obj.post.reactions.disagree/(obj.post.reactions.agree + obj.post.reactions.disagree) + "%";

    };

    $scope.getAgreeBarSize = function(obj) {
        return (obj.post.reactions.disagreePercent);
    }

    $scope.postAgree = function(obj) {
        obj.post.reactions.agree++;
        renderBarSize(obj);
    }

    $scope.postDisagree = function(obj) {
        obj.post.reactions.disagree++;
        renderBarSize(obj);
    }
    
}]);