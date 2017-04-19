angular.module('index', ['ngMaterial'])
    .controller('AppCtrl', function ($scope) {
        $scope.showcard = true; // Fixme: Only For Test
        $scope.blur = 'none';

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

        $scope.show = function () {
            $scope.showcard = true;
            $scope.blur = 'blur(5px)';
        }

        $scope.cancel = function () {
            $scope.showcard = false;
            $scope.blur = 'none';
        }
    });