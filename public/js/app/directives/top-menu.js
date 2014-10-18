/**
 * Created by alehatsman on 10/18/14.
 */
'use strict';

angular.module('playground').directive('topMenu', function() {
    return {
        restrict: 'E',
        templateUrl: 'assets/views/top-menu.html',
        controller: 'TopMenuCtrl'
    };
});