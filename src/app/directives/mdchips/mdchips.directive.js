myApp

    .directive('mdChips', function ($timeout) {
        return {
            restrict: 'E',
            require: 'mdChips',
            link: function ($scope, element, attributes, mdChipsCtrl) {

                // mdChipsCtrl.appendChip = function(newChip) {
                    
                //       if (typeof (newChip) == "string") newChip = {"name": newChip, "_lowername": angular.lowercase(newChip)};
                //       if(newChip._lowername == undefined)newChip._lowername = angular.lowercase(newChip.name);
                    
                //       for(var i = 0 ; i < this.items.length;i++){
                //         if(this.items[i]._lowername == newChip._lowername) return;
                //       }
                //       this.items.push(newChip);
                //       return;
                    
                    
                //     };

                var mouseUpActions = [];
                    
                mdChipsCtrl.onInputBlur = function () {
                    this.inputHasFocus = false;
                    
                    var chipBuffer = this.getChipBuffer();
                    if (chipBuffer != "") {
                        this.appendChip(chipBuffer);
                        this.resetChipBuffer();
                    }

                    setTimeout(function(){
                        if(document.getElementsByClassName("md-input")[0].value == "" && $scope.selectedTechnologies == "") {
                            element[0].parentElement.className = "input-group";
                            document.getElementsByClassName("md-input")[0].blur();
                        }
                    }, 500);
                    
                };

                window.addEventListener('click', function(event) {
                    while (mouseUpActions.length > 0) {
                      var action = mouseUpActions.splice(0, 1)[0];
                      $timeout(function() {
                        $timeout(action);
                      });
                    }
                }, false);

                

                
            }
        }
    });