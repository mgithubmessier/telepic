var telepic = angular.module('TelePic', ['ngRoute','swxSessionStorage']);
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
	when('/game/:sGameId', {
		templateUrl: 'app/templates/game/game_menu.html',
		controller: 'GameController'
	})
}])
