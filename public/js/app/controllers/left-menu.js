/**
 * Created by alehatsman on 10/18/14.
 */

'use strict';

angular.module('playground').controller('LeftMenuCtrl', ['$scope', 'JqueryTrash', function($scope, JqueryTrash) {
    $scope.menuList = [{name: 'Football'}, {name: 'Basketball', clicked: 'current'}, {name: 'Hockey'}];
    $scope.categoryClick = function(event) {
        console.log(event);
        var target = event.target;
        JqueryTrash.categoryClick(target);
    };


}]);