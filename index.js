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
            $scope.blur = 'blur(15px)';
        }

        $scope.cancel = function () {
            $scope.showcard = false;
            $scope.blur = 'none';
        }
    });

var title = '♥~~~♥~~~♥~~~♥~~~'
setInterval(function () {
    title = title.substr(1) + title.substr(0, 1);
    document.title = "♥ Love ♥ " + title;
}, 250);