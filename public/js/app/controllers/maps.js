/**
 * Created by Aleh_Atsman on 10/16/2014.
 */

'use strict';

angular.module('playground')
    .controller('MapCtrl', ['$scope', '$routeParams', 'Maps', 'JqueryTrash', 'Marker', 'NewEventButton',
        function($scope, $routeParams, Maps, JqueryTrash, Marker, newEventButton) {

        $scope.isVisibleMoreIfno = '';
        $scope.googleContrainerMoreInfo = '';
        $scope.event = {};

        function showMoreInfo() {
            $scope.isVisibleMoreIfno = 'is-visible';
            $scope.googleContrainerMoreInfo = 'more-info';
        }

        function hideMoreInfo() {
            $scope.isVisibleMoreIfno = '';
            $scope.googleContrainerMoreInfo = '';
        }

        $scope.initMap = function() {
            Maps.init();
            Marker.loadAndAddAllMarkers(Maps.map, function(marker, event) {
                $scope.event = event;
                showMoreInfo();
                google.maps.event.addListener(Maps.map, 'click', function() {
                    hideMoreInfo();
                    google.maps.event.clearListeners(map, "click");
                    newEventButton.doGreen();
                });
            });
        };

        $scope.contentWrapperClick = function() {
            JqueryTrash.contentWrapperClick();
        };
    }]);