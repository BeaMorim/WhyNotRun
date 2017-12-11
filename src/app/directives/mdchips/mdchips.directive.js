myApp

    .directive('mdChips', function () {
        return {
            restrict: 'E',
            require: 'mdChips',
            link: function ($scope, element, attributes, mdChipsCtrl) {

                mdChipsCtrl.prototype.appendChip = function(newChip) {
                    
                      if (typeof (newChip) == "string") newChip = {"name": newChip, "_lowername": angular.lowercase(newChip)};
                      if(newChip._lowername == undefined)newChip._lowername = angular.lowercase(newChip.name);
                    
                      for(var i = 0 ; i < this.items.length;i++){
                        if(this.items[i]._lowername == newChip._lowername) return;
                      }
                      this.items.push(newChip);
                      return;
                    
                    
                    };
                    
                mdChipsCtrl.onInputBlur = function () {
                    this.inputHasFocus = false;

                    var chipBuffer = this.getChipBuffer();
                    if (chipBuffer != "") {
                        this.appendChip(chipBuffer);
                        this.resetChipBuffer();
                    }

                    console.log(element[0])
                    if(document.getElementsByClassName("md-input")[0].value == "" && $scope.tecnologies == "") {
                        element[0].parentElement.className = "input-group";
                    }
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