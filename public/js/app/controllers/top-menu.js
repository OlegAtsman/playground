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

    var changeLocation = function(url, forceReload) {
        $scope = $scope || angular.element(document).scope();
        if(forceReload || $scope.$$phase) {
            window.location = url;
        }
        else {
            //only use this if you want to replace the history stack
            //$location.path(url).replace();

            //this this if you want to change the URL and add it to the history stack
            $location.path(url);
            $scope.$apply();
        }
    };

    $scope.logout = function() {
        changeLocation("/#/");
    };

}]);