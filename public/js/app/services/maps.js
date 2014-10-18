/**
 * Created by Aleh_Atsman on 10/16/2014.
 */
'use strict';

angular.module("playground").factory('Maps', ['MapsConfig', 'MarkerConfig', function(MapsConfig, MarkerConfig) {

    var module = {};

    module.init = function() {
        var map_options = {
            zoom: 14,
            center: new google.maps.LatLng(53.890664,27.537312),
            panControl: false,
            zoomControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            styles: MapsConfig.getStyle()
        };
        module.map = new google.maps.Map(document.getElementById('google-container'), map_options);
        module.createMap();
    };

    module.createMap = function() {MapsConfig.withCurrentPosition(function(currentPosition) {

        var markerIconUrl = MarkerConfig.getIconStyle();

        var map = module.map;

        map.center = currentPosition;

        var marker = new google.maps.Marker({
            position: map.center,
            map: map,
            visible: true,
            icon: markerIconUrl
        });

        //add custom buttons for the zoom-in/zoom-out on the map
        function CustomZoomControl(controlDiv, map) {
            //grap the zoom elements from the DOM and insert them in the map
            var controlUIzoomIn= document.getElementById('cd-zoom-in'),
                controlUIzoomOut= document.getElementById('cd-zoom-out');
            controlDiv.appendChild(controlUIzoomIn);
            controlDiv.appendChild(controlUIzoomOut);

            // Setup the click event listeners and zoom-in or out according to the clicked element
            google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
                map.setZoom(map.getZoom()+1)
            });
            google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
                map.setZoom(map.getZoom()-1)
            });
        }

        var zoomControlDiv = document.createElement('div');
        var zoomControl = new CustomZoomControl(zoomControlDiv, map);

        //insert the zoom div on the top left of the map
        map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);

        return map;
    })};

    return module;

}]);