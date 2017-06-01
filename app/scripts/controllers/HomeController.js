angular.module('TelePic').controller('HomeController', [
    '$scope',
    '$http',
    '$sessionStorage',
    function($scope, $http, $sessionStorage) {
    	//get number of existing games for this user, mock for now
        // $http.get('app/mock_data/getGames_response.json').then(function(jsonData) {
        //     $scope.aoGameData = jsonData.data;
    	// }); 
        var request = ({
            method: 'POST',
            url: 'https://v07mdz4sdd.execute-api.us-east-1.amazonaws.com/Production/games',
            data: {
            	token: $sessionStorage.token
            }
        });
        $http(request).then(function(response) {
        	if(response.data.ERROR) {
        		$scope.loginStatus = response.data.ERROR;
        	} else {
                var jsonGames = response.data.games;
                $scope.aoGameData = [];
                for(game in jsonGames) {
                    $scope.aoGameData.push({
                        sName: game,
                        sStatus: jsonGames[game]
                    });
                }
        	}
        }, function(response) {
        	$scope.loginStatus = 'There has been an error on our service. Please try again later.';
        });  
    }
]);