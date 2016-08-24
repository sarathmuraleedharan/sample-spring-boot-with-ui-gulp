/**
 * Created by Sarath Muraleedharan on 25-08-2016.
 */
(function () {
    'use strict';
    angular
        .module('sampleApp').controller('HomeController', function ($http) {
        var vm = this;
        $http.get('/api/message').success(function (respose) {
            vm.message = respose.message;
            console.log(respose);
        }).error(function (error) {
            console.log(respose);
        });
    });
})();

