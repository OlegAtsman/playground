/**
 * Created by alehatsman on 10/18/14.
 */
'use strict';

angular.module('playground').controller('TopMenuCtrl', ['$scope', 'JqueryTrash', function($scope, JqueryTrash) {

    $scope.menuTriggerClick = function() {
        JqueryTrash.menuTriggerClick();
    };

}]);