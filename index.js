angular.module('index', ['ngMaterial'])
    .controller('AppCtrl', function ($scope) {
        $scope.rating = {
            love: 50,
            life: 50,
            safety: 50,
        };

        $scope.reset = function () {
            $scope.rating = {
                love: 50,
                life: 50,
                safety: 50,
            };
        }
    });