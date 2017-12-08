myApp

    .directive('mdChips', function () {
        return {
            restrict: 'E',
            require: 'mdChips',
            link: function ($scope, element, attributes, mdChipsCtrl) {
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

                
            }
        }
    });