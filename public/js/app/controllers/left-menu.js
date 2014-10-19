/**
 * Created by alehatsman on 10/18/14.
 */

'use strict';

angular.module('playground').controller('LeftMenuCtrl', ['$scope', 'JqueryTrash', function($scope, JqueryTrash) {

    $scope.menuList = [{name: 'Football'}, {name: 'Basketball'}, {name: 'Hockey'}];

    $scope.categoryClick = function(event) {
        var target = event.target;
        JqueryTrash.categoryClick(target);
    };


}]);