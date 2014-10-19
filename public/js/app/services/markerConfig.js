/**
 * Created by alehatsman on 10/18/14.
 */
'use strict';

angular.module("playground").factory('MarkerConfig', [function() {
    var module = {};

    module.getIconStyle = function(type) {
        //google map custom marker icon - .png fallback for IE11
        var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
        var marker_url = ( is_internetExplorer11 ) ? 'assets/img/cd-icon-location.png' : 'assets/img/cd-icon-location.svg';

        return marker_url;
    };

    return module;
}]);