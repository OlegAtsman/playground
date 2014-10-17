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
                templateUrl: 'assets/views/main.html',
                controller: 'CatCtrl'
            })
            .when('/globalmap', {
                templateUrl: 'assets/views/globalmap.html',
                controller: 'GlobalMapCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
