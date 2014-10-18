/**
 * Created by Petr Shypila on 10/18/14.
 */
'use strict';

angular.module('playground').directive('leftMenu', function() {
    return {
        restrict: 'E',
        templateUrl: 'assets/views/left-menu.html',
        controller: 'LeftMenuCtrl'
    };
});

angular.module('playground').controller('LeftMenuList', function($scope) {
    var menuCategory1 = {categoryName: 'Sport', subcategories: ['Football', 'Basketball', 'Hockey']};
    var menuCategory3 = {categoryName: 'Hobby', subcategories: ['Coding', 'Hacking', 'Developing']};
    var menuCategory2 = {categoryName: 'Huyati', subcategories: ['Trash', 'Freak']};
    $scope.menuList = [menuCategory1, menuCategory2, menuCategory3];
});