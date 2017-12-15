myApp
.controller("createPostController", function($scope, Feed) {
    
    $scope.selectedTechnologies = [];
    $scope.technologies = [ "Angular JS", "React", "Django", "PHP", "Phyton", "Wordpress"];

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
        return chip;
    }

    $scope.createPost = function() {
        var currentUser = JSON.parse(localStorage.getItem('user'));
        var post = {
            title: $scope.title,
            text: $scope.text,
            techies: $scope.selectedTechnologies,
            userId: currentUser.user.id
        };

        console.log(post)
        
        Feed.createPost(post, currentUser.token)
            .then(function (promisse) {
                alert("Postagem criada com sucesso!")
                $scope.createPostInactive();
            })
            .catch(function() {
                alert("Erro ao realizar postagens!")
            })
    }
    
})

.directive("createPost", function() {
    return {
        templateUrl: "app/directives/createpost/createpost.template.html",
        controller: "createPostController"
    };
});