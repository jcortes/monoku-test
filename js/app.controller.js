(function () {
    'use strict';
    
    angular.module('monokuTest')
    .config(config)
    .controller('MainCtrl', MainCtrl);
    
    config.$inject = ['$routeProvider'];
    /* @ngInject */
    function config($routeProvider){
        $routeProvider
        .when('/', {
            templateUrl: 'main.html',
            controller: MainCtrl
        })
        .otherwise({
            redirectTo : '/'
        });
    }

    MainCtrl.$inject = ['$scope', 'monokuArtist'];
    /* @ngInject */
    function MainCtrl($scope, monokuArtist){
        var vm = $scope;
        
        $scope.$watch('artist', function(val) {
            monokuArtist.getArtists(val)
            .then(function(data) {
                vm.artists = null;
                if(data.results){
                    vm.artists = data.results.artistmatches.artist;
                }
            });
        });
    }
})();