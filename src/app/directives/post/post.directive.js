myApp.controller("postController", ["$scope", "Feed", function($scope, Feed) {

    $scope.commentsAreaStatus = function() {
        if($scope.commentsAreaActive)
            $scope.commentsAreaActive = false;
        else
            $scope.commentsAreaActive = true;
    }

    $scope.commentFieldActive = function() {
        if(!$scope.isLogged())
            alert("Você precisa estar logado para comentar as publicações");
    }

    $scope.sendComment = function(obj) {
        console.log($scope.text);
        var currentUser = JSON.parse(localStorage.getItem('user'));
        Feed.sendComment($scope.text, currentUser.user, obj.post.id, currentUser.token)
    }

    var renderBarSize = function(obj) {
        obj.post.reactions.agreePercent = 100*obj.post.reactions.agree/(obj.post.reactions.agree + obj.post.reactions.disagree) + "%";
        obj.post.reactions.disagreePercent = 100*obj.post.reactions.disagree/(obj.post.reactions.agree + obj.post.reactions.disagree) + "%";
    };

    $scope.postAgree = function(obj) {
        if ($scope.isLogged()) {
            if(obj.post.reaction != true) {
                obj.post.reactions.agree++;
                if(obj.post.reaction == false) {
                    obj.post.reactions.disagree--;
                }
                renderBarSize(obj); 
                obj.post.reaction = true;
                var currentUser = JSON.parse(localStorage.getItem('user'));   
                Feed.react(true, obj.post.id, $scope.getUser(), currentUser.token);
            } else {
                //mandar null para o back
                obj.post.reaction = null;
                obj.post.reactions.agree--;
                renderBarSize(obj); 
            }
            
        } else {
            alert("Você precisa estar logado para reagir às publicações")
        }
    }

    $scope.postDisagree = function(obj) {
        if ($scope.isLogged()) {
            if(obj.post.reaction != false) {
                obj.post.reactions.disagree++;
                if(obj.post.reaction == true) {
                    obj.post.reactions.agree--;
                }
                renderBarSize(obj);
                obj.post.reaction = false;
                var currentUser = JSON.parse(localStorage.getItem('user'));   
                Feed.react(false, obj.post.id, $scope.getUser(), currentUser.token)
            } else {
                //mandar null para o back
                obj.post.reaction = null;
                obj.post.reactions.disagree--;
                renderBarSize(obj); 
            }
        } else {
            alert("Você precisa estar logado para reagir às publicações")
        }
    }

    
}])

.directive("post", function() {
    return {
        templateUrl:"app/directives/post/post.template.html",
        controller: "postController"
    }
})