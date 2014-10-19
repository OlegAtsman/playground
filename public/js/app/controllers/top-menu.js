/**
 * Created by alehatsman on 10/18/14.
 */
'use strict';

angular.module('playground').controller('TopMenuCtrl', ['$scope', 'JqueryTrash', '$http', function($scope, JqueryTrash, $http) {

    $scope.account = {name: 'Petr', surname: 'Shypila', img:'assets/img/user.png'};

    $scope.menuTriggerClick = function() {
        JqueryTrash.menuTriggerClick();
    };

    $scope.loadUserData = function() {
        $http.get('/api/users/profile').
            success(function(data, status, headers, config) {
                $scope.account.name = data.firstname;
                $scope.account.surname = data.lastname;
                $scope.account.img = data.img;
            }).
            error(function(data, status, headers, config) {
                console.log("err");
            });
    };
}]);