angular.module('TelePic').controller('HomeController', [
    '$scope',
    function($scope) {
    	console.log('dpoingpjndfn')
    	//get number of existing games for this user, mock for now
    	var iButtons = 4;
    	$scope.aButtons = ['New Game'];
    	for(var i = 0; i < iButtons; i++) {
    		$scope.aButtons.push('Game#'+(i+1));
    	}
    }
]);