/**
 * Created by Aleh_Atsman on 10/14/2014.
 */
'use strict';

angular.module('playground')
    .controller('CatCtrl', ['$scope', '$routeParams', 'Cat', function($scope, $routeParams, Cat) {
    var cats = Cat.query();
    $scope.cats = cats;
}]);