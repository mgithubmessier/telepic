angular.module('TelePic').controller('GameController', [
    '$scope',
    '$routeParams',
    '$http',
    function($scope, $routeParams, $http) {
        console.log($routeParams.iGameId);
        $scope.iSelectedGame = $routeParams.iGameId;
        var jsonGames;
        $http.get('app/mock_data/games.json').then(function(data) {
            jsonGames = data.data;
        });
    }
]);