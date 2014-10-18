/**
 * Created by Aleh_Atsman on 10/16/2014.
 */

'use strict';

angular.module('playground')
    .controller('MapCtrl', ['$scope', '$routeParams', 'Maps', function($scope, $routeParams, Maps) {
        $scope.initMap = function() {
            Maps.createMap();
        };

        $scope.contentWrapperClick = function() {
            //close lateral menu clicking outside the menu itself
            $content_wrapper.on('click', function(event){

                var $lateral_menu_trigger = $('#cd-menu-trigger'),
                    $content_wrapper = $('.cd-main-content'),
                    $navigation = $('header');

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
        };
    }]);