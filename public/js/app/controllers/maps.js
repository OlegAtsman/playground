/**
 * Created by Aleh_Atsman on 10/16/2014.
 */

var globalCallbackHach = '';

'use strict';

angular.module('playground')
    .controller('MapCtrl', ['$scope', '$routeParams', 'Maps', 'JqueryTrash', 'Marker', 'NewEventButton', '$http',
        function($scope, $routeParams, Maps, JqueryTrash, Marker, newEventButton, $http) {

        $scope.isVisibleMoreIfno = '';
        $scope.googleContrainerMoreInfo = '';
        $scope.event = {};
        $scope.dontCome = '';
        $scope.footerVisible = '';
        $scope.ifYouWillCome = '';

        var showMoreInfo = '';
        var hideMoreInfo = '';

        function checkRightButton() {
            $http.get('/api/events/user/' + $scope.event.id).
                success(function(data, status, headers, config) {
                    if(!data) {
                        $scope.ifYouWillCome = 'is-visible';
                        $scope.dontCome = 'not-visible';
                    } else {
                        $scope.ifYouWillCome = 'not-visible';
                        $scope.dontCome = 'is-visible';
                    }
                    $http.get('/api/users/event/' + $scope.event.id).
                        success(function(data) {
                            $scope.whoWillCome = data;
                        });
                }).
                error(function(data, status, headers, config) {
                    console.log("err");
                });
        }

        globalCallbackHach = function(marker, event) {

            showMoreInfo = function showMoreInfo(isIgo) {
                $scope.isVisibleMoreIfno = 'is-visible';
                $scope.googleContrainerMoreInfo = 'more-info';
                $scope.footerVisible = 'not-visible';
                if(!isIgo) {
                    $scope.ifYouWillCome = 'is-visible';
                    $scope.dontCome = 'not-visible';
                } else {
                    $scope.ifYouWillCome = 'not-visible';
                    $scope.dontCome = 'is-visible';
                }
            }

            hideMoreInfo = function hideMoreInfo() {
                $scope.isVisibleMoreIfno = '';
                $scope.googleContrainerMoreInfo = '';
                $scope.ifYouWillCome = 'not-visible';
                $scope.dontCome = 'not-visible';
                $scope.footerVisible = 'is-visible';
            }

            $scope.event = event;

            $http.get('/api/events/user/' + event.id).
                success(function(data, status, headers, config) {

                    $http.get('/api/users/event/' + event.id).
                        success(function(data) {
                           $scope.whoWillCome = data;
                        });

                    showMoreInfo(data);
                }).
                error(function(data, status, headers, config) {
                    console.log("err");
                });
            google.maps.event.addListener(Maps.map, 'click', function() {
                hideMoreInfo();
                google.maps.event.clearListeners(map, "click");
                newEventButton.doGreen();
            });

        };

        $scope.initMap = function() {
            Maps.init();
            Marker.loadAndAddAllMarkers(Maps.map, globalCallbackHach);
        };

        $scope.contentWrapperClick = function() {
            JqueryTrash.contentWrapperClick();
        };

        $scope.iWillCome = function() {
            $http.post('/api/addUserToEvent/' + $scope.event.id).success(function() {
                checkRightButton();
            });
        };

        $scope.iDontCome = function() {
            $http.post('/api/removeUserFromEvent/' + $scope.event.id).success(function() {
                checkRightButton();
            });
        }

    }]);