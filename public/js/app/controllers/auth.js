/**
 * Created by Petr Shypila on 10/18/14.
 */

'use strict';

angular.module('playground').controller('AuthCtrl', ['$scope', '$http', function($scope, $http, $location) {
    $scope.form = {};
    $scope.invalidCredentials = 'not-visible';

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


    $scope.login = function() {
        console.log($scope.form);
        var request = $http({
            method: 'POST',
            url: 'api/login',
            data: {email: $scope.form.login, password: $scope.form.password}
        }).success(function() {
            changeLocation('/#/home');
        });
    };
}]);