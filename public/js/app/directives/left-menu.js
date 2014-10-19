/**
 * Created by Petr Shypila on 10/18/14.
 */
'use strict';

angular.module('playground').directive('leftMenu', function() {
    return {
        restrict: 'E',
        templateUrl: 'assets/views/left-menu.html',
        controller: 'LeftMenuCtrl'
    };
});
