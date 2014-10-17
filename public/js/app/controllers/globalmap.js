/**
 * Created by Aleh_Atsman on 10/16/2014.
 */

'use strict';

angular.module('playground')
    .controller('GlobalMapCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
        $scope.initMap = function() {
            var mapOptions = {
                center: new google.maps.LatLng(-34.397, 150.644),
                zoom: 8,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

            google.maps.event.addListener(map, 'click', function(e) {
                var marker = new google.maps.Marker({
                    position: e.latLng,
                    map: map,
                    title: "Test title"
                });
                var infowindow = new google.maps.InfoWindow({
                    content:'<div style="width:200px; height:100px">Some text</div>'
                });
                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.open(map,marker);
                });
            });
        };
    }]);