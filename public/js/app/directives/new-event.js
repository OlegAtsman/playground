/**
 * Created by Petr Shypila on 10/18/14.
 */
'use strict';

angular.module('playground').directive('newEvent', function() {
    return {
        restrict: 'E',
        templateUrl: 'assets/views/new-event.html'
    };
});