/**
 * Created by alehatsman on 10/18/14.
 */
'use strict';

angular.module('playground').controller('NewEventCtrl', ['$scope', 'Maps', function($scope, Maps) {

    $scope.formClass = '';

    $scope.clickNewEvent = function() {
        var map = Maps.map;

        google.maps.event.addListener(map, "click", function(event) {
            var lat = event.latLng.lat();
            var lng = event.latLng.lng();
            // populate yor box/field with lat, lng
            $scope.formClass = 'is-visible';
            alert("Lat=" + lat + "; Lng=" + lng);
        });
        //google.maps.event.clearListeners(map, "click");
    };

    $scope.closeForm = function(event) {
        if( $(event.target).is($('.cd-user-modal')) || $(event.target).is('.cd-close-form') ) {
            $scope.formClass='';
        }
    };

}]);