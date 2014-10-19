/**
 * Created by alehatsman on 10/17/14.
 */
'use strict';

angular.module("playground").factory('Marker', ['$resource', 'MarkerConfig', function($resource, MarkerConfig) {
    var Marker = $resource('/api/events/:id', {id:'@id'});
    var module = {};
    var markers = [];
    var events = [];

    module.loadAndAddAllMarkers = function(map, markerOnClick) {
        Marker.query(function(jsonEvents) {
            jsonEvents.forEach(function(event) {
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(event.lat, event.lon),
                    map: map,
                    title: event.title,
                    visible: true,
                    icon: MarkerConfig.getIconStyle()
                });
                google.maps.event.addListener(marker, 'click', function() {
                    markerOnClick(marker, event);
                });
                markers.push(marker);
                events.push(event);
            });
        });
    };

    module.postNewMarker = function(marker, map) {
        var event = new Marker(marker);
        event.$save(function(u, putResponseHeaders) {
            console.log(u);
            module.clean();
            module.loadAndAddAllMarkers(map, globalCallbackHach);
        });
    };

    module.cleanListeners = function() {
        markers.forEach(function(marker) {
            google.maps.event.clearListeners(marker, "click");
        });
    };

    module.isIgoToEvent = function(id) {

    };

    module.clean = function() {
        for (var i = 0; i < markers.length; i++ ) {
            markers[i].setMap(null);
        }
        markers.length = 0;
    };

    return module;
}]);