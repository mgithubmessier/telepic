angular.module('TelePic').controller('HomeController', [
    '$scope',
    function($scope) {
    	//get number of existing games for this user, mock for now
    	var iNumGameIds = 4;
    	$scope.sNewGame = 'New';
    	$scope.aGameIds = [];
    	for(var i = 0; i < iNumGameIds; i++) {
    		$scope.aGameIds.push((i+1));
    	}
    }
]);