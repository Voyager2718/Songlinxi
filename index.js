angular.module('index', ['ngMaterial'])
    .controller('AppCtrl', function ($scope) {
        $scope.rating = {
            rating1: 50,
            rating2: 50,
        };
    });