/**
 * Created by Petr Shypila on 10/18/14.
 */
'use strict';

angular.module('playground').directive('googleMap', function() {
    return {
        restrict: 'E',
        templateUrl: 'assets/views/map.html',
        controller: 'MapCtrl'
    };
});