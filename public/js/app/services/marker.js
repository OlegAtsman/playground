/**
 * Created by alehatsman on 10/17/14.
 */
'use strict';

angular.module("playground").factory('Marker', ['$resource', 'MarkerConfig', function($resource, MarkerConfig) {
    var Marker = $resource('/api/events/:id', {id:'@id'});
    var module = {};
    var events = [];
    module.loadAndAddAllMarkers = function(map) {
        Marker.query(function(markers) {
            markers.forEach(function(m) {
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(m.lat, m.lon),
                    map: map,
                    title: m.title,
                    visible: true,
                    icon: MarkerConfig.getIconStyle()
                });
                events.push(marker);
            });
        });
    };

    module.postNewMarker = function(marker, map) {
        var event = new Marker(marker);
        event.$save(function(u, putResponseHeaders) {
            console.log(u);
            module.clean();
            module.loadAndAddAllMarkers(map);
        });
    };

    module.clean = function() {
        for (var i = 0; i < events.length; i++ ) {
            events[i].setMap(null);
        }
        events.length = 0;
    };

    return module;
}]);