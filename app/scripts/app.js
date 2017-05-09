var telepic = angular.module('TelePic', ['ngRoute']);
telepic.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);
telepic.config(['$routeProvider',function($routeProvider) {
	$routeProvider.
	when('/login', {
		templateUrl: 'app/templates/login.html',
		controller: 'LoginController'
	}).
	when('/home', {
		templateUrl: 'app/templates/home.html',
		controller: 'HomeController'
	}).
	when('/game/:iGameId', {
		templateUrl: 'app/templates/game.html',
		controller: 'GameController'
	})
}])
