/**
 * Created by Petr Shypila on 10/18/14.
 */

'use strict';

angular.module('playground').controller('AuthCtrl', ['$scope', '$http', function($scope, $http, $location) {
    $scope.form = {};
    $scope.invalidCredentials = 'not-visible';

    $scope.login = function() {
        console.log($scope.form);
        var request = $http({
            method: 'POST',
            url: 'api/login',
            data: {email: $scope.form.login, password: $scope.form.password}
        });
    };
}]);