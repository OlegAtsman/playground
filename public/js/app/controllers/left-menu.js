/**
 * Created by alehatsman on 10/18/14.
 */

'use strict';

angular.module('playground').controller('LeftMenuCtrl', ['$scope', function($scope) {

    $scope.init = function() {
        //open (or close) submenu items in the lateral menu. Close all the other open submenu items.
        $('.item-has-children').children('a').on('click', function(event){
            event.preventDefault();
            $(this).toggleClass('submenu-open').next('.sub-menu').slideToggle(200).end().parent('.item-has-children').siblings('.item-has-children').children('a').removeClass('submenu-open').next('.sub-menu').slideUp(200);
        });
    };


}]);