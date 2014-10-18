/**
 * Created by Aleh_Atsman on 10/14/2014.
 */
'use strict';
angular
    .module('playground', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute'
    ]).config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'assets/views/map.html',
                controller: 'MapCtrl'
            })
            .when('/home', {
                templateUrl: 'assets/views/homeTmpl.html',
                controller: 'MapCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
