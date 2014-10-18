/**
 * Created by Aleh_Atsman on 10/16/2014.
 */

'use strict';

angular.module('playground')
    .controller('MapCtrl', ['$scope', '$routeParams', 'Maps', 'JqueryTrash', 'Marker', function($scope, $routeParams, Maps, JqueryTrash, Marker) {
        $scope.initMap = function() {
            Maps.init();
            Marker.loadAndAddAllMarkers(Maps.map);
        };

        $scope.contentWrapperClick = function() {
            JqueryTrash.contentWrapperClick();
        };
    }]);