(function () {
    'use strict';

    angular.module('monokuTest')
    .factory('monokuReq', monokuReq)
    .factory('monokuArtist', monokuArtist);

    monokuReq.$inject = ['$http', '$q', 'API_PREFIX'];
    /* @ngInject */
    function monokuReq($http, $q, API_PREFIX) {
        return function(path) {
            var defer = $q.defer();
            $http.get(API_PREFIX + path)
            .success(function(data){
                defer.resolve(data);
            })
            .error(function(data, status){
                console.log('Error status: ' + status);
            });
            return defer.promise;
        };
    }
    
    monokuArtist.$inject = ['$q', '$interpolate', 'monokuReq', 'API_KEY', 'API_ARTIST_SEARCH', 'API_ARTIST_INFO', 'API_ARTIST_SIMILAR'];
    /* @ngInject */
    function monokuArtist($q, $interpolate, monokuReq, API_KEY, API_ARTIST_SEARCH, API_ARTIST_INFO, API_ARTIST_SIMILAR) {
        
        return {
            getArtist: getArtist,
            getArtists: getArtists,
            getArtistsSim: getArtistsSim
        };
        
        function getArtistsSim(name) {
            var defer = $q.defer();
            var path = $interpolate(API_ARTIST_SIMILAR)({
                api_key: API_KEY,
                artist_name: name,
                limit: 15
            });
            monokuReq(path).then(function(data){
                defer.resolve(data);
            });
            return defer.promise;
        }
        
        function getArtist(name) {
            var defer = $q.defer();
            var path = $interpolate(API_ARTIST_INFO)({
                api_key: API_KEY,
                artist_name: name
            });
            monokuReq(path).then(function(data){
                defer.resolve(data);
            });
            return defer.promise;
        }
        
        function getArtists(name){
            var defer = $q.defer();
            var path = $interpolate(API_ARTIST_SEARCH)({
                api_key: API_KEY,
                artist_name: name,
                limit: 15
            });
            monokuReq(path).then(function(data){
                defer.resolve(data);
            });
            return defer.promise;
        };
    }
})();