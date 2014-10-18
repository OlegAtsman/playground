/**
 * Created by alehatsman on 10/18/14.
 */
'use strict';

angular.module('playground').controller('NewEventCtrl', ['$scope', 'Maps', 'Marker', function($scope, Maps, Marker) {

    $scope.formClass = '';
    $scope.event = {};

    $scope.clickNewEvent = function() {
        var map = Maps.map;

        google.maps.event.addListener(map, "click", function(event) {
            $scope.event.lat = event.latLng.lat();
            $scope.event.lon = event.latLng.lng();
            // populate yor box/field with lat, lng
            $scope.formClass = 'is-visible';
            console.log("Lat=" + $scope.event.lat + "; Lng=" + $scope.event.lng);
        });
        //google.maps.event.clearListeners(map, "click");
    };

    $scope.closeForm = function(event) {
        if( $(event.target).is($('.cd-user-modal')) || $(event.target).is('.cd-close-form') ) {
            $scope.formClass='';
        }
    };

    $scope.sendForm = function() {
        console.log($scope.event);
        $scope.event.eventTypeId = parseInt($scope.event.eventTypeId);
        Marker.postNewMarker($scope.event);
    };
}]);