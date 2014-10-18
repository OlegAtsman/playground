/**
 * Created by alehatsman on 10/17/14.
 */
'use strict';

angular.module("playground").factory('Marker', ['$resource', 'MarkerConfig', function($resource, MarkerConfig) {
    var Marker = $resource('/api/events/:id', {id:'@id'});
    var module = {};
    module.loadAndAddAllMarkers = function(map) {
        Marker.query(function(markers) {
            markers.forEach(function(m) {
                new google.maps.Marker({
                    position: new google.maps.LatLng(m.lat, m.lon),
                    map: map,
                    title: m.title,
                    visible: true,
                    icon: MarkerConfig.getIconStyle()
                });
            });
        });
    };

    module.postNewMarker = function(marker) {
        var event = new Marker(marker);
        event.$save();
    };


    return module;
}]);