/**
 * Created by Aleh_Atsman on 10/16/2014.
 */

'use strict';

angular.module('playground')
    .controller('MapCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
        $scope.initMap = function() {
            //set your google maps parameters
            var latitude = 51.5255069,
                longitude = -0.0836207,
                map_zoom = 14;

            //google map custom marker icon - .png fallback for IE11
            var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
            var marker_url = ( is_internetExplorer11 ) ? 'img/cd-icon-location.png' : 'img/cd-icon-location.svg';

            //define the basic color of your map, plus a value for saturation and brightness
            var	main_color = '#2d313f',
                saturation_value= -20,
                brightness_value= 5;

            //we define here the style of the map
            var style= [
                {
                    //set saturation for the labels on the map
                    elementType: "labels",
                    stylers: [
                        {saturation: saturation_value}
                    ]
                },
                {	//poi stands for point of interest - don't show these lables on the map
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [
                        {visibility: "off"}
                    ]
                },
                {
                    //don't show highways lables on the map
                    featureType: 'road.highway',
                    elementType: 'labels',
                    stylers: [
                        {visibility: "off"}
                    ]
                },
                {
                    //don't show local road lables on the map
                    featureType: "road.local",
                    elementType: "labels.icon",
                    stylers: [
                        {visibility: "off"}
                    ]
                },
                {
                    //don't show arterial road lables on the map
                    featureType: "road.arterial",
                    elementType: "labels.icon",
                    stylers: [
                        {visibility: "off"}
                    ]
                },
                {
                    //don't show road lables on the map
                    featureType: "road",
                    elementType: "geometry.stroke",
                    stylers: [
                        {visibility: "off"}
                    ]
                },
                //style different elements on the map
                {
                    featureType: "transit",
                    elementType: "geometry.fill",
                    stylers: [
                        { hue: main_color },
                        { visibility: "on" },
                        { lightness: brightness_value },
                        { saturation: saturation_value }
                    ]
                },
                {
                    featureType: "poi",
                    elementType: "geometry.fill",
                    stylers: [
                        { hue: main_color },
                        { visibility: "on" },
                        { lightness: brightness_value },
                        { saturation: saturation_value }
                    ]
                },
                {
                    featureType: "poi.government",
                    elementType: "geometry.fill",
                    stylers: [
                        { hue: main_color },
                        { visibility: "on" },
                        { lightness: brightness_value },
                        { saturation: saturation_value }
                    ]
                },
                {
                    featureType: "poi.sport_complex",
                    elementType: "geometry.fill",
                    stylers: [
                        { hue: main_color },
                        { visibility: "on" },
                        { lightness: brightness_value },
                        { saturation: saturation_value }
                    ]
                },
                {
                    featureType: "poi.attraction",
                    elementType: "geometry.fill",
                    stylers: [
                        { hue: main_color },
                        { visibility: "on" },
                        { lightness: brightness_value },
                        { saturation: saturation_value }
                    ]
                },
                {
                    featureType: "poi.business",
                    elementType: "geometry.fill",
                    stylers: [
                        { hue: main_color },
                        { visibility: "on" },
                        { lightness: brightness_value },
                        { saturation: saturation_value }
                    ]
                },
                {
                    featureType: "transit",
                    elementType: "geometry.fill",
                    stylers: [
                        { hue: main_color },
                        { visibility: "on" },
                        { lightness: brightness_value },
                        { saturation: saturation_value }
                    ]
                },
                {
                    featureType: "transit.station",
                    elementType: "geometry.fill",
                    stylers: [
                        { hue: main_color },
                        { visibility: "on" },
                        { lightness: brightness_value },
                        { saturation: saturation_value }
                    ]
                },
                {
                    featureType: "landscape",
                    stylers: [
                        { hue: main_color },
                        { visibility: "on" },
                        { lightness: brightness_value },
                        { saturation: saturation_value }
                    ]

                },
                {
                    featureType: "road",
                    elementType: "geometry.fill",
                    stylers: [
                        { hue: main_color },
                        { visibility: "on" },
                        { lightness: brightness_value },
                        { saturation: saturation_value }
                    ]
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry.fill",
                    stylers: [
                        { hue: main_color },
                        { visibility: "on" },
                        { lightness: brightness_value },
                        { saturation: saturation_value }
                    ]
                },
                {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [
                        { hue: main_color },
                        { visibility: "on" },
                        { lightness: brightness_value },
                        { saturation: saturation_value }
                    ]
                }
            ];

            //set google map options
            var map_options = {
                center: new google.maps.LatLng(latitude, longitude),
                zoom: map_zoom,
                panControl: false,
                zoomControl: false,
                mapTypeControl: false,
                streetViewControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
                styles: style
            }
            //inizialize the map
            var map = new google.maps.Map(document.getElementById('google-container'), map_options);
            //add a custom marker to the map
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(latitude, longitude),
                map: map,
                visible: true,
                icon: marker_url
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

            initMenu();

        };

        var initMenu = function() {
            var $lateral_menu_trigger = $('#cd-menu-trigger'),
                $content_wrapper = $('.cd-main-content'),
                $navigation = $('header');

            //open-close lateral menu clicking on the menu icon
            $lateral_menu_trigger.on('click', function(event){
                event.preventDefault();

                $lateral_menu_trigger.toggleClass('is-clicked');
                $navigation.toggleClass('lateral-menu-is-open');
                $content_wrapper.toggleClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
                    // firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
                    $('body').toggleClass('overflow-hidden');
                });
                $('#cd-lateral-nav').toggleClass('lateral-menu-is-open');

                //check if transitions are not supported - i.e. in IE9
                if($('html').hasClass('no-csstransitions')) {
                    $('body').toggleClass('overflow-hidden');
                }
            });

            //close lateral menu clicking outside the menu itself
            $content_wrapper.on('click', function(event){
                if( !$(event.target).is('#cd-menu-trigger, #cd-menu-trigger span') ) {
                    $lateral_menu_trigger.removeClass('is-clicked');
                    $navigation.removeClass('lateral-menu-is-open');
                    $content_wrapper.removeClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
                        $('body').removeClass('overflow-hidden');
                    });
                    $('#cd-lateral-nav').removeClass('lateral-menu-is-open');
                    //check if transitions are not supported
                    if($('html').hasClass('no-csstransitions')) {
                        $('body').removeClass('overflow-hidden');
                    }

                }
            });

            //open (or close) submenu items in the lateral menu. Close all the other open submenu items.
            $('.item-has-children').children('a').on('click', function(event){
                event.preventDefault();
                $(this).toggleClass('submenu-open').next('.sub-menu').slideToggle(200).end().parent('.item-has-children').siblings('.item-has-children').children('a').removeClass('submenu-open').next('.sub-menu').slideUp(200);
            });
        };


    }]);