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

        if(type === 0) {
            return marker_url;
        } else if(type === 1) {
            return 'assets/img/basketball.png';

        } else if(type === 2) {
            return 'assets/img/soccer.png';
        } else if (type === 3) {
            return 'assets/img/volleyball7.png';
        } else if(type === 4) {
            return 'assets/img/rugby98.png';
        } else if(type === 5) {
            return marker_url;
        }
    };

    return module;
}]);