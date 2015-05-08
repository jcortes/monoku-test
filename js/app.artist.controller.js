(function () {
    'use strict';
    
    angular.module('monokuTest')
    .config(config)
    .controller('ArtistCtrl', ArtistCtrl);
    
    config.$inject = ['$routeProvider'];
    /* @ngInject */
    function config($routeProvider){
        $routeProvider
        .when('/artist/:name', {
            templateUrl: 'artist.html',
            controller: ArtistCtrl
        })
        .otherwise({
            redirectTo : '/'
        });
    }
    
    ArtistCtrl.$inject = ['$scope', '$routeParams', 'monokuArtist'];
    /* @ngInject */
    function ArtistCtrl($scope, $routeParams, monokuArtist){
        var vm = $scope;
        
        monokuArtist.getArtist($routeParams.name)
        .then(function(data) {
            if(data.artist){
                vm.artist = data.artist;
                console.log(vm.artist);
            }
        });
        
        monokuArtist.getArtistsSim($routeParams.name)
        .then(function(data) {
            if(data.similarartists){
                vm.simartist = data.similarartists.artist;
            }
        });
    }
})();