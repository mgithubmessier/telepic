angular.module('TelePic').controller('HomeController', [
    '$scope',
    '$http',
    function($scope, $http) {
    	//get number of existing games for this user, mock for now
        $http.get('app/mock_data/getGames_response.json').then(function(jsonData) {
            $scope.aoGameData = jsonData.data;
        }); 
    }
]);