/**
 * Created by Aleh_Atsman on 10/14/2014.
 */
angular.module("playground").factory('Cat', ['$resource', function($resource) {
    return $resource('api/cats/:catId', {}, {
        'update': {method: 'PUT'}
    });
}]);