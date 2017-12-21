myApp
.controller("createPostController", function($scope, Feed) {
    
    $scope.selectedTechnologies = [];
    $scope.technologies = []
    // $scope.technologies = [ "Angular JS", "React", "Django", "PHP", "Phyton", "Wordpress"];

    $scope.createPostActive = function(object) {
        if(localStorage.getItem('user') != null) {
            object.target.blur();
            $scope.newPostActive = true;
        } else {
            alert("Você precisa estar logado para criar postagens!")
            $scope.loginChangeModalStatus();
        }
    }
    
    $scope.createPostInactive = function() {
        $scope.title = "";
        $scope.selectedTechnologies = [];
        $scope.text = "";
        $scope.newPostActive = false;
    }

    $scope.inputGroupActive = function(object) {
        object.target.nextElementSibling.disabled = false;
        object.target.nextElementSibling.focus();
        object.target.parentElement.className += " -active";
    }

    $scope.inputGroupIsActive = function(object) {
        if(object.target.value == "") {
            object.target.parentElement.className = "input-group";
            if(object.target.tagName == "TEXTAREA") {
                object.target.disabled = true;
                object.target.parentElement.className += " -textarea";
            }
        }
    }

    $scope.transformChip = function(chip) {
        if (angular.isObject(chip)) {
            return chip;
        } else {
            return {name: chip}
        }
    }

    $scope.createPost = function() {
        var currentUser = JSON.parse(localStorage.getItem('user'));
        var post = {
            title: $scope.title,
            text: $scope.text,
            techies: $scope.selectedTechnologies,
            userId: currentUser.user.id
        };
        
        Feed.createPost(post, currentUser.token)
            .then(function (promisse) {
                //reload
                $scope.createPostInactive();
            })
    }




    $scope.sugestTechnologies = function(text) {
        var technologies = [];
        var promisseResult = Feed.sugestTechnologies(text)
            .then(function(promisse){
                technologies = promisse.data;
                return promisse.data;
            }) .catch(function(e) {
                technologies = [];
                return technologies;
            })
        return  promisseResult;
        
    }
    
})

.directive("createPost", function() {
    return {
        templateUrl: "app/directives/createpost/createpost.template.html",
        controller: "createPostController"
    };
});