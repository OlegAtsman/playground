/**
 * Created by alehatsman on 10/18/14.
 */
angular.module("playground").factory('NewEventButton', [ function() {
    var module = {};

    var $scope = '';

    module.setLinkToClass = function(scope) {
        $scope = scope;
    };

    module.doGreen = function() {
        $scope.clicked = '';
    };

    module.doRed = function() {
        $scope.clicked = 'is-clicked';
    };

    return module;

}]);
