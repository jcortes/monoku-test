(function () {
    'use strict';

    angular.module('monokuTest', ['ngMessages', 'ngAnimate', 'ngRoute'])
    .constant('API_KEY', '93006abec2d1540d9588bff7a82300fa')
    .constant('API_PREFIX', 'http://ws.audioscrobbler.com/2.0')
    .constant('API_ARTIST_SEARCH', '/?method=artist.search&artist={{ artist_name }}&api_key={{ api_key }}&format=json&limit={{ limit }}')
    .constant('API_ARTIST_INFO', '/?method=artist.getinfo&artist={{ artist_name }}&api_key={{ api_key }}&format=json')
    .constant('API_ARTIST_SIMILAR', '/?method=artist.getsimilar&artist={{ artist_name }}&api_key={{ api_key }}&format=json&limit={{ limit }}');

})();