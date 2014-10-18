/**
 * Created by alehatsman on 10/18/14.
 */
'use strict';

angular.module('playground').directive('newEventForm', function() {
    return {
        restrict: 'E',
        templateUrl: 'assets/views/new-event-form.html',
        controller: 'NewEventCtrl'
    };
});