/**
 * Created by Aleh_Atsman on 10/16/2014.
 */
'use strict';

angular.module("playground").factory('Maps', ['$resource', 'MapsConfig', function($resource, MapsConfig) {

    var module = {};

    module.createMap = function() {MapsConfig.withCurrentPosition(function(currentPosition) {
        //set google map options
        var map_options = {
            zoom: 14,
            center: currentPosition,
            panControl: false,
            zoomControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            styles: MapsConfig.getStyle()
        };

        //google map custom marker icon - .png fallback for IE11
        var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
        var marker_url = ( is_internetExplorer11 ) ? 'assets/img/cd-icon-location.png' : 'assets/img/cd-icon-location.svg';

        //inizialize the map
        var map = new google.maps.Map(document.getElementById('google-container'), map_options);
        var marker = new google.maps.Marker({
            position: map.center,
            map: map,
            visible: true,
            icon: marker_url
        });

        module.addMarker(map.center, map, marker_url);

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

    module.addMarker = function(latLng, map, iconUrl) {
        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            visible: true,
            icon: iconUrl
        });
    };

    return module;

}]);