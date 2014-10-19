/**
 * Created by alehatsman on 10/18/14.
 */

angular.module('playground').directive('moreInfo', function() {
    return {
        restrict: 'E',
        templateUrl: 'assets/views/more-info.html',
        controller: 'MapCtrl'
    };
});