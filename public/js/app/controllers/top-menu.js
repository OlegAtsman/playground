/**
 * Created by alehatsman on 10/18/14.
 */
'use strict';

angular.module('playground').controller('TopMenuCtrl', ['$scope', 'JqueryTrash', function($scope, JqueryTrash) {

    $scope.account = {name: 'Petr', surname: 'Shypila'};

    $scope.menuTriggerClick = function() {
        JqueryTrash.menuTriggerClick();
    };

    $scope.loadUserData = function() {


    };
}]);