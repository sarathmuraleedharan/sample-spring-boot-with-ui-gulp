(function () {
    'use strict';
    angular
        .module('sampleApp').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/home/home.html',
                controller:'HomeController',
                controllerAs:'vm'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'app/about/about.html',
                controller:'AboutController',
                controllerAs:'vm'
            });
    });
})();
